// src/components/TherapistCard.jsx
import React from 'react';
import './TherapistCard.css';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="therapist-card">
      <img src={therapist.image} alt={therapist.name} className="therapist-image" />
      <div className="therapist-info">
        <h3>{therapist.name}</h3>
        <p className="therapist-specialty">{therapist.specialty}</p>
        <p>{therapist.description}</p>
      </div>
    </div>
  );
};

export default TherapistCard;