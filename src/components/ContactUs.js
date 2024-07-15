import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Header from './Header';

const ContactUs = () => {
    return (
        <div className="dashboard-layout">
            <Header />
            <div className="main-content">
                <div className="dashboard">
                    <div className="container">
                        <div className="content">
                            <h2>Contact Us</h2>
                            <p>For any inquiries or further information, please feel free to contact us:</p>
                            <div className="contact-details">
                                <p><strong>Address:</strong> 123 School Lane, Education City, EC12345</p>
                                <p><strong>Phone:</strong> +123 456 7890</p>
                                <p><strong>Email:</strong> info@schoolname.edu</p>
                            </div>
                            <Link to="/" className="back-link">← Back to Dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
