import React, { useState } from 'react';
import { ErrorMessage } from '../../components';

export default function ListCalls({ service }) {
  const [error, setError] = useState('');
  
  return (
    <div className="list-calls">
      <h1>Calls Dashboard</h1>
      <div>
        
      </div>
      <ErrorMessage message={error} />
    </div>
  )
}