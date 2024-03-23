import React, { useState } from 'react';
import axios from 'axios';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    moodRating: '',
    sleepHours: '',
    stressAnxiety: '',
    exerciseFrequency: '',
    relaxationActivities: '',
    socialInteractions: '',
    lifeChanges: '',
    therapyStatus: '',
    stressManagement: '',
    specificConcerns: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/survey/submit', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        On a scale of 1 to 10, how would you rate your overall mood today?
        <input
          type="number"
          name="moodRating"
          value={formData.moodRating}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
      </label>

      <label>
        How many hours of sleep did you get last night?
        <input
          type="number"
          name="sleepHours"
          value={formData.sleepHours}
          onChange={handleChange}
          min="0"
          required
        />
      </label>

      {/* Additional questions */}
      <label>
        On a scale of 1 to 10, how would you rate your stress and anxiety level?
        <input
          type="number"
          name="stressAnxiety"
          value={formData.stressAnxiety}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
      </label>

      <label>
        How often do you engage in physical exercise per week?
        <input
          type="number"
          name="exerciseFrequency"
          value={formData.exerciseFrequency}
          onChange={handleChange}
          min="0"
          required
        />
      </label>

      {/* Add more questions here using similar structure */}

      <button type="submit">Submit Survey</button>
    </form>
  );
};

export default SurveyForm;