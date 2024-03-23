// GoalSetting.js (frontend)

import React, { useState } from 'react';
import axios from 'axios';

// Component to set goals
const GoalSetting = () => {
  const [goal, setGoal] = useState('');

  const handleGoalSubmit = async () => {
    try {
      await axios.post('/user/goals', { goal });
      alert('Goal set successfully!');
    } catch (error) {
      console.error('Error setting goal:', error);
      alert('Failed to set goal. Please try again.');
    }
  };

  return (
    <div>
      <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
      <button onClick={handleGoalSubmit}>Set Goal</button>
    </div>
  );
};

export default GoalSetting;
