import React, { useState } from 'react';
import '../styles/adminside.css'; 
import { Link } from 'react-router-dom';
import Map from '../components/Map';
import Tree from './Tree';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
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
          <Link to="/home" onClick={() => handleItemClick('home')}>
            <i className={`bx bx-grid-alt ${activeItem === 'home' ? 'active' : ''}`}></i>
            <span className={`link_name ${activeItem === 'home' ? 'active' : ''}`}>Home</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li id='sidebarli'>
          <Link to="/tree"> {/* Use Link instead of anchor tag */}
            <i className='bx bxs-tree'></i>
            <span className="link_name">Tree</span>
          </Link>
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
        <Link to="/adminmap">
            <i className='bx bx-map-alt' ></i>
          <span className="link_name">Map</span>
          </Link>
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


export default Sidebar;
