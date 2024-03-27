import React, { useState } from 'react';
import Map from '../components/Map';
import Sidebar from '../adminside/Sidebar';

function Home() {
    return (
    <>
    <Sidebar/>
      <div className="App">
        <section className="home-section">
          <div className="text">Dashboard</div>
                {/* Map Section */}
            <div className='mapContainer'>
            <Map />
          </div>
        </section>
      </div>
      </>
    );
  }

  export default Home;