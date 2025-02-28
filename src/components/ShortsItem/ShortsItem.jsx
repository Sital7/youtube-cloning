
// import React from 'react';
// // import './ShortsItem.css';
// import Like from '../../assets/like.png';
// import DisLike from '../../assets/dislike.png';
// import Share from '../../assets/share.png';
// import Comment from '../../assets/comment.png';
// import Views from '../../assets/views.png';

// const formatCount = (num) => {
//   if (!num) return 'N/A';
//   return num >= 1000000
//     ? (num / 1000000).toFixed(1) + 'M'
//     : num >= 1000
//     ? (num / 1000).toFixed(1) + 'K'
//     : num;
// };

// const formatDuration = (duration) => {
//   if (!duration) return 'Unknown Duration';
//   const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
//   const hours = match[1] ? `${match[1]}:` : '';
//   const minutes = match[2] ? `${match[2]}`.padStart(2, '0') : '00';
//   const seconds = match[3] ? `${match[3]}`.padStart(2, '0') : '00';
//   return `${hours}${minutes}:${seconds}`;
// };

// const ShortsItem = ({ video }) => {
//   const handleShare = () => {
//     const shareUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
//     if (navigator.share) {
//       navigator.share({
//         title: video.snippet.title,
//         url: shareUrl,
//       }).catch((error) => console.error('Error sharing', error));
//     } else {
//       alert(`Share this link: ${shareUrl}`);
//     }
//   };

//   return (
//     <div className="shorts-item">
//       {/* Video with title overlay */}
//       <div className="shorts-video-container">
//         <iframe
//           src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1`}
//           title={video.snippet.title}
//           frameBorder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="shorts-video"
//         ></iframe>

//         {/* Title inside video */}
//         <div className="video-title-overlay">
//           {video.snippet.title}
//         </div>
//       </div>

//       {/* Video details section */}
//       <div className="video-details">
//         {/* <span className="video-duration">⏳ {formatDuration(video.contentDetails.duration)}</span> */}
//         <span className="video-views"><img src={Views} alt="Views" /> {formatCount(video.statistics.viewCount)} </span>
//         <span className="video-likes"><img src={Like} alt="Like" /> {formatCount(video.statistics.likeCount)} </span>
//         <span className="video-dislikes"><img src={DisLike} alt="Dislike" /> {formatCount(video.statistics.dislikeCount)} </span>
//         <span className="video-comments"><img src={Comment} alt="Comment" /> {formatCount(video.statistics.commentCount)} </span>

//         <button className="video-share" onClick={handleShare}>
//           <img src={Share} alt="Share" /> Share
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShortsItem;

import React from 'react';
// import './ShortsItem.css';
import Like from '../../assets/like.png';
import DisLike from '../../assets/dislike.png';
import Share from '../../assets/share.png';
import Comment from '../../assets/comment.png';
import Views from '../../assets/views.png';

const formatCount = (num) => {
  if (!num) return 'N/A';
  return num >= 1000000
    ? (num / 1000000).toFixed(1) + 'M'
    : num >= 1000
    ? (num / 1000).toFixed(1) + 'K'
    : num;
};

const formatDuration = (duration) => {
  if (!duration) return 'Unknown Duration';
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  const hours = match[1] ? `${match[1]}:` : '';
  const minutes = match[2] ? `${match[2]}`.padStart(2, '0') : '00';
  const seconds = match[3] ? `${match[3]}`.padStart(2, '0') : '00';
  return `${hours}${minutes}:${seconds}`;
};

const ShortsItem = ({ video }) => {
  const handleShare = () => {
    const shareUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    if (navigator.share) {
      navigator.share({
        title: video.snippet.title,
        url: shareUrl,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      alert(`Share this link: ${shareUrl}`);
    }
  };

  return (
    <div className="shorts-item">
      {/* Video with title overlay */}
      <div className="shorts-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="shorts-video"
        ></iframe>

        {/* Title inside video */}
        <div className="video-title-overlay">
          {video.snippet.title}
        </div>
      </div>

      {/* Video details section */}
      <div className="video-details">
        {/* <span className="video-duration">⏳ {formatDuration(video.contentDetails.duration)}</span> */}
        <span className="video-views"><img src={Views} alt="Views" /> {formatCount(video.statistics.viewCount)} </span>
        <span className="video-likes"><img src={Like} alt="Like" /> {formatCount(video.statistics.likeCount)} </span>
        <span className="video-dislikes"><img src={DisLike} alt="Dislike" /> {formatCount(video.statistics.dislikeCount)} </span>
        <span className="video-comments"><img src={Comment} alt="Comment" /> {formatCount(video.statistics.commentCount)} </span>

        <button className="video-share" onClick={handleShare}>
          <img src={Share} alt="Share" /> Share
        </button>
      </div>
    </div>
  );
};

export default ShortsItem;
