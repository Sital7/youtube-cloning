// // correct
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SearchResults from './pages/SearchResults/SearchResults'; // Import SearchResults Page

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search" element={<SearchResults />} /> {/* Search Page */}
      </Routes>
    </div>
  );
};

export default App;




// // wrong
// import React from 'react'
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Video from './pages/Video/Video';
// import SearchResults from './pages/SearchResults/SearchResults';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import Settings from './pages/Settings/Settings';
// import Help from './pages/Help/Help';
// import React, { useState } from 'react';



// const App = () => {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       <Navbar setSidebar={setSidebar} />
//       <Routes>
//          <Route path="/" element={<Home sidebar={sidebar} />} />
//          <Route path="/video/:categoryId/:videoId" element={<Video />} />
//          <Route path="/search" element={<SearchResults />} /> 

//          <Route path="/" element={<Home />} />
//            <Route path="/login" element={<Login />} />
//            <Route path="/signup" element={<SignUp />} />
//            <Route path="/settings" element={<Settings />} />
//            <Route path="/help" element={<Help />} />
//        </Routes>
//     </div>
//   )
// }

// export default App
