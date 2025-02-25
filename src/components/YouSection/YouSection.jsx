import React from 'react';
import './YouSection.css'

const YouSection = () => {
  return (
    <div className="yt-paper-item" role="link" tabIndex="0" aria-disabled="false">
      <div className="yt-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            d="M18.37 19.709A9.98 9.98 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 003.63 7.709A9.96 9.96 0 0012 22a9.96 9.96 0 006.37-2.291ZM6.15 18.167a6.499 6.499 0 0111.7 0A8.47 8.47 0 0112 20.5a8.47 8.47 0 01-5.85-2.333ZM15.5 9.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <span className="yt-formatted-string">You</span>
      <div className="yt-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          aria-hidden="true"
        >
          <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
        </svg>
      </div>
      <span className="guide-entry-count"></span>
      <div className="guide-entry-badge"></div>
      <div id="newness-dot"></div>
    </div>
  );
};

export default YouSection;
