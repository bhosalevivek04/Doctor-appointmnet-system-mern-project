import React, { useState } from 'react';
import axios from 'axios';

const WearableIntegration = () => {
  const [syncStatus, setSyncStatus] = useState('');

  const syncDevice = () => {
    setSyncStatus('Syncing...');
    axios.post('/api/sync-device')
      .then(response => {
        setSyncStatus(response.data.message);
      })
      .catch(error => {
        console.error('Error syncing device:', error);
        setSyncStatus('Error syncing device');
      });
  };

  return (
    <div>
      <h2>Wearable Device Integration</h2>
      <button onClick={syncDevice}>Sync Device</button>
      <p>Status: {syncStatus}</p>
    </div>
  );
};

export default WearableIntegration;
