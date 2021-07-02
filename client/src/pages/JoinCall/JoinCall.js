import React from 'react';
import { useParams } from "react-router-dom";
import { CALL_ROOM_BASE_URL } from '../../constants';

export default function JoinCall() {
  const { callId } = useParams();

  const getCallUrl = () => {
    return `${CALL_ROOM_BASE_URL}${callId}`;
  } 
  
  return (
    <div className="join-call">
      <h1>Video Call</h1>
      <p>Share this link with friends so they can join the call:</p>
      <div>
        <pre>{getCallUrl()}</pre>
      </div>
    </div>
  )
}