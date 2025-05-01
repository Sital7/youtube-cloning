import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyAvTvcZbEmlBHgGmAZohCAVnFM5EIv5y_s';

const YourVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&forMine=true&type=video&maxResults=20&key=${API_KEY}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`, 
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setVideos(data.items || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="you-content">
      <h2>Your Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <strong>{video.snippet.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourVideos;
