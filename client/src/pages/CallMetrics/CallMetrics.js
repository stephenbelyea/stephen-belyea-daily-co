import React, { useState } from 'react';
import { ErrorMessage } from '../../components';

export default function CallMetrics({ service }) {
  const [error, setError] = useState('');
  
  return (
    <div className="call-metrics">
      <h1>Call Metrics</h1>
      <div>
        
      </div>
      <ErrorMessage message={error} />
    </div>
  )
}