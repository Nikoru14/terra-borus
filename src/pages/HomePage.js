// src/pages/HomePage.js
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Map from '../components/Map';
import '../styles/navbar.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import TreeList from '../components/TreeList';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Faqs from '../components/Faqs';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>

      {/* Header Section */}
      <div>
        <div className='col m-12'></div>
        <NavigationBar />
      </div>
      <div className="nav" expand="lg">
            <Navbar.Brand href="/"><div className='overview12'>Map Overview</div></Navbar.Brand>
            <Nav className="nav_bar1 d-flex justify-content-end">
                <NavDropdown title="Trees Species" id="species-dropdown" className="species">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Trees List" id="list-dropdown" className="list">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Trees Status" id="status-dropdown" className="status">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Trees Cycle" id="cycle-dropdown" className="cycle">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </div>
      {/* Map Section */}
        <div className='mapContainer'>
          <Map />
        </div>

      {/* TreeList Section */}
      <div className='treelist'>
        <TreeList />
      </div>     

      {/* Gallery Section */}
      <div className='gallerys'>
        <Gallery />
      </div>     

      {/* Faqs Section */}
      <div className='faqss'>
        <Faqs />
      </div>     

      {/* Footer Section */}
      <footer className='footer1'>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
