import React from 'react';
import { FaPlayCircle, FaSearch, FaVideo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './FeaturesPage.css';

const FeaturesPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="features-page">
      <h2>Features of VidTube</h2>
      <p>Explore the exciting features of VidTube, your go-to video streaming platform.</p>
      
      <div className="feature-list">
        <div className="feature-card" onClick={() => handleCardClick("/watchvideos/10")}>
          <FaPlayCircle className="icon" />
          <h3>Watch Videos</h3>
          <p>Stream a wide variety of videos across genres and categories.</p>
        </div>
        <div className="feature-card" onClick={() => handleCardClick("/search")}>
          <FaSearch className="icon" />
          <h3>Smart Search</h3>
          <p>Find your favorite videos easily with our smart search feature.</p>
        </div>
        <div className="feature-card" onClick={() => handleCardClick("/upload")}>
          <FaVideo className="icon" />
          <h3>Upload Content</h3>
          <p>Share your creative videos with the world by uploading them to VidTube.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
