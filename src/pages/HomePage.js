// src/pages/HomePage.js
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Map from '../components/Map';
// import TreeList from '../components/TreeList';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <NavigationBar />
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
