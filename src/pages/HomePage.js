// src/pages/HomePage.js
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Map from '../components/Map';
import '../styles/navbar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import TreeList from '../components/TreeList';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <NavigationBar />
            <Navbar className="nav" expand="lg">
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
            <div className='mapContainer'>
                <Map />
            </div>
            {/*<TreeList />
            <FAQ />
            <Footer />*/}
        </>
    );
};

export default HomePage;
