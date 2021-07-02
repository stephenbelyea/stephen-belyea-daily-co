import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../../components';
import { ROUTES } from '../../constants';

export default function ListCalls({ service }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [calls, setCalls] = useState([]);

  const getLocaleDate = (timestamp) => {
    const d = new Date(timestamp).toUTCString();
    return d.toLocaleString();
  }

  useEffect(async () => {
    setError('');
    setLoading(true);

    try {
      const allCalls = await service.getAllCalls();
      setCalls(allCalls);
    } catch (error) {
      setError('Unable to fetch calls our call service.');
    }

    setLoading(false);
  }, []);

  return (
    <div className="list-calls">
      <h1>Calls Dashboard</h1>
      <ErrorMessage message={error} />
      {loading ? <p>Loading...</p> : (
        <table>
          <thead>
            <tr>
              <th>Started</th>
              <th>Length</th>
              <th>Room</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {calls.length > 0 ? (
              calls.map(call => (
                <tr key={call.id}>
                  <td>{getLocaleDate(call.start)}</td>
                  <td>{call.length} min</td>
                  <td>{call.room}</td>
                  <td>
                    <Link to={`${ROUTES.DASH_CALL_METRICS}/${call.id}`}>
                      View metrics
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td>No calls found.</td></tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}