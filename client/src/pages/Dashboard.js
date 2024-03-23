// frontend/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    axios.get('/api/mood-data')
      .then(response => setMoodData(response.data))
      .catch(error => console.error('Error fetching mood data:', error));
  }, []);

  useEffect(() => {
    if (moodData.length > 0) {
      const ctx = document.getElementById('moodChart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: moodData.map(entry => entry.date),
          datasets: [{
            label: 'Mood Rating',
            data: moodData.map(entry => entry.rating),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [moodData]);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Mood Trends</h3>
        <canvas id="moodChart"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
