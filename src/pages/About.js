// components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Create a CSS file for styling

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
                Welcome to Our School! We are dedicated to providing the best education for our students.
                Our mission is to foster a nurturing environment where students can thrive academically and personally.
            </p>
            <div className="cards-container">
                <div className="card">
                    <img src="path_to_image_1.jpg" alt="School Building" />
                    <h2>Our Campus</h2>
                    <p>Beautiful and spacious campus with modern facilities.</p>
                </div>
                <div className="card">
                    <img src="path_to_image_2.jpg" alt="Classroom" />
                    <h2>Classrooms</h2>
                    <p>State-of-the-art classrooms with the latest technology.</p>
                </div>
                <div className="card">
                    <img src="path_to_image_3.jpg" alt="Students" />
                    <h2>Our Students</h2>
                    <p>Bright and diverse students from various backgrounds.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
