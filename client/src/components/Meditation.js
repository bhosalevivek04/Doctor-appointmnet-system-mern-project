// frontend/components/Meditation.js
import React from 'react';
import axios from 'axios';

const Meditation = () => {
  const playMeditation = async () => {
    try {
      const response = await axios.get('/api/meditation');
      console.log('Playing meditation:', response.data);
    } catch (error) {
      console.error('Error playing meditation:', error);
    }
  };

  return (
    <div>
      <h2>Meditation</h2>
      <button onClick={playMeditation}>Play Meditation</button>
    </div>
  );
};

export default Meditation;
