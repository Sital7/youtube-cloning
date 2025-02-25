// // // // // // // correct but some error is showing
// // // // // // import React from 'react'
// // // // // // import './Sidebar.css'
// // // // // // import home from '../../assets/home.png'
// // // // // // import game_icon from '../../assets/game_icon.png'
// // // // // // import automobiles from '../../assets/automobiles.png'
// // // // // // import sports from '../../assets/sports.png'
// // // // // // import entertainment from '../../assets/entertainment.png'
// // // // // // import tech from '../../assets/tech.png'
// // // // // // import music from '../../assets/music.png'
// // // // // // import blogs from '../../assets/blogs.png'
// // // // // // import news from '../../assets/news.png'
// // // // // // import jack from '../../assets/jack.png'
// // // // // // import simon from '../../assets/simon.png'
// // // // // // import tom from '../../assets/tom.png'
// // // // // // import megan from '../../assets/megan.png'
// // // // // // import cameron from '../../assets/cameron.png'

// // // // // // // new add
// // // // // // import{
// // // // // //     MdSubscriptions,
// // // // // //     MdExitToApp,
// // // // // //     MdThumbUp,
// // // // // //     MdHistory,
// // // // // //     MdLibraryBooks,
// // // // // //     MdHome,
// // // // // //     MdSentimentDissatisfied,
// // // // // // } from "react-icons/md"

// // // // // // const Sidebar = ({sidebar,category,setCategory}) => {
// // // // // //   return (
// // // // // //     <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
// // // // // //       <div className="sortcut-link" >
// // // // // //         <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
// // // // // //             <img src={home} alt="" /> <p>Home</p>
// // // // // //         </div>

// // // // // //         <div className="sortcut-link" >
// // // // // //         <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
// // // // // //             <Like alt="" /> <p>Home</p>
// // // // // //         </div>

// // // // // //         <hr />
// // // // // //         <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
// // // // // //             <img src={game_icon} alt="" /> <p>Gaming</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
// // // // // //             <img src={automobiles} alt="" /> <p>Automobiles</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
// // // // // //             <img src={sports} alt="" /> <p>Sports</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
// // // // // //             <img src={entertainment} alt="" /> <p>Entertainment</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
// // // // // //             <img src={tech} alt="" /> <p>Technology</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
// // // // // //             <img src={music} alt="" /> <p>Music</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
// // // // // //             <img src={blogs} alt="" /> <p>Blogs</p>
// // // // // //         </div>

// // // // // //         <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
// // // // // //             <img src={news} alt="" /> <p>News</p>
// // // // // //         </div>
// // // // // //         <hr />
// // // // // //       </div>


// // // // // //       <div className="subscribed-list">
// // // // // //         <h3>Subscribed</h3>

// // // // // //         {/* <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(2)}> */}
// // // // // //         <div className="side-link">
// // // // // //             <img src={jack} alt="" />  <p>PewDiePie</p>
// // // // // //         </div>

// // // // // //         <div className="side-link">
// // // // // //             <img src={simon} alt="" />  <p>MrBeast</p>
// // // // // //         </div>

// // // // // //         <div className="side-link">
// // // // // //             <img src={tom} alt="" />  <p>Justin Bieber</p>
// // // // // //         </div>

// // // // // //         <div className="side-link">
// // // // // //             <img src={megan} alt="" />  <p>5-Minute Crafts</p>
// // // // // //         </div>

// // // // // //         <div className="side-link">
// // // // // //             <img src={cameron} alt="" />  <p>Nas Daily</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Sidebar;




// // // // correct 11
// // // import React from 'react';
// // // import './Sidebar.css';
// // // import home from '../../assets/home.png';
// // // import game_icon from '../../assets/game_icon.png';
// // // import automobiles from '../../assets/automobiles.png';
// // // import sports from '../../assets/sports.png';
// // // import entertainment from '../../assets/entertainment.png';
// // // import tech from '../../assets/tech.png';
// // // import music from '../../assets/music.png';
// // // import blogs from '../../assets/blogs.png';
// // // import news from '../../assets/news.png';
// // // import jack from '../../assets/jack.png';
// // // import simon from '../../assets/simon.png';
// // // import tom from '../../assets/tom.png';
// // // import megan from '../../assets/megan.png';
// // // import cameron from '../../assets/cameron.png';
// // // import { SiYoutubeshorts } from "react-icons/si";
// // // import YouSection from '../YouSection/YouSection'

// // // import {
// // //   MdSubscriptions,
// // //   MdExitToApp,
// // //   MdThumbUp,
// // //   MdHistory,
// // //   MdLibraryBooks,
// // //   MdSentimentDissatisfied,
// // // } from 'react-icons/md';

// // // const Sidebar = ({ sidebar, category, setCategory }) => {
// // //   return (
// // //     <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
// // //       <div className="sortcut-link">
// // //         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //           <img src={home} alt="" /> <p>Home</p>
// // //         </div>

// // //         <div className={`side-link ${category === 30 ? 'active' : ''}`} onClick={() => setCategory(30)}>
// // //        <SiYoutubeshorts /> <p>Shorts</p>
// // //        </div>


// // //         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //           <MdSubscriptions /> <p>Subscriptions</p>
// // //         </div>

// // //         <hr/>

// // //         <div>
// // //           <h1 className='explore'>Explore</h1>
// // //           <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
// // //             <img src={game_icon} alt="" /> <p>Gaming</p>
// // //           </div>

// // //           <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
// // //             <img src={automobiles} alt="" /> <p>Automobiles</p>
// // //           </div>

// // //           <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
// // //             <img src={sports} alt="" /> <p>Sports</p>
// // //           </div>

// // //           <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
// // //             <img src={entertainment} alt="" /> <p>Entertainment</p>
// // //           </div>

// // //           <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
// // //             <img src={tech} alt="" /> <p>Technology</p>
// // //           </div>

// // //           <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
// // //             <img src={music} alt="" /> <p>Music</p>
// // //           </div>

// // //           <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
// // //             <img src={blogs} alt="" /> <p>Blogs</p>
// // //           </div>

// // //           <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
// // //             <img src={news} alt="" /> <p>News</p>
// // //           </div>
// // //         </div>
// // //         <hr />

// // //         <div>

// // //         <div className={`side-link`} onClick={() => setCategory('you')}>
// // //             <YouSection /> {/* YouSection here */}
// // //           </div>

// // //           <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //             <MdThumbUp /> <p>Liked Video</p>
// // //           </div>

// // //           <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //             < MdHistory /> <p> Story</p>
// // //           </div>

// // //           <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //             <MdLibraryBooks /> <p>LibraryBooks</p>
// // //           </div>
// // //           <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //             <MdSentimentDissatisfied /> <p>i dont know</p>
// // //           </div>
// // //           <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // //             <MdExitToApp /> <p>Log Out</p>
// // //           </div>
// // //         </div>
        
        
// // //         <hr />
// // //       </div>

// // //       <div className="subscribed-list">
// // //         <h3>Subscribed</h3>

// // //         <div className="side-link">
// // //           <img src={jack} alt="" /> <p>PewDiePie</p>
// // //         </div>

// // //         <div className="side-link">
// // //           <img src={simon} alt="" /> <p>MrBeast</p>
// // //         </div>

// // //         <div className="side-link">
// // //           <img src={tom} alt="" /> <p>Justin Bieber</p>
// // //         </div>

// // //         <div className="side-link">
// // //           <img src={megan} alt="" /> <p>5-Minute Crafts</p>
// // //         </div>

// // //         <div className="side-link">
// // //           <img src={cameron} alt="" /> <p>Nas Daily</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;





// // // // import React from 'react';
// // // // import './Sidebar.css';
// // // // import { SiYoutubeshorts } from "react-icons/si";
// // // // import { Link } from 'react-router-dom'; // Import Link
// // // // import shorts from '../Shots/Shorts';
// // // // import { MdSubscriptions, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md';

// // // // const Sidebar = ({ sidebar, category, setCategory }) => {
// // // //   return (
// // // //     <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
// // // //       <div className="shortcut-link">
// // // //         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // // //           <p>Home</p>
// // // //         </div>

// // // //         {/* Add Link for Shorts */}
// // // //         <div className={`side-link ${category === 30 ? 'active' : ''}`}>
// // // //           <Link to="/shorts" className="link-style"> {/* Add Link component */}
// // // //             <SiYoutubeshorts /> <p>Shorts</p>
// // // //           </Link>
// // // //         </div>

// // // //         <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
// // // //           <p>Music</p>
// // // //         </div>

// // // //         <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
// // // //           <p>Gaming</p>
// // // //         </div>

// // // //         <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
// // // //           <p>Technology</p>
// // // //         </div>

// // // //         <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
// // // //           <p>News</p>
// // // //         </div>

// // // //         <hr />

// // // //         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
// // // //           <MdExitToApp /> <p>Log Out</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Sidebar;




// // up to u section correct
// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import home from '../../assets/home.png';
// import game_icon from '../../assets/game_icon.png';
// import automobiles from '../../assets/automobiles.png';
// import sports from '../../assets/sports.png';
// import entertainment from '../../assets/entertainment.png';
// import tech from '../../assets/tech.png';
// import music from '../../assets/music.png';
// import blogs from '../../assets/blogs.png';
// import news from '../../assets/news.png';
// import jack from '../../assets/jack.png';
// import simon from '../../assets/simon.png';
// import tom from '../../assets/tom.png';
// import megan from '../../assets/megan.png';
// import cameron from '../../assets/cameron.png';
// import { SiYoutubeshorts } from "react-icons/si";
// import YouSection from '../YouSection/YouSection'

// import {
//   MdSubscriptions,
//   // MdExitToApp,
//   MdThumbUp,
//   MdHistory,
//   MdLibraryBooks,
//   MdSentimentDissatisfied,
// } from 'react-icons/md';

// const Sidebar = ({ sidebar, category, setCategory }) => {
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
//     <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
//       <div className="sortcut-link">
//         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
//           <img src={home} alt="" /> <p>Home</p>
//         </div>

//         <div className={`side-link ${category === 30 ? 'active' : ''}`} onClick={() => setCategory(30)}>
//           <SiYoutubeshorts /> <p>Shorts</p>
//         </div>

//         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
//           <MdSubscriptions /> <p>Subscriptions</p>
//         </div>

//         <hr />

//         <div>
//           <h1 className='explore'>Explore</h1>
//           <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
//             <img src={game_icon} alt="" /> <p>Gaming</p>
//           </div>

//           <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
//             <img src={automobiles} alt="" /> <p>Automobiles</p>
//           </div>

//           <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
//             <img src={sports} alt="" /> <p>Sports</p>
//           </div>

//           <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
//             <img src={entertainment} alt="" /> <p>Entertainment</p>
//           </div>

//           <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
//             <img src={tech} alt="" /> <p>Technology</p>
//           </div>

//           <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
//             <img src={music} alt="" /> <p>Music</p>
//           </div>

//           <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
//             <img src={blogs} alt="" /> <p>Blogs</p>
//           </div>

//           <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
//             <img src={news} alt="" /> <p>News</p>
//           </div>
//         </div>
//         <hr />

//         <div>
//           <div className={`side-link`} onClick={() => setCategory('you')}>
//             <YouSection /> {/* YouSection here */}
//           </div>

//           <div className={`side-link ${category === 'liked' ? 'active' : ''}`} onClick={() => setCategory('liked')}>
//             <MdThumbUp /> <p>Liked Video</p>
//           </div>

//           <div className={`side-link ${category === 'story' ? 'active' : ''}`} onClick={() => setCategory('story')}>
//             <MdHistory /> <p>Story</p>
//           </div>

//           <div className={`side-link ${category === 'libraryBooks' ? 'active' : ''}`} onClick={() => setCategory('libraryBooks')}>
//             <MdLibraryBooks /> <p>LibraryBooks</p>
//           </div>

//           <div className={`side-link ${category === 'unknown' ? 'active' : ''}`} onClick={() => setCategory('unknown')}>
//             <MdSentimentDissatisfied /> <p>I don't know</p>
//           </div>

//           {/* <div className={`side-link ${category === 'logout' ? 'active' : ''}`} onClick={() => setCategory('logout')}>
//             <MdExitToApp /> <p>Log Out</p>
//           </div> */}
//         </div>

//         <hr />
//       </div>

//       <div className="subscribed-list">
//         <h3>Subscribed</h3>
//         <div className="side-link">
//           <img src={jack} alt="" /> <p>PewDiePie</p>
//         </div>

//         <div className="side-link">
//           <img src={simon} alt="" /> <p>MrBeast</p>
//         </div>

//         <div className="side-link">
//           <img src={tom} alt="" /> <p>Justin Bieber</p>
//         </div>

//         <div className="side-link">
//           <img src={megan} alt="" /> <p>5-Minute Crafts</p>
//         </div>

//         <div className="side-link">
//           <img src={cameron} alt="" /> <p>Nas Daily</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdThumbUp, MdHistory, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Import Link for routing
import YouSection from '../YouSection/YouSection';

const Sidebar = ({ sidebar, category, setCategory }) => {
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
      fetch('https://api.example.com/libraryBooks')  // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => setLibraryBooks(data))
        .catch((error) => console.error('Error fetching library books:', error));
    }
  }, [category]);

  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-link">
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <img src={home} alt="" /> <p>Home</p>
        </div>

        {/* Shorts Section Updated */}
        {/* <div className={`side-link ${category === 30 ? 'active' : ''}`}>
          <Link to="/shorts" className="link-style"> 
            <SiYoutubeshorts /> <p>Shorts</p>
          </Link>
        </div> */}
        <div className={`side-link ${category === 30 ? 'active' : ''}`}>
  <Link to="/shorts" className="link-style"> 
    <SiYoutubeshorts size={24} /> <p>Shorts</p>
  </Link>
</div>


        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <MdSubscriptions /> <p>Subscriptions</p>
        </div>
        <hr />

        {/* Additional Sections */}
        <div>
          <h1 className='explore'>Explore</h1>

          <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
          <img src={music} alt="" /> <p>Music</p>
        </div>

        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>

        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
            <img src={blogs} alt="" /> <p>Blogs</p>
          </div>

        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
          <img src={news} alt="" /> <p>News</p>
        </div>
          <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
            <img src={sports} alt="" /> <p>Sports</p>
          </div>

          <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
            <img src={entertainment} alt="" /> <p>Entertainment</p>
          </div>

          <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
            <img src={automobiles} alt="" /> <p>Automobiles</p>
          </div>

          <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
            <img src={tech} alt="" /> <p>Technology</p>
          </div>
        </div>
        <hr />

        {/* User Section */}
        <div className={`side-link`} onClick={() => setCategory('you')}>
          <YouSection /> {/* YouSection here */}
        </div>

        <div className={`side-link ${category === 'liked' ? 'active' : ''}`} onClick={() => setCategory('liked')}>
          <MdThumbUp /> <p>Liked Video</p>
        </div>

        <div className={`side-link ${category === 'story' ? 'active' : ''}`} onClick={() => setCategory('story')}>
          <MdHistory /> <p>Story</p>
        </div>

        <div className={`side-link ${category === 'libraryBooks' ? 'active' : ''}`} onClick={() => setCategory('libraryBooks')}>
          <MdLibraryBooks /> <p>LibraryBooks</p>
        </div>

        <div className={`side-link ${category === 'unknown' ? 'active' : ''}`} onClick={() => setCategory('unknown')}>
          <MdSentimentDissatisfied /> <p>I don't know</p>
        </div>
      </div>

      {/* Subscribed List Section */}
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" /> <p>PewDiePie</p>
        </div>

        <div className="side-link">
          <img src={simon} alt="" /> <p>MrBeast</p>
        </div>

        <div className="side-link">
          <img src={tom} alt="" /> <p>Justin Bieber</p>
        </div>

        <div className="side-link">
          <img src={megan} alt="" /> <p>5-Minute Crafts</p>
        </div>

        <div className="side-link">
          <img src={cameron} alt="" /> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



// for subscription
// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import { MdSubscriptions } from 'react-icons/md';
// import { Link } from 'react-router-dom'; // Import Link for routing
// import YouSection from '../YouSection/YouSection';

// const Sidebar = ({ sidebar, category, setCategory }) => {
//   const [subscriptions, setSubscriptions] = useState([]);  // Store subscription data
//   const [loading, setLoading] = useState(false);

//   // YouTube Data API Key (replace with your actual API key)
//   const apiKey = 'YOUR_YOUTUBE_API_KEY'; 
//   const channelId = 'YOUR_CHANNEL_ID';  // Replace with the channel ID

//   // Fetch subscriptions data when category is '0' (Subscriptions section clicked)
//   useEffect(() => {
//     if (category === 0) {
//       setLoading(true);
//       fetch(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&channelId=${channelId}&key=${apiKey}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setSubscriptions(data.items || []);  // Store the subscription items
//           setLoading(false);  // Set loading to false once data is fetched
//         })
//         .catch((error) => {
//           console.error('Error fetching subscriptions:', error);
//           setLoading(false);
//         });
//     }
//   }, [category]);

//   return (
//     <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
//       <div className="shortcut-link">
//         {/* Subscriptions Section */}
//         <div
//           className={`side-link ${category === 0 ? 'active' : ''}`}
//           onClick={() => setCategory(0)}
//         >
//           <MdSubscriptions /> <p>Subscriptions</p>
//         </div>
//         {category === 0 && (
//           <div className="subscriptions-list">
//             {loading ? (
//               <p>Loading subscriptions...</p>
//             ) : subscriptions.length > 0 ? (
//               subscriptions.map((subscription) => (
//                 <div key={subscription.id} className="side-link">
//                   <img src={subscription.snippet.thumbnails.default.url} alt="" />
//                   <p>{subscription.snippet.title}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No subscriptions found.</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Other Sections */}
//       {/* Add your other sections here */}
//       <div>
//         <h1 className="explore">Explore</h1>
//         {/* Additional sections like Music, Gaming, etc. */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
