// 404.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1><i className="fa-duotone fa-triangle-exclamation"></i> 404 - Page Not Found</h1>
            <p className="NotFound">The page you are looking for does not exist or has been moved.</p>
            <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFound;
