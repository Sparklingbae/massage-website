// src/components/Services.jsx

import React from 'react';
import './Services.css'; // Import CSS file for styling

const services = [
    {
        id: 1,
        name: "Swedish Massage",
        description: "A relaxing full-body massage",
        price: "$50"
    },
    {
        id: 2,
        name: "Deep Tissue Massage",
        description: "A therapeutic deep muscle massage",
        price: "$70"
    },
    {
        id: 3,
        name: "Aromatherapy Massage",
        description: "Uses essential oils to enhance the massage experience.",
        price: "$60"
    },
    {
        id: 4,
        name: "Hot Stone Massage",
        description: "A soothing massage with hot stones",
        price: "$90"
    },
    {
        id: 5,
        name: "Lingam Massage",
        description: "A specialized form of massage focusing on intimate areas.",
        price: "$90"
    },
    {
        id: 6,
        name: "Sports Massage",
        description: "Designed for athletes to prevent injuries and aid recovery.",
        price: "$75"
    },
    {
        id: 7,
        name: "Couple Massage",
        description: "A massage experience for two people to enjoy together.",
        price: "$100"
    },
    {
        id: 8,
        name: "Four Hand Massage",
        description: "Two therapists work together to provide a synchronized massage.",
        price: "$120"
    },
    {
        id: 9,
        name: "Thai Massage",
        description: "A traditional Thai massage that incorporates stretching and deep massage.",
        price: "$85"
    },
    {
        id: 10,
        name: "Nuru Massage",
        description: "A Japanese erotic massage using a special kind of gel.",
        price: "$150"
    },
    {
        id: 11,
        name: "Erotic Massage",
        description: "A sensual massage that focuses on stimulating erogenous zones.",
        price: "$200"
    },
    {
        id: 12,
        name: "Nuru Extra",
        description: "An enhanced nuru massage experience with additional features.",
        price: "$180"
    },
    {
        id: 13,
        name: "Nuru Executive",
        description: "A premium nuru massage with exclusive services.",
        price: "$250"
    },
    {
        id: 14,
        name: "Nuru Presidential",
        description: "The ultimate nuru massage experience for VIP clients.",
        price: "$350"
    },
    {
        id: 15,
        name: "Erotic Premium",
        description: "A premium erotic massage with luxurious treatments.",
        price: "$300"
    },
    {
        id: 16,
        name: "Four Hands Nuru",
        description: "Two therapists perform a nuru massage simultaneously.",
        price: "$220"
    }
];

const Services = () => {
    return (
        <section className="services">
            {services.map(service => (
                <div key={service.id} className="service">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p className="price">{service.price}</p>
                </div>
            ))}
        </section>
    );
}

export default Services;