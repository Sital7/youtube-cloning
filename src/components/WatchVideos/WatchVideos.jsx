// import React, { useEffect, useState } from 'react';
// import "./WatchVideos.css";
// import { Link } from 'react-router-dom';
// import moment from "moment";
// import { API_KEY, value_conveter } from '../../data';

// const Feed = ({ category, setCategory }) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     const fetchData = async () => {
//         try {
//             setLoading(true);
//             const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

            
//             const response = await fetch(videoList_url);
//             const result = await response.json();

//             if (result.items && result.items.length > 0) {
//                 setData(result.items);
//             } else {
//                 setData([]);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [category]);

//     return (
//         <div>

//             <div className='feed'>
//                 {loading ? <p>Loading...</p> : 
//                     data.length === 0 ? <p>No videos found.</p> : 
//                     data.map((item) => (
//                         <Link key={item.id} to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
//                             <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
//                             <h2>{item.snippet.title}</h2>
//                             <h3>{item.snippet.channelTitle}</h3>
//                             <p>{value_conveter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}</p>
//                         </Link>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Feed;






import React, { useEffect, useState } from 'react';
import "./WatchVideos.css";
import { Link, useParams } from 'react-router-dom';
import moment from "moment";
import { API_KEY, value_conveter } from '../../data';

const WatchVideos = ({ category, setCategory }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();  // Get categoryId from URL

  const fetchData = async () => {
    try {
      setLoading(true);
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

      const response = await fetch(videoList_url);
      const result = await response.json();

      if (result.items && result.items.length > 0) {
        setData(result.items);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);  // Ensure to fetch data when categoryId changes

  return (
    <div>
      <div className='feed'>
        {loading ? <p>Loading...</p> :
          data.length === 0 ? <p>No videos found.</p> :
            data.map((item) => (
              <Link key={item.id} to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_conveter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}</p>
              </Link>
            ))
        }
      </div>
    </div>
  );
};

export default WatchVideos;

