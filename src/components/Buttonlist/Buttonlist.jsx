//correct
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ButtonList.css"; 

const buttonList = [
  "All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs",
  "Trending", "Programming", "News", "Technology", "Cricket",
  "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"
];

const ButtonList = ({ onCategoryChange }) => {
  const [active, setActive] = useState("All");

  const handleCategoryClick = (category) => {
    if (active !== category) {
      setActive(category);
      onCategoryChange?.(category); 
    }
  };

  return (
    <div className="button-list-container">
      {buttonList.map((buttonName) => (
        <button
          key={buttonName} 
          onClick={() => handleCategoryClick(buttonName)}
          className={`button-list-button ${active === buttonName ? "active-button" : ""}`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

ButtonList.propTypes = {
  onCategoryChange: PropTypes.func, 
};

export default ButtonList;
