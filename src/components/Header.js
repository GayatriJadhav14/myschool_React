// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here (e.g., clear session, reset state)
        onLogout();
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/Login">Login</Link>

            </nav>
        </header>
    );
};

export default Header;
