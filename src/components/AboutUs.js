import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Our School</h1>
      <p>
        Our school is dedicated to providing quality education to students from all backgrounds. We focus on holistic development and strive to create a nurturing environment for our students.
      </p>
      <div className="image-cards-container">
        <div className="image-card">
          <img src="https://www.shutterstock.com/image-illustration/high-school-entrance-facade-3d-260nw-1856043406.jpg" alt="School Image 1" />
          <p>School Building</p>
        </div>
        <div className="image-card">
          <img src="https://imgmedia.lbb.in/media/2023/04/6436aa5d27ecb545869f4f91_1681304157591.jpg" alt="School Image 2" />
          <p>Library</p>
        </div>
        <div className="image-card">
          <img src="https://th-i.thgim.com/public/incoming/hxmmzh/article67142871.ece/alternates/FREE_1200/9871_31_7_2023_17_46_26_5_ARTIFICIALTURF__05.JPG" alt="School Image 3" />
          <p>Sports Complex</p>
        </div>

      </div>
      <div className="back-link">
        <Link to="/">← Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default AboutUs;
