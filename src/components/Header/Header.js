import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './header.css'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar" >
            <Navbar.Brand href="http://localhost:3001/">SecureGrid</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="login">Go to Dashboard</Nav.Link>

                </Nav>
                <Nav className="ml-auto">
                    {/* <Nav.Link href="inbox">Messages</Nav.Link> */}
                    {/* <Nav.Link href="profile">Profile</Nav.Link> */}
                    <Nav.Link href="about">About</Nav.Link>
                    {/* <Button variant="light">Logout</Button> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;