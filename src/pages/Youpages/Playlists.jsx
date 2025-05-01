import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyAvTvcZbEmlBHgGmAZohCAVnFM5EIv5y_s';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=20&key=${API_KEY}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer YOUR_OAUTH_TOKEN`, // replace this with real token
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setPlaylists(data.items || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="you-content">
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <strong>{playlist.snippet.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
