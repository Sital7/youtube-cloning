// import React, { useState, useEffect } from 'react';
// import './ProfileSidebar.css';
// import home from '../../assets/home.png';
// import { SiYoutubeshorts } from "react-icons/si";
// import { MdSubscriptions } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import YouSection from '../YouSection/YouSection';

// const ProfileSidebar = ({ sidebar, category, setCategory }) => {
//   const [likedVideos, setLikedVideos] = useState([]);
//   const [storyData, setStoryData] = useState([]);
//   const [libraryBooks, setLibraryBooks] = useState([]);

//   // Fetch liked videos
//   useEffect(() => {
//     if (category === 'liked') {
//       fetch('https://api.example.com/likedVideos')  // Replace with your API endpoint
//         .then((response) => response.json())
//         .then((data) => setLikedVideos(data))
//         .catch((error) => console.error('Error fetching liked videos:', error));
//     }
//   }, [category]);

//   // Fetch story data
//   useEffect(() => {
//     if (category === 'story') {
//       fetch('https://api.example.com/story')  // Replace with your API endpoint
//         .then((response) => response.json())
//         .then((data) => setStoryData(data))
//         .catch((error) => console.error('Error fetching story data:', error));
//     }
//   }, [category]);

//   // Fetch library books
//   useEffect(() => {
//     if (category === 'libraryBooks') {
//       fetch('https://api.example.com/libraryBooks')  // Replace with your API endpoint
//         .then((response) => response.json())
//         .then((data) => setLibraryBooks(data))
//         .catch((error) => console.error('Error fetching library books:', error));
//     }
//   }, [category]);

//   return (
//     <div className={`profile-sidebar ${sidebar ? '' : 'small-sidebar'}`}>
//       <div className="shortcut-link">
//         <div className={`side-link ${category === 0 ? 'active' : ''}`}>
//             <Link to="/Home">
//             <img src={home} alt="home" /> <p>Home</p>
//             </Link>
//         </div>

//         {/* Shorts Section */}
//         <div className={`side-link ${category === 30 ? 'active' : ''}`}>
//           <Link to="/shorts" className="link-style"> 
//             <SiYoutubeshorts size={24} /> <p>Shorts</p>
//           </Link>
//         </div>

//         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
//           <MdSubscriptions /> <p>Subscriptions</p>
//         </div>
//         <hr />

//         {/* User Section */}
//         <div className="side-link" onClick={() => setCategory('you')}>
//           <YouSection />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSidebar;




import React, { useState, useEffect } from 'react';
import './ProfileSidebar.css';
import home from '../../assets/home.png';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from 'react-icons/md';
import { Link } from 'react-router-dom';
import YouSection from '../YouSection/YouSection';

const ProfileSidebar = ({ sidebar, category, setCategory }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [libraryBooks, setLibraryBooks] = useState([]);

  // Fetch liked videos
  useEffect(() => {
    if (category === 'liked') {
      fetch('https://api.example.com/likedVideos')  // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => setLikedVideos(data))
        .catch((error) => console.error('Error fetching liked videos:', error));
    }
  }, [category]);

  // Fetch story data
  useEffect(() => {
    if (category === 'story') {
      fetch('https://api.example.com/story')  // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => setStoryData(data))
        .catch((error) => console.error('Error fetching story data:', error));
    }
  }, [category]);

  // Fetch library books
  useEffect(() => {
    if (category === 'libraryBooks') {
      fetch('https://api.example.com/libraryBooks')  
        .then((response) => response.json())
        .then((data) => setLibraryBooks(data))
        .catch((error) => console.error('Error fetching library books:', error));
    }
  }, [category]);

  return (
    <div className={`profile-sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-link">
        <div className={`side-link ${category === 0 ? 'active' : ''}`}>
          <Link to="/Home" className="link-style">
            <img src={home} alt="home" />
            <p>Home</p>
          </Link>
        </div>

        <div className={`side-link ${category === 30 ? 'active' : ''}`}>
          <Link to="/shorts" className="link-style">
            <SiYoutubeshorts size={24} />
            <p>Shorts</p>
          </Link>
        </div>

        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <MdSubscriptions />
          <p>Subscriptions</p>
        </div>
        <hr />

        <div className="side-link" onClick={() => setCategory('you')}>
          <YouSection />
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
