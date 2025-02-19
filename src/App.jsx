// // correct
// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Video from './pages/Video/Video';
// import SearchResults from './pages/SearchResults/SearchResults'; // Import SearchResults Page

// const App = () => {
//   const [sidebar, setSidebar] = useState(true);

//   return (
//     <div>
//       <Navbar setSidebar={setSidebar} />
//       <Routes>
//         <Route path="/" element={<Home sidebar={sidebar} />} />
//         <Route path="/video/:categoryId/:videoId" element={<Video />} />
//         <Route path="/search" element={<SearchResults />} /> 
//       </Routes>
//     </div>
//   );
// };

// export default App;



// correct
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SearchResults from './pages/SearchResults/SearchResults'; // Import SearchResults Page
import SwitchAccount from './pages/SwitchAccount/SwitchAccount'; // Import SwitchAccount Page
import Login from './pages/Login/Login'; // Import Login Page
import SignUp from './pages/SignUp/SignUp'; // Import SignUp Page
import Settings from './pages/Settings/Settings'; // Import Settings Page
import Help from './pages/Help/Help'; // Import Help Page

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search" element={<SearchResults />} /> {/* Search Page */}
        <Route path="/switch-account" element={<SwitchAccount />} /> {/* Switch Account Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up Page */}
        <Route path="/settings" element={<Settings />} /> {/* Settings Page */}
        <Route path="/help" element={<Help />} /> {/* Help Page */}
      </Routes>
    </div>
  );
};

export default App;
