// About.jsx

import React from 'react';
import './About.css'; // Import custom CSS file for styling
import backgroundImage from '../assets/background.jpg';

const About = () => {
  return (
    <div className="about-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At Bliss Massage Parlor, our mission is to provide a serene and tranquil escape from the stresses of everyday life. Our tearm of licensed and experienced massage therapist are dedicated to delivering exceptional service and personalized attention to each and every client.
        </p>
        <h2>Our Values</h2>
        <p>
            Providing exceptional service with a personal touch.
        </p>
        <p>
            Fostering a warm and welcoming environment.
        </p>
        <p>
            Using only the highest quality products and techniques.
        </p>
        <p>
            Supporting the well-being and relaxation of our client.
        </p>
        <div className="newsletter-section">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;