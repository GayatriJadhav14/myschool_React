import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
        } else {
            // Here you would typically send a request to your backend to create a new user
            alert('Signup successful');
            navigate('/login'); // Redirect to the login page
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="signup-button">Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
