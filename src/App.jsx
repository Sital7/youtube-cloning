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





import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Shorts from './components/Shots/Shorts'; // Ensure proper import of Shorts component

import LandingPage from './pages/LandingPage/LandingPage';
import WatchVideos from './components/WatchVideos/WatchVideos';
import UploadContent from './components/UploadContent/UploadContent';
import Profile from './pages/Profile/Profile';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0); // Manage category state globally

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage setCategory={setCategory} />} />
        <Route path="/home" element={<><Navbar setSidebar={setSidebar} /><Home sidebar={sidebar} /></>} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/upload" element={<UploadContent />} />
        <Route path="/watchvideos/:categoryId" element={<WatchVideos category={category} setCategory={setCategory} />} />
        <Route path="/video/:categoryId/:videoId" element={<><Navbar setSidebar={setSidebar} /><Video /></>} />
        <Route path="/search" element={<><Navbar setSidebar={setSidebar} /><SearchResults /></>} />
        <Route path="/switch-account" element={<><Navbar setSidebar={setSidebar} /><SwitchAccount /></>} />
        <Route path="/login" element={<><Navbar setSidebar={setSidebar} /><Login /></>} />
        <Route path="/signup" element={<><Navbar setSidebar={setSidebar} /><SignUp /></>} />
        <Route path="/profile" element={<><Navbar setSidebar={setSidebar} /><Profile /></>} />
        <Route path="/settings" element={<><Navbar setSidebar={setSidebar} /><Settings /></>} />
        <Route path="/help" element={<><Navbar setSidebar={setSidebar} /><Help /></>} />
        <Route path="/uploadcontent" element={<><Navbar setSidebar={setSidebar} /><UploadContent /></>} />
        <Route path="/notifications" element={<><Navbar setSidebar={setSidebar} /><NotificationsPage /></>} />
      </Routes>
    </>
  );
};

export default App;
