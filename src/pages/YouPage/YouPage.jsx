// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FaHistory, FaClock, FaThumbsUp, FaList, FaUser, FaPlayCircle } from 'react-icons/fa';
// // // import './YouPage.css'

// // // const YouPage = () => {
// // //   return (
// // //     <div className="you-page">
// // //       <h2 className="you-title">You</h2>
// // //       <div className="you-section">

// // //         <Link to="/profile" className="you-item">
// // //           <FaUser size={20} />
// // //           <span>Your Channel</span>
// // //         </Link>

// // //         <Link to="/history" className="you-item">
// // //           <FaHistory size={20} />
// // //           <span>History</span>
// // //         </Link>

// // //         <Link to="/watch-later" className="you-item">
// // //           <FaClock size={20} />
// // //           <span>Watch Later</span>
// // //         </Link>

// // //         <Link to="/liked" className="you-item">
// // //           <FaThumbsUp size={20} />
// // //           <span>Liked Videos</span>
// // //         </Link>

// // //         <Link to="/playlists" className="you-item">
// // //           <FaList size={20} />
// // //           <span>Playlists</span>
// // //         </Link>

// // //         <Link to="/your-videos" className="you-item">
// // //           <FaPlayCircle size={20} />
// // //           <span>Your Videos</span>
// // //         </Link>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default YouPage;



// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import {
// //   FaHistory,
// //   FaClock,
// //   FaThumbsUp,
// //   FaList,
// //   FaUser,
// //   FaPlayCircle,
// // } from 'react-icons/fa';
// // import './YouPage.css';

// // const YouPage = () => {
// //   const [history, setHistory] = useState([]);
// //   const [likedVideos, setLikedVideos] = useState([]);
// //   const [yourVideos, setYourVideos] = useState([]);

// //   // Replace with your actual API endpoints
// //   const API_BASE = 'https://api.example.com';

// //   useEffect(() => {
// //     fetch(`${API_BASE}/history`)
// //       .then(res => res.json())
// //       .then(data => setHistory(data))
// //       .catch(err => console.error('Error fetching history:', err));

// //     fetch(`${API_BASE}/likedVideos`)
// //       .then(res => res.json())
// //       .then(data => setLikedVideos(data))
// //       .catch(err => console.error('Error fetching liked videos:', err));

// //     fetch(`${API_BASE}/yourVideos`)
// //       .then(res => res.json())
// //       .then(data => setYourVideos(data))
// //       .catch(err => console.error('Error fetching your videos:', err));
// //   }, []);

// //   return (
// //     <div className="you-page-container">
// //       <h2 className="you-title">You</h2>
// //       <div className="you-options">
// //         <Link to="/profile" className="you-link">
// //           <FaUser className="you-icon" />
// //           <span>Your Channel</span>
// //         </Link>
// //         <Link to="/history" className="you-link">
// //           <FaHistory className="you-icon" />
// //           <span>History ({history.length})</span>
// //         </Link>
// //         <Link to="/watch-later" className="you-link">
// //           <FaClock className="you-icon" />
// //           <span>Watch Later</span>
// //         </Link>
// //         <Link to="/liked" className="you-link">
// //           <FaThumbsUp className="you-icon" />
// //           <span>Liked Videos ({likedVideos.length})</span>
// //         </Link>
// //         <Link to="/playlists" className="you-link">
// //           <FaList className="you-icon" />
// //           <span>Playlists</span>
// //         </Link>
// //         <Link to="/your-videos" className="you-link">
// //           <FaPlayCircle className="you-icon" />
// //           <span>Your Videos ({yourVideos.length})</span>
// //         </Link>
// //       </div>

// //       <div className="you-preview-section">
// //         <h3>Recently Watched</h3>
// //         <div className="video-preview-list">
// //           {history.slice(0, 4).map((video, idx) => (
// //             <div key={idx} className="video-card">
// //               <img src={video.thumbnail} alt={video.title} />
// //               <p>{video.title}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default YouPage;



// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
// //   FaHistory,
//   FaClock,
//   FaThumbsUp,
//   FaList,
//   FaUser,
//   FaPlayCircle,
// } from 'react-icons/fa';
// import './YouPage.css';

// const API_KEY = 'AIzaSyAvTvcZbEmlBHgGmAZohCAVnFM5EIv5y_s';
// const API_BASE = 'https://youtube.googleapis.com/youtube/v3';

// const YouPage = () => {
//   const [likedVideos, setLikedVideos] = useState([]);
//   const [yourVideos, setYourVideos] = useState([]);
//   const [playlists, setPlaylists] = useState([]);
// //   const [history, setHistory] = useState([]); // Simulated or mock data if needed

//   // Fetch liked videos (simulate by using "most popular" for now)
//   useEffect(() => {
//     fetch(`${API_BASE}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=5&regionCode=US&key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setLikedVideos(data.items || []);
//         setYourVideos(data.items || []);
//       })
//       .catch((error) => console.error('Error fetching liked/your videos:', error));
//   }, []);

//   useEffect(() => {
//     // Replace with actual authenticated user playlist API when available
//     setPlaylists([
//       { id: 1, title: 'Web Development' },
//       { id: 2, title: 'Music Vibes' },
//     ]);

//     // setHistory([
//     //   { id: 1, title: 'React Hooks Explained' },
//     //   { id: 2, title: 'Top 10 Coding Tips' },
//     // ]);
//   }, []);

//   return (
//     <div className="you-page-container">
//       <h2 className="you-heading">You</h2>

//       <div className="you-grid">
//         <Link to="/profile" className="you-box">
//           <FaUser size={24} />
//           <span>Your Channel</span>
//         </Link>

//         {/* <Link to="/history" className="you-box">
//           <FaHistory size={24} />
//           <span>History ({history.length})</span>
//         </Link> */}

//         {/* <Link to="/watch-later" className="you-box">
//           <FaClock size={24} />
//           <span>Watch Later</span>
//         </Link> */}

//         <Link to="/liked" className="you-box">
//           <FaThumbsUp size={24} />
//           <span>Liked Videos ({likedVideos.length})</span>
//         </Link>

//         <Link to="/playlists" className="you-box">
//           <FaList size={24} />
//           <span>Playlists ({playlists.length})</span>
//         </Link>

//         {/* <Link to="/your-videos" className="you-box">
//           <FaPlayCircle size={24} />
//           <span>Your Videos ({yourVideos.length})</span>
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default YouPage;



import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaThumbsUp,
  FaList,
  FaUser,
  FaPlayCircle,
} from 'react-icons/fa';
import './YouPage.css';
// import { signInWithGoogle } from '../../firebase';
import { signInWithGoogle } from "../../firebase";
import Navbar from '../../components/Navbar/Navbar';


const API_BASE = 'https://www.googleapis.com/youtube/v3';

const YouPage = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  const [yourVideos, setYourVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  // Sign in user and get access token on mount
  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await signInWithGoogle();
      if (token) {
        setAccessToken(token);
      }
    };
    fetchAccessToken();
  }, []);

  // Fetch user's playlists after getting access token
  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/playlists?part=snippet&mine=true&maxResults=10`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: 'application/json',
            },
          }
        );
        const data = await res.json();
        if (data.items) {
          const formatted = data.items.map((item) => ({
            id: item.id,
            title: item.snippet.title,
          }));
          setPlaylists(formatted);
        }
      } catch (err) {
        console.error('Error fetching user playlists:', err);
      }
    };

    if (accessToken) {
      fetchUserPlaylists();
    }
  }, [accessToken]);

  // Simulated liked/your videos using most popular (for now)
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=5&regionCode=US&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`
    )
      .then((res) => res.json())
      .then((data) => {
        setLikedVideos(data.items || []);
        setYourVideos(data.items || []);
      })
      .catch((error) => console.error('Error fetching liked/your videos:', error));
  }, []);

  return (
    <div><Navbar />
    <div className="you-page-container">
      <h2 className="you-heading">You</h2>

      <div className="you-grid">
        <Link to="/profile" className="you-box">
          <FaUser size={24} />
          <span>Your Channel</span>
        </Link>

        {/* Uncomment when history or watch later features are added */}
        {/* <Link to="/history" className="you-box">
          <FaClock size={24} />
          <span>History</span>
        </Link> */}

        <Link to="/liked" className="you-box">
          <FaThumbsUp size={24} />
          <span>Liked Videos ({likedVideos.length})</span>
        </Link>

        <Link to="/playlists" className="you-box">
          <FaList size={24} />
          <span>Playlists ({playlists.length})</span>
        </Link>

        {/* <Link to="/your-videos" className="you-box">
          <FaPlayCircle size={24} />
          <span>Your Videos ({yourVideos.length})</span>
        </Link> */}
      </div>
    </div>
    </div>
  );
};

export default YouPage;
