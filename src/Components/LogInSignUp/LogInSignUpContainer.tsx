import React, {useContext, useState, useEffect} from 'react'
import {AppContext} from '../../store/Provider'
import { Modal, Tabs, Button } from 'antd'
import Snackbar from '@mui/material/Snackbar'
import type { TabsProps } from 'antd'
import axios from 'axios'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/Signup'
import { Alert } from '@mui/material'

interface LogInSignUpContainerProps {
    open: boolean,
    close: () => any
}


export default function LogInSignUpContainer(props: LogInSignUpContainerProps) {
    const state: any = useContext(AppContext)
    const [openToast, setOpenToast] = useState({status: false, type: 'success'})
    const [passwordsMatch, setPasswordsMatch] = useState({password: '', passwordConfirm: ''})
    const [selectedTab, setSelectedTab] = useState<string>('login')
    const [loginDetails, setLoginDetails] = useState<any>({username: '', password: ''})
    const [signUpDetails, setSignUpDetails] = useState<any>({fname: '', lname: '', username: '', password: '', passwordConfirm: '', email: '', jobTitle: '', company: '', phone: ''})

    const handleSignUpFields = (e: any) => {
        switch(e.target.id) {
            case 'fname':
                setSignUpDetails(prevState => ({...prevState, fname: e.target.value}))
                break;
            case 'lname':
                setSignUpDetails(prevState => ({...prevState, lname: e.target.value}))
                break;
            case 'username':
                setSignUpDetails(prevState => ({...prevState, username: e.target.value}))
                break;
            case 'password':
                setSignUpDetails(prevState => ({...prevState, password: e.target.value}))
                break;
            case 'passwordConfirm':
                setSignUpDetails(prevState => ({...prevState, passwordConfirm: e.target.value}))
                break;
            case 'email':
                setSignUpDetails(prevState => ({...prevState, email: e.target.value}))
                break;
            case 'jobTitle':
                setSignUpDetails(prevState => ({...prevState, jobTitle: e.target.value}))
                break;
            case 'company':
                setSignUpDetails(prevState => ({...prevState, company: e.target.value}))
                break;
            case 'phone':
                setSignUpDetails(prevState => ({...prevState, phone: e.target.value}))
                break;
            default:
                break;
        }
    }

    const handlePasswordSignupChange = (e: any, variation: string) => {
        if(variation === 'pass') {
            setPasswordsMatch(prevState => ({...prevState, password: e.target.value}))
        } else {
            setPasswordsMatch(prevState => ({...prevState, passwordConfirm: e.target.value}))
        }
    }

    const handleLoginUsername = (e: any) => {
        setLoginDetails(prevState => ({username: e.target.value, password: prevState.password}))
    }
    const handleLoginPassword = (e: any) => {
        setLoginDetails(prevState => ({username: prevState.username, password: e.target.value}))
    }

    const items: TabsProps['items'] = [
        {
            key: 'login', label: 'Log in', children: <LogIn handleUsernameChange={handleLoginUsername} handlePasswordChange={handleLoginPassword}/>
        },
        {
            key: 'signup', label: 'Sign up', children: <SignUp handleSignUpFieldChange={handleSignUpFields} handlePasswordCheck={handlePasswordSignupChange}/>
        }
    ]

    useEffect(() => {
        setSelectedTab('login')
    }, [props.open])

    const handleLogInSubmit = async () => {
        if(selectedTab === 'login') {
            try {
                await axios({
                    method: 'post',
                    url: 'http://localhost:3001/user',
                    data: {
                        username: loginDetails.username,
                        password: loginDetails.password
                    }
                }).then(res => {
                    state.set({user: res.data[0]})
                    sessionStorage.setItem('loggedInUser', JSON.stringify({username: res.data[0].username, fname: res.data[0].fname, lname: res.data[0].lname}))
                    props.close()
                })
            } catch (error) {
                throw error
            }
        } else {
            try {
                await axios({
                    method: 'post',
                    url: 'http://localhost:3001/signup',
                    data: signUpDetails
                }).then(res => {
                    if(res.status === 204) {
                        setSelectedTab('login')
                        setSignUpDetails({fname: '', lname: '', username: '', password: '', passwordConfirm: '', email: '', jobTitle: '', company: '', phone: ''})
                        setOpenToast({status: true, type: 'success'})

                    }
                })
            } catch (err) {
                setOpenToast({status: true, type: 'error'})
                console.log('user already exists')
            }
        }
    }
    const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenToast({status: false, type: 'success'});
      };

    const handleTabChange = (index: string) => {
        setSelectedTab(index)
    }

    return (
        <Modal 
            open={props.open} 
            onCancel={props.close} 
            onClose={props.close}
            footer={[
                <Button key='cancel' type='text' onClick={props.close}>Cancel</Button>,
                
                <Button key='submit' onClick={handleLogInSubmit} disabled={!((selectedTab === 'login') || ((passwordsMatch.password === passwordsMatch.passwordConfirm) && (passwordsMatch.password.length > 0 && passwordsMatch.passwordConfirm.length > 0))) ?? true}>Submit</Button>
            ]}
        >
            <Tabs
                items={items}
                activeKey={selectedTab}
                onChange={handleTabChange}
                indicator={{ size: (origin) => origin - 20, align: 'center' }}
            />
            <Snackbar open={openToast.status} autoHideDuration={8000} onClose={handleToastClose}>
                {openToast.type === 'success' ? 
                    <Alert onClose={handleToastClose} severity='success' variant='filled' sx={{width: '100%'}}>Congratulations {signUpDetails.fname}. You can now sign in!</Alert> :
                    <Alert onClose={handleToastClose} severity='error' variant='filled' sx={{width: '100%'}}>User already exists</Alert>
                }
            </Snackbar>
        </Modal>
    )
}