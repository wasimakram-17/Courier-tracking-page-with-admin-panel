import React, { useState } from 'react';

const AdminPanel = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleTrackingIdChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={handleTrackingIdChange}
      />
      <button onClick={handleSearch}>Search</button>
      {/* Display search results */}
    </div>
  );
};

export default AdminPanel;
    
