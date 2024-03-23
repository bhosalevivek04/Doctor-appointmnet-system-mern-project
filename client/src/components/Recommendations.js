// frontend/components/Recommendations.js
import React, { useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    axios.get('/api/recommendations')
      .then(response => setRecommendations(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  };

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      <button onClick={getRecommendations}>Get Recommendations</button>
      <ul>
        {recommendations.map(recommendation => (
          <li key={recommendation.id}>{recommendation.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
