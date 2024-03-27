import React, { useState } from 'react';
import Map from '../components/Map';
import Sidebar from '../adminside/Sidebar';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function AdminMap() {
    return (
    <>
    
      <div className="App">
      <Sidebar/>

        <section className="tree-section">
            <br/><br/>
        <div className="nav" expand="lg">
            <Navbar.Brand href="/"><div className='overview13'>Map Overview</div></Navbar.Brand>
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
            <div className='mapContainerAdminMap'>
            <Map />
          </div><br/><br/>
          <Row>
          <Col xs={12} md={4}>
        </Col>
        <Col xs={12} md={3}>
        </Col>
        <Col xs={12} md={2}>
            <Nav.Link  className="submitbtntree" href="#">Edit Tag</Nav.Link>
        </Col>
        <Col xs={12} md={2}>
            <Nav.Link  className="submitbtntree" href="#">Delete Tag</Nav.Link>
        </Col>
        <Col xs={12} md={1}>
        </Col>
    </Row><br/><br/><br/><br/>
        </section>
      </div>
      </>
    );
  }

  export default AdminMap;