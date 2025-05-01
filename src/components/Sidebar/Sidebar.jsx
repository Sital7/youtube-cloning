// // // // // // // // // // correct but some error is showing
// // // // // // // // // import React from 'react'
// // // // // // // // // import './Sidebar.css'
// // // // // // // // // import home from '../../assets/home.png'
// // // // // // // // // import game_icon from '../../assets/game_icon.png'
// // // // // // // // // import automobiles from '../../assets/automobiles.png'
// // // // // // // // // import sports from '../../assets/sports.png'
// // // // // // // // // import entertainment from '../../assets/entertainment.png'
// // // // // // // // // import tech from '../../assets/tech.png'
// // // // // // // // // import music from '../../assets/music.png'
// // // // // // // // // import blogs from '../../assets/blogs.png'
// // // // // // // // // import news from '../../assets/news.png'
// // // // // // // // // import jack from '../../assets/jack.png'
// // // // // // // // // import simon from '../../assets/simon.png'
// // // // // // // // // import tom from '../../assets/tom.png'
// // // // // // // // // import megan from '../../assets/megan.png'
// // // // // // // // // import cameron from '../../assets/cameron.png'

// // // // // // // // // // new add
// // // // // // // // // import{
// // // // // // // // //     MdSubscriptions,
// // // // // // // // //     MdExitToApp,
// // // // // // // // //     MdThumbUp,
// // // // // // // // //     MdHistory,
// // // // // // // // //     MdLibraryBooks,
// // // // // // // // //     MdHome,
// // // // // // // // //     MdSentimentDissatisfied,
// // // // // // // // // } from "react-icons/md"

// // // // // // // // // const Sidebar = ({sidebar,category,setCategory}) => {
// // // // // // // // //   return (
// // // // // // // // //     <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
// // // // // // // // //       <div className="sortcut-link" >
// // // // // // // // //         <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
// // // // // // // // //             <img src={home} alt="" /> <p>Home</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="sortcut-link" >
// // // // // // // // //         <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
// // // // // // // // //             <Like alt="" /> <p>Home</p>
// // // // // // // // //         </div>

// // // // // // // // //         <hr />
// // // // // // // // //         <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
// // // // // // // // //             <img src={game_icon} alt="" /> <p>Gaming</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
// // // // // // // // //             <img src={automobiles} alt="" /> <p>Automobiles</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
// // // // // // // // //             <img src={sports} alt="" /> <p>Sports</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
// // // // // // // // //             <img src={entertainment} alt="" /> <p>Entertainment</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
// // // // // // // // //             <img src={tech} alt="" /> <p>Technology</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
// // // // // // // // //             <img src={music} alt="" /> <p>Music</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
// // // // // // // // //             <img src={blogs} alt="" /> <p>Blogs</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
// // // // // // // // //             <img src={news} alt="" /> <p>News</p>
// // // // // // // // //         </div>
// // // // // // // // //         <hr />
// // // // // // // // //       </div>


// // // // // // // // //       <div className="subscribed-list">
// // // // // // // // //         <h3>Subscribed</h3>

// // // // // // // // //         {/* <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(2)}> */}
// // // // // // // // //         <div className="side-link">
// // // // // // // // //             <img src={jack} alt="" />  <p>PewDiePie</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="side-link">
// // // // // // // // //             <img src={simon} alt="" />  <p>MrBeast</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="side-link">
// // // // // // // // //             <img src={tom} alt="" />  <p>Justin Bieber</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="side-link">
// // // // // // // // //             <img src={megan} alt="" />  <p>5-Minute Crafts</p>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="side-link">
// // // // // // // // //             <img src={cameron} alt="" />  <p>Nas Daily</p>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default Sidebar;



// // good final code
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Sidebar.css';

// import { SiYoutubeshorts } from 'react-icons/si';
// import { MdSubscriptions, MdThumbUp, MdHistory, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md';

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
// import YouSection from '../YouSection/YouSection';

// const Sidebar = ({ sidebar, category, setCategory }) => {
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
//       <div className="shortcut-link">
//         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
//           <img src={home} alt="Home" />
//           <p>Home</p>
//         </div>

//         <Link to="/shorts" className={`side-link ${isActive('/shorts') ? 'active' : ''}`}>
//           <SiYoutubeshorts size={24} />
//           <p>Shorts</p>
//         </Link>

//         <Link to="/subscriptions" className={`side-link ${isActive('/subscriptions') ? 'active' : ''}`}>
//           <MdSubscriptions />
//           <p>Subscriptions</p>
//         </Link>

//         <hr />

//         <h1 className="explore">Explore</h1>

//         <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
//           <img src={music} alt="Music" />
//           <p>Music</p>
//         </div>

//         <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
//           <img src={game_icon} alt="Gaming" />
//           <p>Gaming</p>
//         </div>

//         <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
//           <img src={blogs} alt="Blogs" />
//           <p>Blogs</p>
//         </div>

//         <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
//           <img src={news} alt="News" />
//           <p>News</p>
//         </div>

//         <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
//           <img src={sports} alt="Sports" />
//           <p>Sports</p>
//         </div>

//         <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
//           <img src={entertainment} alt="Entertainment" />
//           <p>Entertainment</p>
//         </div>

//         <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
//           <img src={automobiles} alt="Automobiles" />
//           <p>Automobiles</p>
//         </div>

//         <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
//           <img src={tech} alt="Technology" />
//           <p>Technology</p>
//         </div>

//         <hr />

//         <Link to="/you" className={`side-link ${isActive('/you') ? 'active' : ''}`}>
//           <YouSection />
//         </Link>

//         <Link to="/liked" className={`side-link ${isActive('/liked') ? 'active' : ''}`}>
//           <MdThumbUp />
//           <p>Liked Videos</p>
//         </Link>

//         <Link to="/history" className={`side-link ${isActive('/history') ? 'active' : ''}`}>
//           <MdHistory />
//           <p>History</p>
//         </Link>

//         <Link to="/library" className={`side-link ${isActive('/library') ? 'active' : ''}`}>
//           <MdLibraryBooks />
//           <p>Library</p>
//         </Link>

//         <Link to="/unknown" className={`side-link ${isActive('/unknown') ? 'active' : ''}`}>
//           <MdSentimentDissatisfied />
//           <p>I don't know</p>
//         </Link>
//       </div>

//       <div className="subscribed-list">
//         <h3>Subscribed</h3>
//         <div className="side-link">
//           <img src={jack} alt="PewDiePie" />
//           <p>PewDiePie</p>
//         </div>
//         <div className="side-link">
//           <img src={simon} alt="MrBeast" />
//           <p>MrBeast</p>
//         </div>
//         <div className="side-link">
//           <img src={tom} alt="Justin Bieber" />
//           <p>Justin Bieber</p>
//         </div>
//         <div className="side-link">
//           <img src={megan} alt="5-Minute Crafts" />
//           <p>5-Minute Crafts</p>
//         </div>
//         <div className="side-link">
//           <img src={cameron} alt="Nas Daily" />
//           <p>Nas Daily</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Sidebar.css';

// import { SiYoutubeshorts } from 'react-icons/si';
// import { MdSubscriptions, MdThumbUp, MdHistory, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md';

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

// import YouSection from '../YouSection/YouSection';

// const Sidebar = ({ sidebar, category, setCategory, accessToken }) => {
//   const location = useLocation();
//   const [subscriptions, setSubscriptions] = useState([]);

//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       try {
//         const response = await fetch(
//           'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=10',
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//               Accept: 'application/json',
//             },
//           }
//         );

//         if (!response.ok) throw new Error('Failed to fetch subscriptions');

//         const data = await response.json();
//         setSubscriptions(data.items || []);
//       } catch (err) {
//         console.error('Error fetching subscriptions:', err);
//       }
//     };

//     if (accessToken) {
//       fetchSubscriptions();
//     }
//   }, [accessToken]);

//   return (
//     <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
//       <div className="shortcut-link">
//         <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
//           <img src={home} alt="Home" />
//           <p>Home</p>
//         </div>

//         <Link to="/shorts" className={`side-link ${isActive('/shorts') ? 'active' : ''}`}>
//           <SiYoutubeshorts size={24} />
//           <p>Shorts</p>
//         </Link>

//         <Link to="/subscriptions" className={`side-link ${isActive('/subscriptions') ? 'active' : ''}`}>
//           <MdSubscriptions />
//           <p>Subscriptions</p>
//         </Link>

//         <hr />

//         <h1 className="explore">Explore</h1>

//         {/* Explore Categories */}
//         {[{ id: 10, icon: music, name: 'Music' },
//           { id: 20, icon: game_icon, name: 'Gaming' },
//           { id: 22, icon: blogs, name: 'Blogs' },
//           { id: 25, icon: news, name: 'News' },
//           { id: 17, icon: sports, name: 'Sports' },
//           { id: 24, icon: entertainment, name: 'Entertainment' },
//           { id: 2, icon: automobiles, name: 'Automobiles' },
//           { id: 28, icon: tech, name: 'Technology' }]
//           .map((cat) => (
//             <div
//               key={cat.id}
//               className={`side-link ${category === cat.id ? 'active' : ''}`}
//               onClick={() => setCategory(cat.id)}
//             >
//               <img src={cat.icon} alt={cat.name} />
//               <p>{cat.name}</p>
//             </div>
//           ))}

//         <hr />

//         <Link to="/you" className={`side-link ${isActive('/you') ? 'active' : ''}`}>
//           <YouSection />
//         </Link>

//         <Link to="/liked" className={`side-link ${isActive('/liked') ? 'active' : ''}`}>
//           <MdThumbUp />
//           <p>Liked Videos</p>
//         </Link>

//         {/* <Link to="/history" className={`side-link ${isActive('/history') ? 'active' : ''}`}>
//           <MdHistory />
//           <p>History</p>
//         </Link> */}

//         {/* <Link to="/library" className={`side-link ${isActive('/library') ? 'active' : ''}`}>
//           <MdLibraryBooks />
//           <p>Library</p>
//         </Link>

//         <Link to="/unknown" className={`side-link ${isActive('/unknown') ? 'active' : ''}`}>
//           <MdSentimentDissatisfied />
//           <p>I don't know</p>
//         </Link> */}
//       </div>

//       <div className="subscribed-list">
//         <h3>Subscribed</h3>
//         {subscriptions.length > 0 ? (
//           subscriptions.map((channel) => (
//             <div key={channel.id} className="side-link">
//               <img src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} />
//               <p>{channel.snippet.title}</p>
//             </div>
//           ))
//         ) : (
//           <>
//             <div className="side-link">
//               <img src={jack} alt="PewDiePie" />
//               <p>PewDiePie</p>
//             </div>
//             <div className="side-link">
//               <img src={simon} alt="MrBeast" />
//               <p>MrBeast</p>
//             </div>
//             <div className="side-link">
//               <img src={tom} alt="Justin Bieber" />
//               <p>Justin Bieber</p>
//             </div>
//             <div className="side-link">
//               <img src={megan} alt="5-Minute Crafts" />
//               <p>5-Minute Crafts</p>
//             </div>
//             <div className="side-link">
//               <img src={cameron} alt="Nas Daily" />
//               <p>Nas Daily</p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;






import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions, MdThumbUp, MdHistory, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md';

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

import YouSection from '../YouSection/YouSection';

const Sidebar = ({ sidebar, category, setCategory, accessToken }) => {
  const location = useLocation();
  const [subscriptions, setSubscriptions] = useState([]);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(
          'https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=10',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: 'application/json',
            },
          }
        );

        if (!response.ok) throw new Error('Failed to fetch subscriptions');

        const data = await response.json();
        setSubscriptions(data.items || []);
      } catch (err) {
        console.error('Error fetching subscriptions:', err);
      }
    };

    if (accessToken) {
      fetchSubscriptions();
    }
  }, [accessToken]);

  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-link">
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>

        <Link to="/shorts" className={`side-link ${isActive('/shorts') ? 'active' : ''}`}>
          <SiYoutubeshorts size={24} />
          <p>Shorts</p>
        </Link>

        <Link to="/subscriptions" className={`side-link ${isActive('/subscriptions') ? 'active' : ''}`}>
          <MdSubscriptions />
          <p>Subscriptions</p>
        </Link>

        <hr />

        <h1 className="explore">Explore</h1>

        {[{ id: 10, icon: music, name: 'Music' },
          { id: 20, icon: game_icon, name: 'Gaming' },
          { id: 22, icon: blogs, name: 'Blogs' },
          { id: 25, icon: news, name: 'News' },
          { id: 17, icon: sports, name: 'Sports' },
          { id: 24, icon: entertainment, name: 'Entertainment' },
          { id: 2, icon: automobiles, name: 'Automobiles' },
          { id: 28, icon: tech, name: 'Technology' }]
          .map((cat) => (
            <div
              key={cat.id}
              className={`side-link ${category === cat.id ? 'active' : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              <img src={cat.icon} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}

        <hr />

        <Link to="/you" className={`side-link ${isActive('/you') ? 'active' : ''}`}>
          <YouSection />
        </Link>

        <Link to="/liked" className={`side-link ${isActive('/liked') ? 'active' : ''}`}>
          <MdThumbUp />
          <p>Liked Videos</p>
        </Link>


      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {subscriptions.length > 0 ? (
          subscriptions.map((channel) => (
            <div key={channel.id} className="side-link">
              <img src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} />
              <p>{channel.snippet.title}</p>
            </div>
          ))
        ) : (
          <>
            <div className="side-link">
              <img src={jack} alt="PewDiePie" />
              <p>PewDiePie</p>
            </div>
            <div className="side-link">
              <img src={simon} alt="MrBeast" />
              <p>MrBeast</p>
            </div>
            <div className="side-link">
              <img src={tom} alt="Justin Bieber" />
              <p>Justin Bieber</p>
            </div>
            <div className="side-link">
              <img src={megan} alt="5-Minute Crafts" />
              <p>5-Minute Crafts</p>
            </div>
            <div className="side-link">
              <img src={cameron} alt="Nas Daily" />
              <p>Nas Daily</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
