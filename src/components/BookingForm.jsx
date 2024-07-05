import { useState, useEffect } from 'react';
import './BookingForm.css'; // Import CSS for styling

const BookingForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', service: '', date: '', time: '', address: '' });
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch services from an API or define them statically
        const fetchServices = async () => {
            // Example API call to fetch services
            // const response = await axios.get('/api/services');
            // setServices(response.data);

            // Static services list with prices
            const servicesList = [
                { name: 'Swedish Massage', price: 50 },
                { name: 'Deep Tissue Massage', price: 60 },
                { name: 'Aromatherapy Massage', price: 70 },
                { name: 'Hot Stone Massage', price: 80 },
                { name: 'Lingam Massage', price: 90 },
                { name: 'Sports Massage', price: 100 },
                { name: 'Couple Massage', price: 120 },
                { name: 'Four Hand Massage', price: 130 },
                { name: 'Four Hand Nuru', price: 140 },
                { name: 'Thai Massage', price: 150 },
                { name: 'Nuru Massage', price: 160 },
                { name: 'Erotic Massage', price: 170 },
                { name: 'Nuru Extra', price: 180 },
                { name: 'Nuru Executive', price: 190 },
                { name: 'Nuru Presidential', price: 200 },
                { name: 'Erotic Premium', price: 210 }
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
                        <option key={index} value={service.name}>
                            {service.name} - ${service.price}
                        </option>
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
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
        </form>
    );
};

export default BookingForm;