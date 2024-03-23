// DeviceData.js (frontend)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Fetch wearable device data from backend API
const fetchDeviceData = async () => {
  try {
    const response = await axios.get('/wearable/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching device data:', error);
    return null;
  }
};

// Component to display device data
const DeviceData = () => {
  const [deviceData, setDeviceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDeviceData();
      setDeviceData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {deviceData && (
        <div>
          <p>Heart Rate: {deviceData.heartRate}</p>
          <p>Steps Taken: {deviceData.steps}</p>
          <p>Sleep Hours: {deviceData.sleepHours}</p>
          {/* Add more data fields here */}
        </div>
      )}
    </div>
  );
};

export default DeviceData;
