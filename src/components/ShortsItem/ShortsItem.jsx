// // // // // // // // src/components/ShortsItem.jsx
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import VideoPlayer from "../VideoPlayer/VideoPlayer";

// // // // // // // const ShortsItem = ({ video }) => {
// // // // // // //   const [isPlaying, setIsPlaying] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       const videoElement = document.getElementById(`video-${video.id}`);
// // // // // // //       const rect = videoElement.getBoundingClientRect();
// // // // // // //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
// // // // // // //         setIsPlaying(true);
// // // // // // //       } else {
// // // // // // //         setIsPlaying(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener("scroll", handleScroll);

// // // // // // //     return () => {
// // // // // // //       window.removeEventListener("scroll", handleScroll);
// // // // // // //     };
// // // // // // //   }, [video.id]);

// // // // // // //   return (
// // // // // // //     <div className="shorts-item">
// // // // // // //       <h3>{video.title}</h3>
// // // // // // //       <VideoPlayer isPlaying={isPlaying} videoUrl={video.videoUrl} id={video.id} />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ShortsItem;




// // // // // import React from 'react';
// // // // // import { value_conveter } from '../../data'; // Assuming you want to convert view count to M/K

// // // // // const ShortsItem = ({ video }) => {
// // // // //   // Log the video object to check its structure
// // // // //   console.log(video);

// // // // //   const videoId = video?.resourceId?.videoId;  // Safely access videoId
// // // // //   const title = video?.title || 'Untitled'; // Default title if not present
// // // // //   const viewCount = video?.viewCount || 0;  // Default view count if not present

// // // // //   // Check if videoId is available before rendering
// // // // //   if (!videoId) {
// // // // //     return <div>Error: Missing videoId</div>;
// // // // //   }

// // // // //   return (
// // // // //     <div className="shorts-item">
// // // // //       <video src={`https://www.youtube.com/watch?v=${videoId}`} controls />
// // // // //       <h3>{title}</h3>
// // // // //       <p>{value_conveter(viewCount)} Views</p>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ShortsItem;





// // // // import React from 'react';
// // // // import { value_conveter } from '../../data'; // Assuming you want to convert view count to M/K

// // // // const ShortsItem = ({ video }) => {
// // // //   // Log the video object to check its structure
// // // //   console.log(video);

// // // //   const videoId = video?.id?.videoId;  // Correct path to videoId based on the response structure
// // // //   const title = video?.snippet?.title || 'Untitled'; // Default title if not present
// // // //   const viewCount = video?.statistics?.viewCount || 0;  // Default view count if not present

// // // //   // Check if videoId is available before rendering
// // // //   if (!videoId) {
// // // //     return <div>Error: Missing videoId</div>;
// // // //   }

// // // //   return (
// // // //     <div className="shorts-item">
// // // //       <video src={`https://www.youtube.com/watch?v=${videoId}`} controls  />
      
// // // //       <h3>{title} </h3>
// // // //       <p>{value_conveter(viewCount)} Views</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ShortsItem;



// // // import React from 'react';
// // // import { value_conveter } from '../../data'; // Assuming you want to convert view count to M/K

// // // const ShortsItem = ({ video }) => {
// // //   // Log the video object to check its structure
// // //   console.log(video);

// // //   // Correctly access videoId from the id object
// // //   const videoId = video?.id?.videoId;
// // //   const title = video?.snippet?.title || 'Untitled'; // Default title if not present
// // //   const viewCount = video?.statistics?.viewCount || 0;  // Default view count if not present

// // //   // Check if videoId is available before rendering
// // //   if (!videoId) {
// // //     return <div>Error: Missing videoId</div>;
// // //   }

// // //   return (
// // //     <div className="shorts-item">
// // //       <video src={`https://www.youtube.com/watch?v=${videoId}`} controls />
// // //       <h3>{title}</h3>
// // //       <p>{value_conveter(viewCount)} Views</p>
// // //     </div>
// // //   );
// // // };

// // // export default ShortsItem;





// // import React from 'react';
// // import { value_conveter } from '../../data'; // Assuming you want to convert view count to M/K

// // const ShortsItem = ({ video }) => {
// //   const videoId = video?.id?.videoId; // Correct path to videoId based on the response structure
// //   const title = video?.snippet?.title || 'Untitled'; // Default title if not present
// //   const viewCount = video?.statistics?.viewCount || 0; // Default view count if not present
// //   const duration = video?.contentDetails?.duration || '0'; // Default duration if not present

// //   // Convert duration to a readable format if necessary (for example, PT1M15S to 1:15)
// //   const formattedDuration = duration ? duration.replace('PT', '').replace('M', ':').replace('S', '') : '0:00';

// //   if (!videoId) {
// //     return <div>Error: Missing videoId</div>;
// //   }

// //   return (
// //     <div className="shorts-item">
// //       <video src={`https://www.youtube.com/watch?v=${videoId}`} controls />
// //       <h3>{title}</h3>
// //       <p>{value_conveter(viewCount)} Views</p>
// //       <p>Duration: {formattedDuration}</p>
// //     </div>
// //   );
// // };

// // export default ShortsItem;




// import React from 'react';

// const ShortsItem = ({ video }) => {
//   const videoId = video.id.videoId;
//   const videoTitle = video.snippet.title;
//   const videoUrl = `https://www.youtube.com/embed/${videoId}`;

//   return (
//     <div className="short-item">
//       <h3>{videoTitle}</h3>
//       <iframe
//         width="100%"
//         height="315"
//         src={videoUrl}
//         frameBorder="0"
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title={videoTitle}
//       ></iframe>
//       <p>{video.snippet.description}</p>
//     </div>
//   );
// };

// export default ShortsItem;



// 2
// import React from 'react';
// import './ShortsItem.css';

// const ShortsItem = ({ video }) => {
//   return (
//     <div className="shorts-item">
//       {/* Embed YouTube Shorts using iframe */}
//       <iframe
//         src={`https://www.youtube.com/embed/${video.id.videoId}`}
//         title={video.snippet.title}
//         frameBorder="0"
//         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         className="shorts-video"
//       ></iframe>
//       <div className="shorts-info">
//         <h3>{video.snippet.title}</h3>
//         <p>{video.snippet.description}</p>
//         <div className="video-duration">{video.contentDetails.duration}</div>
//         <div className="video-views">{video.statistics.viewCount} Views</div>
//       </div>
//     </div>
//   );
// };

// export default ShortsItem;



import React from 'react';
import './ShortsItem.css';

const ShortsItem = ({ video }) => {
  return (
    <div className="shorts-item">
      {/* Embed YouTube Shorts using iframe */}
      <iframe
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="shorts-video"
      ></iframe>
      <div className="shorts-info">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
        <div className="video-duration">{video.contentDetails.duration}</div>
        <div className="video-views">{video.statistics.viewCount} Views</div>
      </div>
    </div>
  );
};

export default ShortsItem;
