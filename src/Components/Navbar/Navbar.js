import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>React Meals</h1>
            <a>Home</a>
            <a>Order</a>
            <a>Contact Us</a>
        </div>
    );
};

export default Navbar;