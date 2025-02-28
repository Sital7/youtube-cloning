// import React, { useEffect, useState } from 'react';
// import './Recommended1.css';
// import { API_KEY, value_conveter } from '../../data';
// import { Link } from 'react-router-dom';

// const Recommended1 = ({ categoryId }) => {
//   const [apiData, setApiData] = useState([]);

//   const fetchData = async () => {
//     try {
//       let allVideos = [];
//       let nextPageToken = "";
//       let fetchCount = 0;

//       // Fetch videos in multiple pages
//       while (fetchCount < 2) {
//         const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}&pageToken=${nextPageToken}`;
        
//         const response = await fetch(relatedVideo_url);
//         const data = await response.json();

//         if (data.items) {
//           allVideos = [...allVideos, ...data.items];
//         }
        
//         if (data.nextPageToken) {
//           nextPageToken = data.nextPageToken;
//         } else {
//           break;
//         }

//         fetchCount++;
//       }

//       setApiData(allVideos.slice(0, 45)); // Display exactly 45 videos
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setApiData([]);
//     }
//   };

//   useEffect(() => {
//     if (categoryId) {
//       fetchData();
//     }
//   }, [categoryId]);

//   return (
//     <div className="recommended">
//       {apiData.length > 0 ? (
//         <div className="side-video-list-container">
//           {apiData.map((item, index) => (
//             <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
//               <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
//               <div className="vid-info">
//                 <h4>{item.snippet.title}</h4>
//                 <p>{item.snippet.channelTitle}</p>
//                 <p>{value_conveter(item.statistics.viewCount)} Views</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <p>Loading videos...</p>
//       )}
//     </div>
//   );
// };

// export default Recommended1;



import React, { useEffect, useState } from 'react';
import './Recommended1.css';
import { API_KEY, value_conveter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended1 = ({ categoryId, layout }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      let allVideos = [];
      let nextPageToken = "";
      let fetchCount = 0;

      while (fetchCount < 2) {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}&pageToken=${nextPageToken}`;
        
        const response = await fetch(relatedVideo_url);
        const data = await response.json();

        if (data.items) {
          allVideos = [...allVideos, ...data.items];
        }
        
        if (data.nextPageToken) {
          nextPageToken = data.nextPageToken;
        } else {
          break;
        }

        fetchCount++;
      }

      setApiData(allVideos.slice(0, 45)); // Display exactly 45 videos
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiData([]);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  return (
    <div className={`recommended-container ${layout === 'horizontal' ? 'horizontal' : ''}`}>
      <div className="recommended">
        {apiData.length > 0 ? (
          <div className={`side-video-list-container ${layout === 'horizontal' ? 'horizontal' : ''}`}>
            {apiData.map((item, index) => (
              <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                <div className="vid-info">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <p>{value_conveter(item.statistics.viewCount)} Views</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
};

export default Recommended1;
