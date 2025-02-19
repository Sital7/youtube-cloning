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
