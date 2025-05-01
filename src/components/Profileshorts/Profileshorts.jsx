// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { API_KEY } from '../../data';
// // // import Like from '../../assets/like.png';
// // // import DisLike from '../../assets/dislike.png';
// // // import Share from '../../assets/share.png';
// // // import Comment from '../../assets/comment.png';
// // // import Views from '../../assets/views.png';
// // // import './Profileshorts.css';

// // // const Profileshorts = () => {
// // //   const [videos, setVideos] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const videoRefs = useRef([]);
// // //   const containerRef = useRef(null);

// // //   const convertDurationToSeconds = (duration) => {
// // //     const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
// // //     const minutes = parseInt(match?.[1] || 0, 10);
// // //     const seconds = parseInt(match?.[2] || 0, 10);
// // //     return minutes * 60 + seconds;
// // //   };

// // //   useEffect(() => {
// // //     const fetchShortsVideos = async () => {
// // //       try {
// // //         const response = await fetch(
// // //           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${API_KEY}`
// // //         );

// // //         if (!response.ok) throw new Error(`Error: ${response.statusText}`);

// // //         const data = await response.json();
// // //         const videoIds = data.items.map((item) => item.id.videoId);

// // //         const videoDetailsResponse = await fetch(
// // //           `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
// // //         );

// // //         if (!videoDetailsResponse.ok) throw new Error(`Error: ${videoDetailsResponse.statusText}`);

// // //         const videoDetailsData = await videoDetailsResponse.json();

// // //         const detailedVideos = data.items.map((item) => {
// // //           const details = videoDetailsData.items.find((video) => video.id === item.id.videoId);
// // //           return {
// // //             ...item,
// // //             statistics: details?.statistics || {},
// // //             contentDetails: details?.contentDetails || {},
// // //           };
// // //         });

// // //         const filteredVideos = detailedVideos.filter((video) => {
// // //           const duration = video.contentDetails?.duration || '';
// // //           const durationInSeconds = convertDurationToSeconds(duration);
// // //           return durationInSeconds >= 15 && durationInSeconds <= 60;
// // //         });

// // //         setVideos(filteredVideos);
// // //       } catch (error) {
// // //         console.error('Error fetching Shorts videos:', error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchShortsVideos();
// // //   }, []);

// // //   if (loading) {
// // //     return <div className="loading">Loading Shorts...</div>;
// // //   }

// // //   const formatCount = (num) => {
// // //     if (!num) return 'N/A';
// // //     return num >= 1000000
// // //       ? (num / 1000000).toFixed(1) + 'M'
// // //       : num >= 1000
// // //       ? (num / 1000).toFixed(1) + 'K'
// // //       : num;
// // //   };

// // //   const formatDuration = (duration) => {
// // //     if (!duration) return 'Unknown Duration';
// // //     const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
// // //     const hours = match[1] ? `${match[1]}:` : '';
// // //     const minutes = match[2] ? `${match[2]}`.padStart(2, '0') : '00';
// // //     const seconds = match[3] ? `${match[3]}`.padStart(2, '0') : '00';
// // //     return `${hours}${minutes}:${seconds}`;
// // //   };

// // //   const handleShare = (videoId, title) => {
// // //     const shareUrl = `https://www.youtube.com/watch?v=${videoId}`;
// // //     if (navigator.share) {
// // //       navigator.share({
// // //         title: title,
// // //         url: shareUrl,
// // //       }).catch((error) => console.error('Error sharing', error));
// // //     } else {
// // //       alert(`Share this link: ${shareUrl}`);
// // //     }
// // //   };

// // //   return (
// // //     <div className="shorts-container" ref={containerRef}>
// // //       {videos.length > 0 ? (
// // //         videos.map((video, index) => (
// // //           <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="shorts-item">
// // //             <div className="shorts-video-container">
// // //               <iframe
// // //                 src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1`}
// // //                 title={video.snippet.title}
// // //                 frameBorder="0"
// // //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// // //                 allowFullScreen
// // //                 className="shorts-video"
// // //               ></iframe>
// // //               <div className="video-title-overlay">
// // //                 {video.snippet.title}
// // //               </div>
// // //             </div>

// // //             <div className="video-details">
// // //               <span className="video-views">
// // //                 <img src={Views} alt="Views" /> {formatCount(video.statistics.viewCount)}
// // //               </span>
// // //               <span className="video-likes">
// // //                 <img src={Like} alt="Like" /> {formatCount(video.statistics.likeCount)}
// // //               </span>
// // //               <span className="video-dislikes">
// // //                 <img src={DisLike} alt="Dislike" /> {formatCount(video.statistics.dislikeCount)}
// // //               </span>
// // //               <span className="video-comments">
// // //                 <img src={Comment} alt="Comment" /> {formatCount(video.statistics.commentCount)}
// // //               </span>
// // //               <button className="video-share" onClick={() => handleShare(video.id.videoId, video.snippet.title)}>
// // //                 <img src={Share} alt="Share" /> Share
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p className="no-shorts">No Shorts videos found</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Profileshorts;















// // import React, { useState, useEffect, useRef } from 'react';
// // import { API_KEY } from '../../data';
// // import './Profileshorts.css';

// // const Profileshorts = () => {
// //   const [videos, setVideos] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const videoRefs = useRef([]);

// //   const convertDurationToSeconds = (duration) => {
// //     const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
// //     const minutes = parseInt(match?.[1] || 0, 10);
// //     const seconds = parseInt(match?.[2] || 0, 10);
// //     return minutes * 60 + seconds;
// //   };

// //   useEffect(() => {
// //     const fetchShortsVideos = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${API_KEY}`
// //         );

// //         if (!response.ok) throw new Error(`Error: ${response.statusText}`);

// //         const data = await response.json();
// //         const videoIds = data.items.map((item) => item.id.videoId);

// //         const videoDetailsResponse = await fetch(
// //           `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
// //         );

// //         if (!videoDetailsResponse.ok) throw new Error(`Error: ${videoDetailsResponse.statusText}`);

// //         const videoDetailsData = await videoDetailsResponse.json();

// //         const detailedVideos = data.items.map((item) => {
// //           const details = videoDetailsData.items.find((video) => video.id === item.id.videoId);
// //           return {
// //             ...item,
// //             statistics: details?.statistics || {},
// //             contentDetails: details?.contentDetails || {},
// //           };
// //         });

// //         const filteredVideos = detailedVideos.filter((video) => {
// //           const duration = video.contentDetails?.duration || '';
// //           const durationInSeconds = convertDurationToSeconds(duration);
// //           return durationInSeconds >= 15 && durationInSeconds <= 60;
// //         });

// //         setVideos(filteredVideos);
// //       } catch (error) {
// //         console.error('Error fetching Shorts videos:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchShortsVideos();
// //   }, []);

// //   if (loading) {
// //     return <div className="loading">Loading Shorts...</div>;
// //   }

// //   return (
// //     <div className="shorts-container">
// //       {videos.length > 0 ? (
// //         videos.map((video, index) => (
// //           <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="shorts-item">
// //             <div className="shorts-video-container">
// //               <iframe
// //                 src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1`}
// //                 title={video.snippet.title}
// //                 frameBorder="0"
// //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// //                 allowFullScreen
// //                 className="shorts-video"
// //               ></iframe>
// //               <div className="video-title-overlay">{video.snippet.title}</div>
// //             </div>
// //           </div>
// //         ))
// //       ) : (
// //         <p className="no-shorts">No Shorts videos found</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profileshorts;



// // import React, { useState, useEffect, useRef } from 'react';
// // import { API_KEY } from '../../data';
// // import './Profileshorts.css';

// // const Profileshorts = () => {
// //   const [videos, setVideos] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const videoRefs = useRef([]);

// //   const convertDurationToSeconds = (duration) => {
// //     const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
// //     const minutes = parseInt(match?.[1] || 0, 10);
// //     const seconds = parseInt(match?.[2] || 0, 10);
// //     return minutes * 60 + seconds;
// //   };

// //   useEffect(() => {
// //     const fetchShortsVideos = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${API_KEY}`
// //         );

// //         if (!response.ok) throw new Error(`Error: ${response.statusText}`);

// //         const data = await response.json();
// //         const videoIds = data.items.map((item) => item.id.videoId);

// //         const videoDetailsResponse = await fetch(
// //           `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
// //         );

// //         if (!videoDetailsResponse.ok) throw new Error(`Error: ${videoDetailsResponse.statusText}`);

// //         const videoDetailsData = await videoDetailsResponse.json();

// //         const detailedVideos = data.items.map((item) => {
// //           const details = videoDetailsData.items.find((video) => video.id === item.id.videoId);
// //           return {
// //             ...item,
// //             statistics: details?.statistics || {},
// //             contentDetails: details?.contentDetails || {},
// //           };
// //         });

// //         const filteredVideos = detailedVideos.filter((video) => {
// //           const duration = video.contentDetails?.duration || '';
// //           const durationInSeconds = convertDurationToSeconds(duration);
// //           return durationInSeconds >= 15 && durationInSeconds <= 60;
// //         });

// //         setVideos(filteredVideos);
// //       } catch (error) {
// //         console.error('Error fetching Shorts videos:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchShortsVideos();
// //   }, []);

// //   if (loading) {
// //     return <div className="loading">Loading Shorts...</div>;
// //   }

// //   return (
// //     <div className="shorts-container">
// //       {videos.length > 0 ? (
// //         videos.map((video, index) => (
// //           <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="shorts-item">
// //             <div className="shorts-video-container">
// //               <iframe
// //                 src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1`}
// //                 title={video.snippet.title}
// //                 frameBorder="0"
// //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// //                 allowFullScreen
// //                 className="shorts-video"
// //               ></iframe>
// //               <div className="video-title-overlay">{video.snippet.title}</div>
// //             </div>
// //           </div>
// //         ))
// //       ) : (
// //         <p className="no-shorts">No Shorts videos found</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profileshorts;





// import React, { useState, useEffect, useRef } from 'react';
// import { API_KEY } from '../../data';
// import './Profileshorts.css';

// const Profileshorts = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const videoRefs = useRef([]);

//   const convertDurationToSeconds = (duration) => {
//     const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
//     const minutes = parseInt(match?.[1] || 0, 10);
//     const seconds = parseInt(match?.[2] || 0, 10);
//     return minutes * 60 + seconds;
//   };

//   useEffect(() => {
//     const fetchShortsVideos = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${API_KEY}`
//         );

//         if (!response.ok) throw new Error(`Error: ${response.statusText}`);

//         const data = await response.json();
//         const videoIds = data.items.map((item) => item.id.videoId);

//         const videoDetailsResponse = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
//         );

//         if (!videoDetailsResponse.ok) throw new Error(`Error: ${videoDetailsResponse.statusText}`);

//         const videoDetailsData = await videoDetailsResponse.json();

//         const detailedVideos = data.items.map((item) => {
//           const details = videoDetailsData.items.find((video) => video.id === item.id.videoId);
//           return {
//             ...item,
//             statistics: details?.statistics || {},
//             contentDetails: details?.contentDetails || {},
//           };
//         });

//         const filteredVideos = detailedVideos.filter((video) => {
//           const duration = video.contentDetails?.duration || '';
//           const durationInSeconds = convertDurationToSeconds(duration);
//           return durationInSeconds >= 15 && durationInSeconds <= 60;
//         });

//         setVideos(filteredVideos);
//       } catch (error) {
//         console.error('Error fetching Shorts videos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShortsVideos();
//   }, []);

//   if (loading) {
//     return <div className="profileshorts-page-loading">Loading Shorts...</div>;
//   }

//   return (
//     <div className="profileshorts-page">
//       <div className="profileshorts-container">
//         {videos.length > 0 ? (
//           videos.map((video, index) => (
//             <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="profileshorts-item">
//               <div className="profileshorts-video-container">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1`}
//                   title={video.snippet.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="profileshorts-video"
//                 ></iframe>
//                 <div className="profileshorts-title-overlay">{video.snippet.title}</div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="profileshorts-no-videos">No Shorts videos found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profileshorts;




import React, { useState, useEffect, useRef } from 'react';
import { API_KEY } from '../../data';
import './Profileshorts.css';

const Profileshorts = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  const fetchShortsVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoDuration=short&key=${API_KEY}`
      );

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const data = await response.json();
      const videoIds = data.items.map((item) => item.id.videoId);

      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoIds.join(',')}&key=${API_KEY}`
      );

      if (!videoDetailsResponse.ok) throw new Error(`Error: ${videoDetailsResponse.statusText}`);

      const videoDetailsData = await videoDetailsResponse.json();

      const detailedVideos = data.items.map((item) => {
        const details = videoDetailsData.items.find((video) => video.id === item.id.videoId);
        return {
          ...item,
          statistics: details?.statistics || {},
          contentDetails: details?.contentDetails || {},
        };
      });

      setVideos(detailedVideos);
    } catch (error) {
      console.error('Error fetching Shorts videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShortsVideos();
  }, []);

  if (loading) {
    return <div className="profileshorts-loading">Loading Shorts...</div>;
  }

  return (
    <div className="profileshorts-container">
      <div ref={scrollContainerRef} className="profileshorts-list">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={video.id.videoId} className="profileshorts-item">
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="profileshorts-video"
              ></iframe>
              <div className="profileshorts-title">{video.snippet.title}</div>
            </div>
          ))
        ) : (
          <p className="profileshorts-no-videos">No Shorts videos found</p>
        )}
      </div>
    </div>
  );
};

export default Profileshorts;
