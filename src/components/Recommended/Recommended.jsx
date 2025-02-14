// import React, { useEffect, useState } from 'react'
// import './Recommended.css'
// import thumbnail1 from '../../assets/thumbnail1.png'
// import thumbnail2 from '../../assets/thumbnail2.png'
// import thumbnail3 from '../../assets/thumbnail3.png'
// import thumbnail4 from '../../assets/thumbnail4.png'
// import thumbnail5 from '../../assets/thumbnail5.png'
// import thumbnail6 from '../../assets/thumbnail6.png'
// import thumbnail7 from '../../assets/thumbnail7.png'
// import thumbnail8 from '../../assets/thumbnail8.png'
// import { API_KEY } from '../../data'



//       <div className="side-video-list">
//         <img src={thumbnail8} alt="" />
//         <div className="vid-info">
//             <h4>Best channel that help you to be a web develpper</h4>
//             <p>GreatStack</p>
//             <p>199k Views</p>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default Recommended





import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_conveter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
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
    <div className="recommended">
      {apiData.length > 0 ? (
        apiData.map((item, index) => (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_conveter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default Recommended;
