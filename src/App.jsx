import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Therapists from './pages/Therapists';
import Book from './pages/Book';
import Services from './pages/Services';
import SignupForm from './pages/SignupForm';
import Footer from './components/Footer';
import About from './components/About';
import './index.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/therapists">Therapists</Link></li>
                        <li><Link to="/book">Book</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/signupform">SignupForm</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/therapists" element={<Therapists />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/signupform" element={<SignupForm />} />
                </Routes>
            </div>
            <About />
            <Footer />
        </Router>
    );
};

export default App;