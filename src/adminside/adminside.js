import React, { useState } from 'react';
import '../styles/adminside.css'; 
import Map from '../components/Map';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon"></i>
        <div className="logo_name">TerraBorus</div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
      <li id='sidebarli'>
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Search..."/>
         <span className="tooltip">Search</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
          <i className="bx bx-grid-alt"></i>
          <span className="link_name">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i className='bx bxs-tree'></i>
            <span className="link_name">Tree</span>
        </a>
        <span className="tooltip">Tree</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i className='bx bxs-objects-vertical-bottom' ></i>
          <span className="link_name">Status</span>
        </a>
        <span className="tooltip">Status</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i className='bx bx-map-alt' ></i>
          <span className="link_name">Map</span>
        </a>
        <span className="tooltip">Map</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i className='bx bx-user-circle' ></i>
          <span className="link_name">Users</span>
        </a>
        <span className="tooltip">Users</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i className='bx bx-category' ></i>
          <span className="link_name">Category</span>
        </a>
        <span className="tooltip">Category</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i className='bx bxs-report' ></i>
          <span className="link_name">Reports</span>
        </a>
        <span className="tooltip">Reports</span>
      </li>
      
      <hr/>
      <li className="profile1">
        <div className="profile_details">
          <img src="../428887545_1607503026745060_468730919493664302_n (1).jpg" alt="profile image"/>
          <div className="profile_content">
            <div className="name">Terraborus</div>
            <div className="designation">Admin</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out"></i>
      </li>
      </ul>
    </div>
  );
}

function Adminside() {
  return (
    <div className="App">
      <Sidebar />
      <section className="home-section">
        <div className="text">Dashboard</div>
              {/* Map Section */}
              <div className='mapContainer'>
          <Map />
        </div>
      </section>
    </div>
  );
}

export default Adminside;
