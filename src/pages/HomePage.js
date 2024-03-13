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
const HomePage = () => {
  return (
    <>
      {/* Header Section */}
      <div>
        <div className='col m-12'></div>
        <NavigationBar />
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
