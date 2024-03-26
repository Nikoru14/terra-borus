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
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search..."/>
         <span class="tooltip">Search</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="link_name">Home</span>
        </a>
        <span class="tooltip">Home</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i class='bx bxs-tree'></i>
            <span class="link_name">Tree</span>
        </a>
        <span class="tooltip">Tree</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i class='bx bxs-objects-vertical-bottom' ></i>
          <span class="link_name">Status</span>
        </a>
        <span class="tooltip">Status</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i class='bx bx-map-alt' ></i>
          <span class="link_name">Map</span>
        </a>
        <span class="tooltip">Map</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i class='bx bx-user-circle' ></i>
          <span class="link_name">Users</span>
        </a>
        <span class="tooltip">Users</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i class='bx bx-category' ></i>
          <span class="link_name">Category</span>
        </a>
        <span class="tooltip">Category</span>
      </li>
      <li id='sidebarli'>
        <a href="#">
            <i class='bx bxs-report' ></i>
          <span class="link_name">Reports</span>
        </a>
        <span class="tooltip">Reports</span>
      </li>
      
      <hr/>
      <li class="profile1">
        <div class="profile_details">
          <img src="../428887545_1607503026745060_468730919493664302_n (1).jpg" alt="profile image"/>
          <div class="profile_content">
            <div class="name">Terraborus</div>
            <div class="designation">Admin</div>
          </div>
        </div>
        <i class="bx bx-log-out" id="log_out"></i>
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
