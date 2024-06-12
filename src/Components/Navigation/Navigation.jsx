import React from 'react'
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import './style.scss'


export default function Navigation() {
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
            <Navbar.Text>
              <Button variant='success'>Mark Otto</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}