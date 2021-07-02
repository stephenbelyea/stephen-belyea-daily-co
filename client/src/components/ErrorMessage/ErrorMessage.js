import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div className="error" aria-live="assertive">
      {message !== '' && (
        <p>{message}</p>
      )}
    </div>
  )
}