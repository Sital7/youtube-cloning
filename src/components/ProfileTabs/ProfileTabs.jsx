// // import React, { useState } from 'react';
// // import { Link, Route, Routes } from 'react-router-dom'; // Import Link and Routes from react-router-dom
// // import './ProfileTabs.css';
// // import Recommended from '../Recommended/Recommended';
// // import WatchVideos from '../WatchVideos/WatchVideos';

// // const ProfileTabs = () => {
// //   const [activeTab, setActiveTab] = useState('recommended');
// //   const [selectedVideo, setSelectedVideo] = useState(null); // State to hold selected video

// //   const handleTabClick = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const handleVideoClick = (videoId) => {
// //     // Set the selected video when clicked
// //     setSelectedVideo(videoId);
// //   };

// //   return (
// //     <div className="profile-tabs">
// //       <div className="tabs">
// //         <button 
// //           className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
// //           onClick={() => handleTabClick('recommended')}
// //         >
// //           Recommended
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`}
// //           onClick={() => handleTabClick('watchvideos')}
// //         >
// //           Watch Videos
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'playlists' ? 'active' : ''}`}
// //           onClick={() => handleTabClick('playlists')}
// //         >
// //           Playlists
// //         </button>
// //         <button 
// //           className={`tab ${activeTab === 'about' ? 'active' : ''}`}
// //           onClick={() => handleTabClick('about')}
// //         >
// //           About
// //         </button>
// //       </div>

// //       <div className="tab-content">
// //         {activeTab === 'recommended' && (
// //           <Recommended
// //             categoryId={1}
// //             handleVideoClick={handleVideoClick} // Pass the click handler to Recommended component
// //           />
// //         )}

// //         {activeTab === 'watchvideos' && (
// //           <Routes>
// //             <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
// //           </Routes>
// //         )}

// //         {selectedVideo && (
// //           <div className="video-player">
// //             <h3>Now Playing: Video {selectedVideo}</h3>
// //             {/* Replace this with actual video player or iframe */}
// //             <video controls>
// //               <source src={`https://path/to/video/${selectedVideo}.mp4`} type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </video>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileTabs;



// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import './ProfileTabs.css';
// import Recommended1 from '../Recommended1/Recommended1';
// import WatchVideos from '../WatchVideos/WatchVideos';

// const ProfileTabs = () => {
//   const [activeTab, setActiveTab] = useState('recommended');
//   const [selectedVideo, setSelectedVideo] = useState(null); // State to hold selected video

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleVideoClick = (videoId) => {
//     // Set the selected video when clicked
//     setSelectedVideo(videoId);
//   };

//   return (
//     <div className="profile-tabs"> {/* Ensure this class is applied */}
//       <div className="tabs">
//         <button 
//           className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
//           onClick={() => handleTabClick('recommended')}
//         >
//           Recommended
//         </button>
//         <button 
//           className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`}
//           onClick={() => handleTabClick('watchvideos')}
//         >
//           Watch Videos
//         </button>
//         <button 
//           className={`tab ${activeTab === 'playlists' ? 'active' : ''}`}
//           onClick={() => handleTabClick('playlists')}
//         >
//           Playlists
//         </button>
//         <button 
//           className={`tab ${activeTab === 'about' ? 'active' : ''}`}
//           onClick={() => handleTabClick('about')}
//         >
//           About
//         </button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'recommended' && (
//           <Recommended1
//             categoryId={1}
//             handleVideoClick={handleVideoClick} // Pass the click handler to Recommended component
//           />
//         )}

//         {activeTab === 'watchvideos' && (
//           <Routes>
//             <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
//           </Routes>
//         )}

//         {selectedVideo && (
//           <div className="video-player">
//             <h3>Now Playing: Video {selectedVideo}</h3>
//             {/* Replace this with actual video player or iframe */}
//             <video controls>
//               <source src={`https://path/to/video/${selectedVideo}.mp4`} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileTabs;






// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import './ProfileTabs.css';
// import Recommended1 from '../Recommended1/Recommended1';
// import WatchVideos from '../WatchVideos/WatchVideos';

// const ProfileTabs = () => {
//   const [activeTab, setActiveTab] = useState('recommended');
//   const [selectedVideo, setSelectedVideo] = useState(null); // State to hold selected video

// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import './ProfileTabs.css';
// import Recommended1 from '../Recommended1/Recommended1';
// import WatchVideos from '../WatchVideos/WatchVideos';

// const ProfileTabs = () => {
//   const [activeTab, setActiveTab] = useState('recommended');
//   const [selectedVideo, setSelectedVideo] = useState(null); // State to hold selected video

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleVideoClick = (videoId) => {
//     // Set the selected video when clicked
//     setSelectedVideo(videoId);
//   };

//   return (
//     <div className="profile-tabs">
//       <div className="tabs">

//       <button 
//           className={`tab ${activeTab === 'home' ? 'active' : ''}`}
//           onClick={() => handleTabClick('home')}
//         >Home
//           {/* <Link to={ProfileHome}>Home</Link>          */}
//         </button>


//         <button 
//           className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
//           onClick={() => handleTabClick('recommended')}
//         >
//           Recommended
//         </button>
//         <button 
//           className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`}
//           onClick={() => handleTabClick('watchvideos')}
//         >
//           Watch Videos
//         </button>
//         <button 
//           className={`tab ${activeTab === 'playlists' ? 'active' : ''}`}
//           onClick={() => handleTabClick('playlists')}
//         >
//           Playlists
//         </button>
//         <button 
//           className={`tab ${activeTab === 'about' ? 'active' : ''}`}
//           onClick={() => handleTabClick('about')}
//         >
//           About
//         </button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'recommended' && (
//           <Recommended1
//             categoryId={1}
//             handleVideoClick={handleVideoClick} // Pass the click handler to Recommended component
//           />
//         )}

//         {activeTab === 'watchvideos' && (
//           <Routes>
//             <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
//           </Routes>
//         )}

//         {selectedVideo && (
//           <div className="video-player">
//             <h3>Now Playing: Video {selectedVideo}</h3>
//             {/* Replace this with actual video player or iframe */}
//             <video controls>
//               <source src={`https://path/to/video/${selectedVideo}.mp4`} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfileTabs;





// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import './ProfileTabs.css';
// import ProfileHome from '../ProfileHome/ProfileHome';
// import WatchVideos from '../WatchVideos/WatchVideos';

// const ProfileTabs = () => {
//   const [activeTab, setActiveTab] = useState('home');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="profile-tabs">
//       <div className="tabs">
//         <Link to="/" className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
//           Home
//         </Link>
//         <button 
//           className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`} 
//           onClick={() => handleTabClick('watchvideos')}
//         >
//           Watch Videos
//         </button>
//         <button 
//           className={`tab ${activeTab === 'playlists' ? 'active' : ''}`} 
//           onClick={() => handleTabClick('playlists')}
//         >
//           Playlists
//         </button>
//         <button 
//           className={`tab ${activeTab === 'about' ? 'active' : ''}`} 
//           onClick={() => handleTabClick('about')}
//         >
//           About
//         </button>
//       </div>

//       <div className="tab-content">
//         <Routes>
//           <Route path="/" element={<ProfileHome />} />
//           <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default ProfileTabs;


































// import React, { useState } from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import './ProfileTabs.css';
// import ProfileHome from '../ProfileHome/ProfileHome';
// import WatchVideos from '../WatchVideos/WatchVideos';

// const ProfileTabs = () => {
//   const [activeTab, setActiveTab] = useState('home');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleVideoClick = (videoId) => {
//     // Set the selected video when clicked
//     setSelectedVideo(videoId);
//   };

//   return (
//     <div className="profile-tabs">
//       <div className="tabs">
//         <button 
//           className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
//           onClick={() => handleTabClick('recommended')}
//         >
//           Recommended
//         </button>
//         <button 
//           className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`}>
//         </button>
  
//         <Link to="/" className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
//           Home
//         </Link>
//         <button 
//           className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`} 

//           onClick={() => handleTabClick('watchvideos')}
//         >
//           Watch Videos
//         </button>
//         <button 

//           className={`tab ${activeTab === 'playlists' ? 'active' : ''}`}

//           className={`tab ${activeTab === 'playlists' ? 'active' : ''}`} 

//           onClick={() => handleTabClick('playlists')}
//         >
//           Playlists
//         </button>
//         <button 

//           className={`tab ${activeTab === 'about' ? 'active' : ''}`}

//           className={`tab ${activeTab === 'about' ? 'active' : ''}`} 

//           onClick={() => handleTabClick('about')}
//         >
//           About
//         </button>
//       </div>

//       <div className="tab-content">

//         {activeTab === 'recommended' && (
//           <Recommended1
//             categoryId={1}
//             handleVideoClick={handleVideoClick} // Pass the click handler to Recommended component
//           />
//         )}

//         {activeTab === 'watchvideos' && (
//           <Routes>
//             <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
//           </Routes>
//         )}

//         {selectedVideo && (
//           <div className="video-player">
//             <h3>Now Playing: Video {selectedVideo}</h3>
//             {/* Replace this with actual video player or iframe */}
//             <video controls>
//               <source src={`https://path/to/video/${selectedVideo}.mp4`} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         )}
//         <Routes>
//           <Route path="/" element={<ProfileHome />} />
//           <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
//         </Routes>

//       </div>
//     </div>
//   );
// };

// export default ProfileTabs;


















import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './ProfileTabs.css';
import ProfileHome from '../ProfileHome/ProfileHome';
import WatchVideos from '../WatchVideos/WatchVideos';
import Recommended1 from '../Recommended1/Recommended1'; // Ensure it's imported

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedVideo, setSelectedVideo] = useState(null); // Add selectedVideo state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="profile-tabs">
      <div className="tabs">

        <Link to="/Home" className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          Home
        </Link>

        {/* <button 
          className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`}
          onClick={() => handleTabClick('watchvideos')}
        >
          Watch Videos
        </button> */}

        <Link to="/watchvideos/:categoryId"
          className={`tab ${activeTab === 'watchvideos' ? 'active' : ''}`}
          onClick={() => handleTabClick('watchvideos')} >
          Watch Videos
        </Link>

        <button 
          className={`tab ${activeTab === 'playlists' ? 'active' : ''}`}
          onClick={() => handleTabClick('playlists')}
        >
          Playlists
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'recommended' && (
          <Recommended1
            categoryId={1}
            handleVideoClick={handleVideoClick} // Pass the click handler to Recommended component
          />
        )}

        {activeTab === 'watchvideos' && (
          <Routes>
            <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
          </Routes>
        )}

        {selectedVideo && (
          <div className="video-player">
            <h3>Now Playing: Video {selectedVideo}</h3>
            <video controls>
              <source src={`https://path/to/video/${selectedVideo}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <Routes>
          <Route path="/" element={<ProfileHome />} />
          <Route path="/watchvideos/:categoryId" element={<WatchVideos />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileTabs;
