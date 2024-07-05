import './About.css';
import backgroundImage from '../assets/background.jpg';
import { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/subscribe', { email });
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Error subscribing');
    }
  };

  return (
    <div className="about-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At Bliss Massage Parlor, our mission is to provide a serene and tranquil escape from the stresses of everyday life. Our team of licensed and experienced massage therapists are dedicated to delivering exceptional service and personalized attention to each and every client.
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
          Supporting the well-being and relaxation of our clients.
        </p>
        <div className="newsletter-section">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default About;