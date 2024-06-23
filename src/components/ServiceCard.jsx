// src/components/ServiceCard.jsx

import React from 'react';
import './ServiceCard.css'; // Import CSS for service card styling

const ServiceCard = ({ title, description, price }) => {
    return (
        <div className="service-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="price">{price}</p>
        </div>
    );
};

export default ServiceCard;