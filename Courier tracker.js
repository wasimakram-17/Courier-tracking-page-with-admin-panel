import React, { useState } from 'react';

const CourierTracker = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleTrackingIdChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleTrack = () => {
    // Implement tracking functionality here
  };

  return (
    <div>
      <h2>Courier Tracker</h2>
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={handleTrackingIdChange}
      />
      <button onClick={handleTrack}>Track</button>
      {/* Display tracking information */}
    </div>
  );
};

export default CourierTracker;
