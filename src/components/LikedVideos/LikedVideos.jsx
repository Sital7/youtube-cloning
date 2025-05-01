// import React, { useEffect, useState } from 'react';
// import './LikedVideos.css';

// const API_KEY = 'AIzaSyAvTvcZbEmlBHgGmAZohCAVnFM5EIv5y_s';
// const API_BASE = 'https://youtube.googleapis.com/youtube/v3';

// const LikedVideos = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetch(`${API_BASE}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&regionCode=US&key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => setVideos(data.items || []))
//       .catch((err) => console.error('Error fetching liked videos:', err));
//   }, []);

//   return (
//     <div className="liked-container">
//       <h2>Liked Videos</h2>
//       <div className="video-grid">
//         {videos.map((video) => (
//           <div key={video.id} className="video-card">
//             <img
//               src={video.snippet.thumbnails.medium.url}
//               alt={video.snippet.title}
//               className="video-thumbnail"
//             />
//             <p>{video.snippet.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LikedVideos;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LikedVideos.css';

const API_KEY = 'AIzaSyAvTvcZbEmlBHgGmAZohCAVnFM5EIv5y_s';
const API_BASE = 'https://youtube.googleapis.com/youtube/v3';

const LikedVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&regionCode=US&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items || []))
      .catch((err) => console.error('Error fetching liked videos:', err));
  }, []);

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`); 
  };

  return (
    <div className="liked-container">
      <h2>Liked Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => handleVideoClick(video.id)}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="video-thumbnail"
            />
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;
