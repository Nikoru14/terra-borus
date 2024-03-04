import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/navbar.css'

const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="lg" data-bs-theme="dark">
            <Navbar.Brand href="/"><div className='logo'>TerraBorus</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="nav-collapse justify-content-center" id="basic-navbar-nav">
                <Nav className="nav_bar mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Blog</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                    <Nav.Link href="/">Add Tree</Nav.Link>
                    {/* <Nav.Link href="/blog">Blog</Nav.Link>
                    ... other links */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
