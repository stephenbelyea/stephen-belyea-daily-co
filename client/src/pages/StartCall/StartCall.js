import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorMessage } from '../../components';
import { ROUTES } from '../../constants';

export default function StartCall({ service }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onStartCall = async () => {
    setLoading(true);
    setError('');

    try {
      const call = await service.startCall();
      history.push(`${ROUTES.JOIN_CALL}/${call.callId}`);
    } catch (error) {
      setError('Something went wrong with our call service.');
    }

    setLoading(false);
  }

  return (
    <div className="start-call">
      <h1>Start a video call</h1>
      <p>Open a new video call room and invite friends to join.</p>
      <div>
        <button disabled={loading} onClick={onStartCall}>
          Start a call
        </button>
      </div>
      <ErrorMessage message={error} />
    </div>
  )
}