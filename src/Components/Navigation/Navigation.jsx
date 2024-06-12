import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Dropdown, Space, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './style.scss'


export default function Navigation() {

    const items = [{
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

    // const items = (
    //     <Menu>
    //         <Menu.Item>Messages</Menu.Item>
    //         <Menu.Item>Pending Requests</Menu.Item>
    //         <Menu.Item>Status Centre</Menu.Item>
    //     </Menu>
    // )

    return (
        <Navbar className="nav-wrapper">
        <Container>
          <Navbar.Brand href="#home"><span className='project-text'>Project</span><span className='rec-text'>Rec</span></Navbar.Brand>
          <div className='nav-links-container'>
            <Nav.Link className='navigation-link'>Home</Nav.Link>
            <Nav.Link className='navigation-link'>Listings</Nav.Link>
            <Nav.Link className='navigation-link'>Applications</Nav.Link>
          </div>
          <Navbar.Collapse className="justify-content-end">
            <Dropdown menu={{items}} className='user-dropdown'>
                <Space><UserOutlined />Username</Space>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}