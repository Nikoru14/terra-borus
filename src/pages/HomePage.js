// src/pages/HomePage.js
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Map from '../components/Map';
import '../styles/navbar.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import TreeList from '../components/TreeList';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <div>
                <div className='col m-12'></div>
                <NavigationBar />
            </div>
            <div className='mapContainer'>
                <Map />
                <div>
                    <TreeList />
                </div>
            </div>
            {/*<FAQ />
            <Footer />*/}
        </>
    );
};

export default HomePage;
