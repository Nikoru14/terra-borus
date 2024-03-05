// src/pages/HomePage.js
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Map from '../components/Map';
import '../styles/navbar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import TreeList from '../components/TreeList';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
        <div>
            <div className='col m-12'></div>
            <NavigationBar />
            <Navbar className="nav" expand="lg">
                <Navbar.Brand href="/"><div className='overview'>Map Overview</div></Navbar.Brand>
                    <Nav className="nav_bar1 d-flex justify-content-end">
                    <NavDropdown title="Trees Species" id="species-dropdown" className="species">
                        <NavDropdown.Item href="/">1</NavDropdown.Item>
                        <NavDropdown.Item href="/">2</NavDropdown.Item>
                        <NavDropdown.Item href="/">3</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Trees List" id="list-dropdown" className="list">
                        <NavDropdown.Item href="/">1</NavDropdown.Item>
                        <NavDropdown.Item href="/">2</NavDropdown.Item>
                        <NavDropdown.Item href="/">3</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Trees Status" id="status-dropdown" className="status">
                        <NavDropdown.Item href="/">1</NavDropdown.Item>
                        <NavDropdown.Item href="/">2</NavDropdown.Item>
                        <NavDropdown.Item href="/">3</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Trees Cycle" id="cycle-dropdown" className="cycle">
                        <NavDropdown.Item href="/">1</NavDropdown.Item>
                        <NavDropdown.Item href="/">2</NavDropdown.Item>
                        <NavDropdown.Item href="/">3</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
            </Navbar>
            <div className='mapContainer'>
                <Map />
            </div>
            </div>

            {/*<TreeList />
            <FAQ />
            <Footer />*/}
        </>
    );
};

export default HomePage;
