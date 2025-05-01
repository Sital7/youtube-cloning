// // // // // correct i should use this
// // // // import React, { useState } from 'react';
// // // // import { Route, Routes } from 'react-router-dom';
// // // // import Navbar from './components/Navbar/Navbar';
// // // // import Home from './pages/Home/Home';
// // // // import Video from './pages/Video/Video';
// // // // import SearchResults from './pages/SearchResults/SearchResults'; 
// // // // import SwitchAccount from './pages/SwitchAccount/SwitchAccount'; 
// // // // import Login from './pages/Login/Login'; 
// // // // import SignUp from './pages/SignUp/SignUp'; 
// // // // import Settings from './pages/Settings/Settings'; 
// // // // import Help from './pages/Help/Help'; 
// // // // import NotificationsPage from './components/Notification/Notification';

// // // // const App = () => {
// // // //   const [sidebar, setSidebar] = useState(true);

// // // //   return (
// // // //     <div>
// // // //       <Navbar setSidebar={setSidebar} />
// // // //       <Routes>
// // // //         <Route path="/" element={<Home sidebar={sidebar} />} />
// // // //         <Route path="/video/:categoryId/:videoId" element={<Video />} />
// // // //         <Route path="/search" element={<SearchResults />} /> 
// // // //         <Route path="/switch-account" element={<SwitchAccount />} /> 
// // // //         <Route path="/login" element={<Login />} /> 
// // // //         <Route path="/signup" element={<SignUp />} />
// // // //         <Route path="/settings" element={<Settings />} /> 
// // // //         <Route path="/help" element={<Help />} /> 
// // // //         <Route path='/notifications' element={<NotificationsPage />} />
// // // //       </Routes>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;




// // // // // // dark mode code
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Route, Routes } from 'react-router-dom';
// // // // // import Navbar from './components/Navbar/Navbar';
// // // // // import Sidebar from './components/Sidebar/Sidebar';
// // // // // import Home from './pages/Home/Home';
// // // // // import Video from './pages/Video/Video';
// // // // // import SearchResults from './pages/SearchResults/SearchResults'; 
// // // // // import SwitchAccount from './pages/SwitchAccount/SwitchAccount'; 
// // // // // import Login from './pages/Login/Login'; 
// // // // // import SignUp from './pages/SignUp/SignUp'; 
// // // // // import Settings from './pages/Settings/Settings'; 
// // // // // import Help from './pages/Help/Help'; 


// // // // // const App = () => {
// // // // //   const [sidebar, setSidebar] = useState(true);
// // // // //   const [darkMode, setDarkMode] = useState(false);

// // // // //   // Effect to toggle dark-mode class on the body element
// // // // //   useEffect(() => {
// // // // //     if (darkMode) {
// // // // //       document.body.classList.add('dark-mode');
// // // // //     } else {
// // // // //       document.body.classList.remove('dark-mode');
// // // // //     }
// // // // //   }, [darkMode]);

// // // // //   return (
// // // // //     <div>
// // // // //       <Navbar setSidebar={setSidebar} setDarkMode={setDarkMode} />
// // // // //       <Sidebar sidebar={sidebar} />
// // // // //       <Routes>
// // // // //         <Route path="/" element={<Home sidebar={sidebar} />} />
// // // // //         <Route path="/video/:categoryId/:videoId" element={<Video />} />
// // // // //         <Route path="/search" element={<SearchResults />} /> 
// // // // //         <Route path="/switch-account" element={<SwitchAccount />} /> 
// // // // //         <Route path="/login" element={<Login />} /> 
// // // // //         <Route path="/signup" element={<SignUp />} />
// // // // //         <Route path="/settings" element={<Settings />} /> 
// // // // //         <Route path="/help" element={<Help />} /> 
// // // // //       </Routes>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;






// // // // correct and used
// // // import React, { useState } from 'react';
// // // import { Route, Routes } from 'react-router-dom';
// // // import Navbar from './components/Navbar/Navbar';
// // // import Home from './pages/Home/Home';
// // // import Video from './pages/Video/Video';
// // // import SearchResults from './pages/SearchResults/SearchResults';
// // // import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// // // import Login from './pages/Login/Login';
// // // import SignUp from './pages/SignUp/SignUp';
// // // import Settings from './pages/Settings/Settings';
// // // import Help from './pages/Help/Help';
// // // import NotificationsPage from './components/Notification/Notification';
// // // import Auth from './components/Auth';
// // // import UploadVideo from './components/UploadVideo';
// // // import ChannelPage from './components/ChannelPages';
// // // import Subscriptions from './components/Subscriptions';

// // // const App = () => {
// // //   const [sidebar, setSidebar] = useState(true);

// // //   return (
// // //     <div>
// // //       <Navbar setSidebar={setSidebar} />
// // //       <Routes>
// // //         <Route path="/Home" element={<Home sidebar={sidebar} />} />
// // //         <Route path="/video/:categoryId/:videoId" element={<Video />} />
// // //         <Route path="/search" element={<SearchResults />} />
// // //         <Route path="/switch-account" element={<SwitchAccount />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/signup" element={<SignUp />} />
// // //         <Route path="/settings" element={<Settings />} />
// // //         <Route path="/help" element={<Help />} />
// // //         <Route path="/notifications" element={<NotificationsPage />} />
// // //         <Route path="/auth" element={<Auth />} />  {/* Add Auth route */}
// // //         <Route path="/upload-video" element={<UploadVideo />} /> {/* Add Upload Video route */}
// // //         <Route path="/channel/:userId" element={<ChannelPage />} /> {/* Dynamic user channel route */}
// // //         <Route path="/subscriptions" element={<Subscriptions />} /> {/* Add Subscriptions route */}
// // //       </Routes>
// // //     </div>
// // //   );
// // // };

// // // export default App;




// // // // good landing code
// // // import React, { useState } from 'react';
// // // import { Route, Routes } from 'react-router-dom';
// // // import Navbar from './components/Navbar/Navbar';
// // // import LandingPage from './pages/LandingPage/LandingPage'; 
// // // import Home from './pages/Home/Home';
// // // import Video from './pages/Video/Video';
// // // import SearchResults from './pages/SearchResults/SearchResults';
// // // import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// // // import Login from './pages/Login/Login';
// // // import SignUp from './pages/SignUp/SignUp';
// // // import Settings from './pages/Settings/Settings';
// // // import Help from './pages/Help/Help';
// // // import NotificationsPage from './components/Notification/Notification';
// // // import Auth from './components/Auth';
// // // import UploadVideo from './components/UploadVideo';
// // // import ChannelPage from './components/ChannelPages';
// // // import Subscriptions from './components/Subscriptions';

// // // const App = () => {
// // //   const [sidebar, setSidebar] = useState(true);

// // //   return (
// // //     <>
// // //       <Navbar setSidebar={setSidebar} />
// // //       <Routes>
// // //         <Route path="/" element={<LandingPage />} />
// // //         <Route path="/home" element={<Home sidebar={sidebar} />} />
// // //         <Route path="/video/:categoryId/:videoId" element={<Video />} />
// // //         <Route path="/search" element={<SearchResults />} />
// // //         <Route path="/switch-account" element={<SwitchAccount />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/signup" element={<SignUp />} />
// // //         <Route path="/settings" element={<Settings />} />
// // //         <Route path="/help" element={<Help />} />
// // //         <Route path="/notifications" element={<NotificationsPage />} />
// // //         <Route path="/auth" element={<Auth />} />
// // //         <Route path="/upload-video" element={<UploadVideo />} />
// // //         <Route path="/channel/:userId" element={<ChannelPage />} />
// // //         <Route path="/subscriptions" element={<Subscriptions />} />
// // //       </Routes>
// // //     </>
// // //   );
// // // };

// // // export default App;




// // // import React, { useState } from 'react';
// // // import { Route, Routes } from 'react-router-dom';
// // // import Navbar from './components/Navbar/Navbar';
// // // import LandingPage from './pages/LandingPage/LandingPage'; 
// // // import Home from './pages/Home/Home';
// // // import Video from './pages/Video/Video';
// // // import SearchResults from './pages/SearchResults/SearchResults';
// // // import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// // // import Login from './pages/Login/Login';
// // // import SignUp from './pages/SignUp/SignUp';
// // // import Settings from './pages/Settings/Settings';
// // // import Help from './pages/Help/Help';
// // // import NotificationsPage from './components/Notification/Notification';
// // // import Auth from './components/Auth';
// // // import UploadVideo from './components/UploadVideo';
// // // import ChannelPage from './components/ChannelPages';
// // // import Subscriptions from './components/Subscriptions';

// // // const App = () => {
// // //   const [sidebar, setSidebar] = useState(true);

// // //   return (
// // //     <>
// // //       {/* Only render Navbar if it's not the LandingPage route */}
// // //       <Routes>
// // //         <Route path="/" element={<LandingPage />} />
// // //         <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
// // //         <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
// // //         <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
// // //         <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
// // //         <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
// // //         <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
// // //         <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
// // //         <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
// // //         <Route path="/notifications" element={<><Navbar setSidebar={setSidebar} /><NotificationsPage /></>} />
// // //         <Route path="/auth" element={<><Navbar setSidebar={setSidebar} /><Auth /></>} />
// // //         <Route path="/upload-video" element={<><Navbar setSidebar={setSidebar} /><UploadVideo /></>} />
// // //         <Route path="/channel/:userId" element={<><Navbar setSidebar={setSidebar} /><ChannelPage /></>} />
// // //         <Route path="/subscriptions" element={<><Navbar setSidebar={setSidebar} /><Subscriptions /></>} />
// // //       </Routes>
// // //     </>
// // //   );
// // // };

// // // export default App;



// // import React, { useState } from 'react';
// // import { Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar/Navbar';
// // import LandingPage from './pages/LandingPage/LandingPage';
// // import Home from './pages/Home/Home';
// // import Video from './pages/Video/Video';
// // import SearchResults from './pages/SearchResults/SearchResults';
// // import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// // import Login from './pages/Login/Login';
// // import SignUp from './pages/SignUp/SignUp';
// // import Settings from './pages/Settings/Settings';
// // import Help from './pages/Help/Help';
// // import NotificationsPage from './components/Notification/Notification';
// // import Auth from './components/Auth';
// // import UploadVideo from './components/UploadVideo';
// // import ChannelPage from './components/ChannelPages';
// // import Subscriptions from './components/Subscriptions';

// // const App = () => {
// //   const [sidebar, setSidebar] = useState(true);

// //   return (
// //     <>
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
// //         {/* <Route path="/video/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} /> */}
// //         <Route path="/video/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
// //         <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
// //         <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
// //         <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
// //         <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
// //         <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
// //         <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
// //         <Route path="/notifications" element={<><Navbar setSidebar={setSidebar} /><NotificationsPage /></>} />
// //         <Route path="/auth" element={<><Navbar setSidebar={setSidebar} /><Auth /></>} />
// //         <Route path="/upload-video" element={<><Navbar setSidebar={setSidebar} /><UploadVideo /></>} />
// //         <Route path="/channel/:userId" element={<><Navbar setSidebar={setSidebar} /><ChannelPage /></>} />
// //         <Route path="/subscriptions" element={<><Navbar setSidebar={setSidebar} /><Subscriptions /></>} />
// //       </Routes>
// //     </>
// //   );
// // };

// // export default App;



// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Video from './pages/Video/Video';
// import SearchResults from './pages/SearchResults/SearchResults';
// import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Settings from './pages/Settings/Settings';
// import Help from './pages/Help/Help';
// import NotificationsPage from './components/Notification/Notification';
// import Shorts from './components/Shots/Shorts'; // Ensure proper import of Shorts component

// import LandingPage from './pages/LandingPage/LandingPage';


// const App = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const [category, setCategory] = useState(0); // Manage category state globally

//   return (
//     <>
//     <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
//         <Route path="/shorts" element={<Shorts />} />
//         <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
//         <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
//         <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
//         <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
//         <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
//         <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
//         <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
//         <Route path="/notifications" element={<><Navbar setSidebar={setSidebar} /><NotificationsPage /></>} />
//       </Routes>
//     </>
//   );
// };

// export default App;




// // correct Sital
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Video from './pages/Video/Video';
// import SearchResults from './pages/SearchResults/SearchResults';
// import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Settings from './pages/Settings/Settings';
// import Help from './pages/Help/Help';
// import NotificationsPage from './components/Notification/Notification';
// import Shorts from './components/Shots/Shorts'; 
// // import profileHome from './components/ProfileHome/ProfileHome'; 

// import LandingPage from './pages/LandingPage/LandingPage';
// import WatchVideos from './components/WatchVideos/WatchVideos';
// import UploadContent from './components/UploadContent/UploadContent';
// import ProfilePage from './components/ProfilePage/ProfilePage';
// import ProfileHome from './components/ProfileHome/ProfileHome';
// // import Profile from './pages/Profile/Profile';
// import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
// import Profileshorts from './components/Profileshorts/Profileshorts';

// const App = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const [category, setCategory] = useState(0); 

  

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<LandingPage setCategory={setCategory} />} />
//         <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
//         <Route path="/shorts" element={<Shorts />} />
//         <Route path="/upload" element={<UploadContent />} />
//         {/* <Route path="/Profile" element={<ProfilePage />} /> */}
//         <Route path="/Profile/*" element={<ProfilePage />} />
//         <Route path="/features" element={<FeaturesPage />} /> {/* Add this route */}
//         <Route path="/profileshorts" element={<Profileshorts />} /> {/* Add this route */}


//         {/* <Route path='/1stproject/src/components/ProfileHome/ProfileHome.jsx' element={<ProfileHome />} /> */}
//         <Route path="/watchvideos/:categoryId" element={<WatchVideos category={category} setCategory={setCategory} />} />
//         <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
//         <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
//         <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
//         <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
//         <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
//         {/* <Route path="/profile" element={<><Navbar setSidebar={setSidebar} /><Profile /></>} /> */}
//         <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
//         <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
//         <Route path="/uploadcontent" element={<><Navbar setSidebar={setSidebar} /><UploadContent /></>} />
//         <Route path="/notifications" element={<><Navbar setSidebar={setSidebar} /><NotificationsPage /></>} />
//       </Routes>
//     </>
//   );
// };

// export default App;




// this is for like content and other and added categorydisplay.jsc file for this
// import React, { useState } from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';

// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Video from './pages/Video/Video';
// import SearchResults from './pages/SearchResults/SearchResults';
// import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Settings from './pages/Settings/Settings';
// import Help from './pages/Help/Help';
// import NotificationsPage from './components/Notification/Notification';
// import Shorts from './components/Shots/Shorts';
// import LandingPage from './pages/LandingPage/LandingPage';
// import WatchVideos from './components/WatchVideos/WatchVideos';
// import UploadContent from './components/UploadContent/UploadContent';
// import ProfilePage from './components/ProfilePage/ProfilePage';
// import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
// import Profileshorts from './components/Profileshorts/Profileshorts';
// import CategoryDisplay from './components/CategoryDisplay/CategoryDisplay';
// import YouPage from './pages/YouPage/YouPage';
// import LikedVideos from './components/LikedVideos/LikedVideos';

// import YourVideos from './pages/Youpages/YourVideos';
// import Playlists from './pages/Youpages/Playlists';
// import WatchLater from './pages/WatchLater/WatchLater';
// import PlayVideo from './components/PlayVideo/PlayVideo';
// import Subscriptions from './components/Subscriptions/Subscriptions';

// const CategoryRouteWrapper = () => {
//   const { categoryId } = useParams();
//   return <CategoryDisplay category={categoryId} />;
// };

// const App = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const [category, setCategory] = useState(0);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<LandingPage setCategory={setCategory} />} />
//         <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
//         <Route path="/shorts" element={<Shorts />} />
//         <Route path="/upload" element={<UploadContent />} />
//         <Route path="/Profile/*" element={<ProfilePage />} />
//         <Route path="/features" element={<FeaturesPage />} />
//         <Route path="/profileshorts" element={<Profileshorts />} />
//         <Route path="/watchvideos/:categoryId" element={<WatchVideos category={category} setCategory={setCategory} />} />
//         <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
//         <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
//         <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
//         <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
//         <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
//         <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
//         <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
//         <Route path="/uploadcontent" element={<><Navbar setSidebar={setSidebar} /><UploadContent /></>} />
//         <Route path="/notifications" element={<><Navbar setSidebar={setSidebar} /><NotificationsPage /></>} />
//         <Route path="/you" element={<><Navbar setSidebar={setSidebar} /><YouPage /></>} />
//         <Route path="/liked" element={<><Navbar setSidebar={setSidebar} /><LikedVideos /></>} />

//         <Route path="/your-videos" element={<><Navbar setSidebar={setSidebar} /><YourVideos /></>} />
//         <Route path="/playlists" element={<><Navbar setSidebar={setSidebar} /><Playlists /></>} />
//         <Route path="/watch-later" element={<><Navbar setSidebar={setSidebar} /><WatchLater /></>} />
//         <Route path="/subscriptions" element={<Subscriptions />} />


//         <Route path="/watch/:videoId" element={<><Navbar setSidebar={setSidebar} /><PlayVideo /></>} />






//         {/* New route for dynamic category content */}
//         <Route path="/category/:categoryId" element={<><Navbar setSidebar={setSidebar} /><CategoryRouteWrapper /></>} />
//       </Routes>
//     </>
//   );
// };

// export default App;


// correct correct final used
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useParams } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google'; // Import Google OAuth Provider

// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Video from './pages/Video/Video';
// import SearchResults from './pages/SearchResults/SearchResults';
// import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Settings from './pages/Settings/Settings';
// import Help from './pages/Help/Help';
// import NotificationsPage from './components/Notification/Notification';
// import Shorts from './components/Shots/Shorts';
// import LandingPage from './pages/LandingPage/LandingPage';
// import WatchVideos from './components/WatchVideos/WatchVideos';
// import UploadContent from './components/UploadContent/UploadContent';
// import ProfilePage from './components/ProfilePage/ProfilePage';
// import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
// import Profileshorts from './components/Profileshorts/Profileshorts';
// import CategoryDisplay from './components/CategoryDisplay/CategoryDisplay';
// import YouPage from './pages/YouPage/YouPage';
// import LikedVideos from './components/LikedVideos/LikedVideos';

// import YourVideos from './pages/Youpages/YourVideos';
// import Playlists from './pages/Youpages/Playlists';
// import WatchLater from './pages/WatchLater/WatchLater';
// import PlayVideo from './components/PlayVideo/PlayVideo';
// import Subscriptions from './components/Subscriptions/Subscriptions';
// // import UploadPage from './components/UploadPage';
// import MyUploads from './components/MyUploads/MyUploads';

// const CategoryRouteWrapper = () => {
//   const { categoryId } = useParams();
//   return <CategoryDisplay category={categoryId} />;
// };

// const App = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const [category, setCategory] = useState(0);
//   const [accessToken, setAccessToken] = useState(null); // State for accessToken
//   const [channelId, setChannelId] = useState(null); // State for channelId

//   useEffect(() => {
//     // Assuming you get the accessToken and channelId after login
//     const fetchUserData = async () => {
//       // Fetch access token and channelId from your auth context or Firebase
//       setAccessToken('your-access-token-here');
//       setChannelId('your-channel-id-here');
//     };
    
//     fetchUserData();
//   }, []);

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Routes>
//         <Route path="/" element={<LandingPage setCategory={setCategory} />} />
//         <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
//         <Route path="/shorts" element={<Shorts />} />
//         <Route path="/upload" element={<UploadContent />} />
//         <Route path="/Profile/*" element={<ProfilePage />} />
//         <Route path="/features" element={<FeaturesPage />} />
//         <Route path="/profileshorts" element={<Profileshorts />} />
//         <Route path="/watchvideos/:categoryId" element={<WatchVideos category={category} setCategory={setCategory} />} />
//         <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
//         <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
//         <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
//         <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
//         <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
//         <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
//         <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
//         <Route path="/uploadcontent" element={<><Navbar setSidebar={setSidebar} /><UploadContent /></>} />
//         {/* <Route path='/upload' element={<><Navbar setSidebar={setSidebar} /><UploadPage /></>} /> */}
//         <Route path="/notifications"
//           element={<><Navbar setSidebar={setSidebar} /><NotificationsPage accessToken={accessToken} channelId={channelId} /></>}
//         />

//         <Route path="/my-uploads" component={MyUploads} />
//         {/* <Route path="/you" element={<><Navbar setSidebar={setSidebar} /><YouPage /></>} /> */}
//         <Route path="/you" element={<><YouPage /></>} />
//         <Route path="/liked" element={<><Navbar setSidebar={setSidebar} /><LikedVideos /></>} />
//         <Route path="/your-videos" element={<><Navbar setSidebar={setSidebar} /><YourVideos /></>} />
//         <Route path="/playlists" element={<><Navbar setSidebar={setSidebar} /><Playlists /></>} />
//         <Route path="/watch-later" element={<><Navbar setSidebar={setSidebar} /><WatchLater /></>} />
//         <Route path="/subscriptions" element={<Subscriptions />} />
//         <Route path="/watch/:videoId" element={<><Navbar setSidebar={setSidebar} /><PlayVideo /></>} />
//         <Route path="/category/:categoryId" element={<><Navbar setSidebar={setSidebar} /><CategoryRouteWrapper /></>} />
//       </Routes>
//     </GoogleOAuthProvider>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import Google OAuth Provider

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SearchResults from './pages/SearchResults/SearchResults';
import SwitchAccount from './pages/SwitchAccount/SwitchAccount';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Settings from './pages/Settings/Settings';
import Help from './pages/Help/Help';
import NotificationsPage from './components/Notification/Notification';
import Shorts from './components/Shots/Shorts';
import LandingPage from './pages/LandingPage/LandingPage';
import WatchVideos from './components/WatchVideos/WatchVideos';
import UploadContent from './components/UploadContent/UploadContent';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import Profileshorts from './components/Profileshorts/Profileshorts';
import CategoryDisplay from './components/CategoryDisplay/CategoryDisplay';
import YouPage from './pages/YouPage/YouPage';
import LikedVideos from './components/LikedVideos/LikedVideos';
import YourVideos from './pages/Youpages/YourVideos';
import Playlists from './pages/Youpages/Playlists';
import WatchLater from './pages/WatchLater/WatchLater';
import PlayVideo from './components/PlayVideo/PlayVideo';
import Subscriptions from './components/Subscriptions/Subscriptions';
import MyUploads from './components/MyUploads/MyUploads';  // Make sure this import is correct

const CategoryRouteWrapper = () => {
  const { categoryId } = useParams();
  return <CategoryDisplay category={categoryId} />;
};

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);
  const [accessToken, setAccessToken] = useState(null); // State for accessToken
  const [channelId, setChannelId] = useState(null); // State for channelId

  useEffect(() => {
    // Assuming you get the accessToken and channelId after login
    const fetchUserData = async () => {
      // Fetch access token and channelId from your auth context or Firebase
      setAccessToken('your-access-token-here');
      setChannelId('your-channel-id-here');
    };
    
    fetchUserData();
  }, []);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Routes>
        <Route path="/" element={<LandingPage setCategory={setCategory} />} />
        <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/upload" element={<UploadContent />} />
        <Route path="/Profile/*" element={<ProfilePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/profileshorts" element={<Profileshorts />} />
        <Route path="/watchvideos/:categoryId" element={<WatchVideos category={category} setCategory={setCategory} />} />
        <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
        <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
        <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
        <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
        <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
        <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
        <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
        <Route path="/uploadcontent" element={<><Navbar setSidebar={setSidebar} /><UploadContent /></>} />
        <Route path="/notifications"
          element={<><Navbar setSidebar={setSidebar} /><NotificationsPage accessToken={accessToken} channelId={channelId} /></>}
        />
        <Route path="/my-uploads" element={<MyUploads />} /> {/* Updated here */}
        <Route path="/you" element={<><YouPage /></>} />
        <Route path="/liked" element={<><Navbar setSidebar={setSidebar} /><LikedVideos /></>} />
        <Route path="/your-videos" element={<><Navbar setSidebar={setSidebar} /><YourVideos /></>} />
        <Route path="/playlists" element={<><Navbar setSidebar={setSidebar} /><Playlists /></>} />
        <Route path="/watch-later" element={<><Navbar setSidebar={setSidebar} /><WatchLater /></>} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/watch/:videoId" element={<><Navbar setSidebar={setSidebar} /><PlayVideo /></>} />
        <Route path="/category/:categoryId" element={<><Navbar setSidebar={setSidebar} /><CategoryRouteWrapper /></>} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
