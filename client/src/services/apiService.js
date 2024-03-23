import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Update with your backend URL

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitSurvey = async (formData) => {
  try {
    const response = await apiService.post('/survey/submit', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Failed to submit survey');
  }
};

export default apiService;
