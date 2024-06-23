import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TherapistList from '../components/TherapistList';

const Therapists = () => {
  const [therapists, setTherapists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get('/api/therapists');
        if (response.headers['content-type'].includes('application/json')) {
          setTherapists(response.data);
          setLoading(false);
        } else {
          throw new Error('Invalid response format: Not JSON');
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching therapists: {error.message}</div>;
  }

  return (
    <div>
      <h2>Therapists</h2>
      <TherapistList therapists={therapists} />
    </div>
  );
};

export default Therapists;