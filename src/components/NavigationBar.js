import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="sticky-nav" style={{ backgroundColor: 'rgba(0, 100, 0, 0.8)' }} expand="lg" sticky="top">
                <Navbar.Brand href="/"><div className='logo'>TerraBorus</div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav-collapse justify-content-center" id="basic-navbar-nav">
                    <Nav className="nav_bar mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                        <Nav.Link className="button" href="/">Add Tree</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Navbar className="sticky-nav" expand="lg" sticky="top">
                <Navbar.Brand href="/"><div className='overview'>Map Overview</div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav-collapse justify-content-center" id="basic-navbar-nav">
                    <Nav className="nav_bar mr-auto">
                        <NavDropdown title="Trees Species" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">1</NavDropdown.Item>
                            <NavDropdown.Item href="/">2</NavDropdown.Item>
                            <NavDropdown.Item href="/">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Trees List" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">1</NavDropdown.Item>
                            <NavDropdown.Item href="/">2</NavDropdown.Item>
                            <NavDropdown.Item href="/">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Trees Status" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">1</NavDropdown.Item>
                            <NavDropdown.Item href="/">2</NavDropdown.Item>
                            <NavDropdown.Item href="/">3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Trees Cycle" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">1</NavDropdown.Item>
                            <NavDropdown.Item href="/">2</NavDropdown.Item>
                            <NavDropdown.Item href="/">3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
