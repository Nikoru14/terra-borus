import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // find current scroll position
            const currentScrollPos = window.pageYOffset;

            // set state based on location info (compare with previous scroll position)
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            // set state to new scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // add event listener
        window.addEventListener('scroll', handleScroll);

        // remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <Navbar className={`sticky-nav ${visible ? 'visible' : 'hidden'}`} style={{ backgroundColor: 'rgba(0, 100, 0, 0.8)' }} expand="lg" sticky="top">
            <Navbar.Brand href="/"><div className='logo'>TerraBorus</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="nav-collapse justify-content-center" id="basic-navbar-nav">
                <Nav className="nav_bar mr-auto">
                    <Nav.Link className="nav_link_custom" href="/">Home</Nav.Link>
                    <Nav.Link className="nav_link_custom" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="nav_link_custom" href="/">About</Nav.Link>
                    <Nav.Link className="nav_link_custom" href="/">Contact</Nav.Link>
                    <Nav.Link className="button1" href="/">Add Tree</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
