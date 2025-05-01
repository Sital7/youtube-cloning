// src/pages/Subscriptions.jsx
import React, { useEffect, useState } from 'react';
import './Subscriptions.css';
// import { signInWithGoogle } from '../firebase'; // 👈 your firebase.js file
import { signInWithGoogle } from '../../firebase';
import { API_KEY } from '../../data'; // 👈 your API key

const Subscriptions = () => {
  const [videos, setVideos] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchAccessTokenAndData = async () => {
      const token = await signInWithGoogle();
      if (!token) return;

      setAccessToken(token);
      fetchSubscriptions(token);
    };

    fetchAccessTokenAndData();
  }, []);

  const fetchSubscriptions = async (token) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        }
      );

      const data = await res.json();
      const channels = data.items || [];

      // Now fetch latest videos from each subscribed channel
      const videoPromises = channels.map((channel) =>
        fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel.snippet.resourceId.channelId}&part=snippet,id&order=date&maxResults=1`
        ).then((res) => res.json())
      );

      const videoData = await Promise.all(videoPromises);
      const extractedVideos = videoData
        .map((item) => item.items?.[0])
        .filter(Boolean);

      setVideos(extractedVideos);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };

  return (
    <div className="subscriptions-page">
      <h2>Subscriptions</h2>
      <div className="subscriptions-grid">
        {videos.length === 0 ? (
          <p>Loading videos...</p>
        ) : (
          videos.map((video) => (
            <div key={video.id.videoId} className="subscription-video-card">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="subscription-thumbnail"
              />
              <p className="video-title">{video.snippet.title}</p>
              <p className="channel-name">{video.snippet.channelTitle}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
