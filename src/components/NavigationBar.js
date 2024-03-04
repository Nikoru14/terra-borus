import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navbar className="sticky-nav" style={{ backgroundColor: 'rgba(0, 100, 0, 0.8)' }} expand="lg" sticky="top">
            <Navbar.Brand href="/"><div className='logo'>TerraBorus</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="nav-collapse justify-content-center" id="basic-navbar-nav">
                <Nav className="nav_bar mr-auto text-white">
                    <Nav.Link className="nav_link_custom" href="/">Home</Nav.Link>
                    <Nav.Link className="nav_link_custom" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="nav_link_custom" href="/">About</Nav.Link>
                    <Nav.Link className="nav_link_custom" href="/">Contact</Nav.Link>
                    <Nav.Link className="button" href="/">Add Tree</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
