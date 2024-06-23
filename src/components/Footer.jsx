// Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
          <div className="footer-content">
          </div>
          <div className="footer-links">
              <nav>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Therapists</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </nav>
              <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
          </div>
      <div className="footer-bottom">
              <p>&copy; 2024 Bliss Massage. All rights reserved.</p>
              <p>Designed and developed by <a href="#">Sparkling Dev</a></p>
          </div>
    </footer>
  );
};

export default Footer;