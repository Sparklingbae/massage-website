import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TherapistList from './TherapistList';
import './BookingForm.css'; // Import CSS for styling

const BookingForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', date: '', time: '', address: '' });
    const [services, setServices] = useState([]);
    const [selectedTherapist, setSelectedTherapist] = useState(null);

    useEffect(() => {
        // Fetch services from an API or define them statically
        const fetchServices = async () => {
            // Example API call to fetch services
            // const response = await axios.get('/api/services');
            // setServices(response.data);
            
            // Static services list
            const servicesList = [
                'Swedish Massage',
                'Deep Tissue Massage',
                'Aromatherapy Massage',
                'Hot Stone Massage',
                'Lingam Massage',
                'Sports Massage',
                'Couple Massage',
                'Four Hand Massage',
                'Four Hand Nuru',
                'Thai Massage',
                'Nuru Massage',
                'Erotic Massage',
                'Nuru Extra',
                'Nuru Executive',
                'Nuru Presidential',
                'Erotic Premium'
            ];
            setServices(servicesList);
        };

        fetchServices();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log('Form data submitted:', formData);
    };

    const handleSelectTherapist = (therapist) => {
        setSelectedTherapist(therapist);
    };


    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book an Appointment</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Service:
                <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
            </label>
            <label>
                Date:
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
                Time:
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </label>
            <label>
                Address:
                <input type="address" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <TherapistList onSelectTherapist={handleSelectTherapist} />
            {/*<button type="submit">Book Now</button>*/}
        </form>
    );
};

export default BookingForm;