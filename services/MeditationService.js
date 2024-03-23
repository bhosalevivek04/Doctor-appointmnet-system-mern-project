// MeditationService.js (backend)

const fetchMeditationSessions = async () => {
    // Fetch meditation sessions from a third-party API
    const response = await axios.get('https://api.meditationapp.com/sessions');
    return response.data;
  };
  