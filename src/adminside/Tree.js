import React, { useState } from 'react';
import Map from '../components/Map';
import Sidebar from '../adminside/Sidebar';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tree() {
    return (
    <>
      <div className="App">
        
      <Sidebar/>
        <section className="tree-section">
        <br/><br/>
        <h1 className="text">Trees</h1>
        <br/>
        <Container>
        <Container>
            <Nav.Link  className="addtreebtn" href="/TreeForm">Add Tree</Nav.Link><br/><br/>
            <Nav className="nav_bartree d-flex justify-content-end">
                <Col xs={12} md={4}>
                <NavDropdown title="Choose Species" id="species-dropdown" className="species">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>
                </Col>
                <Col xs={12} md={4}>
                <NavDropdown title="Choose Status" id="list-dropdown" className="list">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>
                </Col>
                <Col xs={12} md={4}>
                <NavDropdown title="Tree Cycle" id="status-dropdown" className="status">
                    <NavDropdown.Item href="/" className="nav-link-custom11">1</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">2</NavDropdown.Item>
                    <NavDropdown.Item href="/" className="nav-link-custom11">3</NavDropdown.Item>
                </NavDropdown>
                </Col>
                </Nav>
                <br/><br/>
    <Row>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="name">Name:</label>
            <input type="text" class="fieldlabels" id="name" name="name" />
        </Col>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="description">Description:</label>
            <input type="text" class="fieldlabels" id="description" name="description" required />
        </Col>
    </Row><br/><br/>
    <Row>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="date">Date:</label>
            <input type="text" class="fieldlabels" id="date" name="date" required />
        </Col>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="otherNames">Other Names:</label>
            <input type="text" class="fieldlabels" id="otherNames" name="otherNames" />
        </Col>
    </Row><br/><br/>
    <Row>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="longitude">Longitude:</label>
            <input type="text" class="fieldlabels" id="longitude" name="longitude" required />
        </Col>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="latitude">Latitude:</label>
            <input type="text" class="fieldlabels" id="latitude" name="latitude" />
        </Col>
    </Row><br/><br/>
    <Row>
        <Col xs={12} md={6}>
            <label id='addtreelabel' >Upload File</label>
            <input type="file" class="fieldlabels" name="pic" accept="image/*" />
        </Col>
        <Col xs={12} md={6}>
            <Nav.Link  className="submitbtntree" href="#">Submit</Nav.Link>
        </Col>
    </Row><br/><br/>
    <Row>
        <Col xs={12} md={6}>
            <label id='addtreelabel' for="namePlanter">Name of Planter:</label>
            <input type="text" class="fieldlabels" id="nameplanter" name="nameplanter" />
        </Col>
    </Row>
</Container>

                {/* Map Section */}
                <div className='mapContainerAdminMap'>
            <Map />
          </div>
          </Container>
        </section>
        
      </div>
      </>
    );
  }

  export default Tree;