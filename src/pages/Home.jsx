import therapistsImage from '../assets/therapists.jpg';
import treatmentsImage from '../assets/treatments.jpg';
import environmentImage from '../assets/environment.jpg';
import './HomePage.css'; // Import CSS file for styling

const Home = () => {
    return (
        <div className="home">
             {/* Header Section with Logo */}
             <header className="header">
                {/*<img src={logo} alt="Logo" className="logo" />*/}
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Bliss Massage Parlor</h1>
                    <p>Discover the best massage therapy services!</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </section>

            {/* Services Section */}
            {/*<Services />*/}

            {/* Feature Section */}
            <section className="features">
                <div className="feature">
                <img src={therapistsImage}alt="Professional Therapists" />  
                    <h2>Professional Therapists</h2>
                    <p>Our team consists of highly trained and experienced therapists.</p>
                </div>
                <div className="feature">
                <img src={treatmentsImage} alt="Customized Treatments" /> 
                    <h2>Customized Treatments</h2>
                    <p>We offer personalized massage treatments tailored to your needs.</p>
                </div>
                <div className="feature">
                <img src={environmentImage} alt="Relaxing Environment" />
                    <h2>Relaxing Environment</h2>
                    <p>Enjoy our tranquil and soothing atmosphere for a rejuvenating experience.</p>
                </div>
            </section>

            {/* Call-to-action Section */}
            <section className="cta">
                <h2>Ready to Book a Session?</h2>
                <button className="cta-button">Book Now</button>
            </section>
        </div>
    );
}

export default Home;