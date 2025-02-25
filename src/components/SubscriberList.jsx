import React from 'react';

const SubscriberList = ({ subscribers }) => {
  return (
    <ul>
      {subscribers.length > 0 ? (
        subscribers.map((subscriber, index) => (
          <li key={index}>
            <p>{subscriber.snippet.title}</p>  {/* Display subscriber's title or relevant data */}
          </li>
        ))
      ) : (
        <li>No subscribers found.</li>  {/* Fallback if no subscribers */}
      )}
    </ul>
  );
};

export default SubscriberList;
