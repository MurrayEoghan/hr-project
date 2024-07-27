import React, {useContext, useState, useEffect} from 'react'
import {AppContext} from '../../store/Provider'
import { Modal, Tabs, Button } from 'antd'
import type { TabsProps } from 'antd'
import axios from 'axios'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/Signup'

interface LogInSignUpContainerProps {
    open: boolean,
    close: () => any
}


export default function LogInSignUpContainer(props: LogInSignUpContainerProps) {
    const state: any = useContext(AppContext)
    const [selectedTab, setSelectedTab] = useState<string>('login')
    const [loginDetails, setLoginDetails] = useState<any>({username: '', password: ''})

    const handleLoginUsername = (e) => {
        setLoginDetails(prevState => ({username: e.target.value, password: prevState.password}))
    }
    const handleLoginPassword = (e) => {
        setLoginDetails(prevState => ({username: prevState.username, password: e.target.value}))
    }

    const items: TabsProps['items'] = [
        {
            key: 'login', label: 'Log in', children: <LogIn handleUsernameChange={handleLoginUsername} handlePasswordChange={handleLoginPassword}/>
        },
        {
            key: 'signup', label: 'Sign up', children: <SignUp />
        }
    ]
    useEffect(() => {
        setSelectedTab('login')
    }, [props.open])

    const handleLogInSubmit = async () => {
        try {
            console.log(loginDetails)
            await axios({
                method: 'post',
                url: 'http://localhost:3001/user',
                data: {
                    username: loginDetails.username,
                    password: loginDetails.password
                }
            }).then(res => {
                console.log(res)
                state.set({user: res.data[0]})
                sessionStorage.setItem('loggedInUser', JSON.stringify({username: res.data[0].username, fname: res.data[0].fname, lname: res.data[0].lname}))
                props.close()
            })
        } catch (error) {
            console.error(error)
        }
    }

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
                <Button key='submit' onClick={handleLogInSubmit}>Submit</Button>
            ]}
        >
            <Tabs
                items={items}
                activeKey={selectedTab}
                onChange={handleTabChange}
                indicator={{ size: (origin) => origin - 20, align: 'center' }}
            />
        </Modal>
    )
}