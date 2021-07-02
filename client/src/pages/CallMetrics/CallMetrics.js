import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../../components';
import { ROUTES } from '../../constants';

export default function CallMetrics({ service }) {
  const [error, setError] = useState('');
  
  return (
    <div className="call-metrics">
      <h1>Call Metrics</h1>
      <p>
        <Link to={ROUTES.DASH_CALLS}>Back to calls dashboard</Link>
      </p>
      <ErrorMessage message={error} />
    </div>
  )
}