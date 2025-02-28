import React from 'react';

const SubscriberList = ({ subscribers }) => {
  return (
    <ul>
      {subscribers.length > 0 ? (
        subscribers.map((subscriber, index) => (
          <li key={index}>
            <p>{subscriber.snippet.title}</p>  
          </li>
        ))
      ) : (
        <li>No subscribers found.</li> 
      )}
    </ul>
  );
};

export default SubscriberList;
