// DataVisualization.js (frontend)

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Component for data visualization
const DataVisualization = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="heartRate" stroke="#8884d8" />
      <Line type="monotone" dataKey="steps" stroke="#82ca9d" />
      {/* Add more lines for additional data fields */}
    </LineChart>
  );
};

export default DataVisualization;
