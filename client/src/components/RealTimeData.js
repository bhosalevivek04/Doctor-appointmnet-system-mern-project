// RealTimeData.js (frontend)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component to display real-time device data
const RealTimeData = () => {
  const [realTimeData, setRealTimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDeviceData();
      setRealTimeData(data);
    };
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {realTimeData && (
        <div>
          <p>Real-Time Heart Rate: {realTimeData.heartRate}</p>
          <p>Real-Time Steps Taken: {realTimeData.steps}</p>
          {/* Add more real-time data fields here */}
        </div>
      )}
    </div>
  );
};

export default RealTimeData;
