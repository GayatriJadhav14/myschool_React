import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
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
        // Add your authentication logic here
        if (formData.username === 'admin' && formData.password === 'password') {
            alert('Login successful');
            localStorage.setItem('authenticated', 'true');
            navigate('/dashboard'); // Redirect to the dashboard or another page
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
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
                    <button type="submit" className="login-button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
