// src/components/TherapistList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TherapistList.css';

const TherapistList = ({ onSelectTherapist }) => {
  const [therapists, setTherapists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/therapists') // Replace with your API endpoint
      .then(response => {
        setTherapists(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error fetching therapists: {error.message}</div>;
  }

  return (
    <div className="therapist-list">
      {Array.isArray(therapists) && therapists.map(therapist => (
        <div
          key={therapist.id}
          className="therapist-item"
          onClick={() => onSelectTherapist(therapist)}
        >
          <img src={therapist.image} alt={therapist.name} />
          <h3>{therapist.name}</h3>
          <p>{therapist.specialty}</p>
        </div>
      ))}
    </div>
  );
};

export default TherapistList;