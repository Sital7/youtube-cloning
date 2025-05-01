import React, { useEffect, useState } from 'react';
import { signInWithGoogle } from '../../firebase';
import './WatchLater.css'


const API_BASE = 'https://www.googleapis.com/youtube/v3';

const WatchLater = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      const accessToken = await signInWithGoogle();
      if (!accessToken) return;

      try {
        // Fetch items in the Watch Later playlist (default ID: WL)
        const response = await fetch(`${API_BASE}/playlistItems?part=snippet&maxResults=20&playlistId=WL&key=${process.env.REACT_APP_YT_API_KEY}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
          },
        });

        const data = await response.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error('Error fetching watch later videos:', err);
      }
    };

    fetchWatchLater();
  }, []);

  return (
    <div className="watch-later-container">
      <h2>Watch Later</h2>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.channelTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
