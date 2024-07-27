import React, {useState, useContext, useEffect} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Dropdown, Space, Menu, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './style.scss'
import { AppContext } from '../../store/Provider'
import LogInSignUpContainer from '../LogInSignUp/LogInSignUpContainer'


export default function Navigation() {
    const [logInModalOpen, setLogInModalOpen] = useState(false)
    const sessionUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    const state = useContext(AppContext)
    const items = [{
      key: 0,
      label: 'Profile'
    },
    {
        key: 1,
        label: 'Messages',
    }, {
        key: 2,
        label: 'Pending Requests'
    }, {
        key: 3,
        label: 'Status Centre'
    }, {
        key: 4,
        label: 'Log Out'
    }]

    useEffect(() => {
      setLogInModalOpen(false)

    }, [state.appState.user.username])

    return (
        <Navbar className="nav-wrapper">
        <Container>
          <Navbar.Brand href="/"><span className='project-text'>Project</span><span className='rec-text'>Rec</span></Navbar.Brand>
          <div className='nav-links-container'>
            <Nav.Link className='navigation-link'>Home</Nav.Link>
            <Nav.Link className='navigation-link'>Listings</Nav.Link>
            <Nav.Link className='navigation-link'>Applications</Nav.Link>
          </div>
          <Navbar.Collapse className="justify-content-end">
            {sessionUser?.username.length > 0 ?            
            <Dropdown menu={{items}} className='user-dropdown'>
                <Space><UserOutlined /><span className='username-text'>{sessionUser.fname} {sessionUser.lname}</span></Space>
            </Dropdown>
            :
            <Button onClick={() => setLogInModalOpen(true)}>Log In / Sign Up</Button>
            }
            <LogInSignUpContainer open={logInModalOpen} close={() => setLogInModalOpen(false)}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}