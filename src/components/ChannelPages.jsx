import React, { useEffect, useState } from 'react';

const ChannelPage = ({ userId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch user videos (Replace with actual API call)
    setVideos([
      { id: 1, title: 'Video 1', description: 'Description of video 1' },
      { id: 2, title: 'Video 2', description: 'Description of video 2' },
    ]);
  }, [userId]);

  return (
    <div>
      <h2>{userId}'s Channel</h2>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ChannelPage;
