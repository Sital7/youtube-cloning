import React, { useState, useEffect } from 'react';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch subscriptions (Replace with actual API call)
    setSubscriptions([
      { id: 1, name: 'Channel 1' },
      { id: 2, name: 'Channel 2' },
    ]);
  }, []);

  return (
    <div>
      <h2>My Subscriptions</h2>
      <ul>
        {subscriptions.map((channel) => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subscriptions;
