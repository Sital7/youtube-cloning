// import React, { useState, useEffect, useRef } from 'react';
// import { API_KEY } from '../../data';
// import ShortsItem from '../ShortsItem/ShortsItem';
// import './Shorts.css';
// import Navbar from '../Navbar/Navbar';
// import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// import styles from './ShortsPage.module.css';


// const Shorts = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const videoRefs = useRef([]);
//   const containerRef = useRef(null);

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
//     return <div className="loading">Loading Shorts...</div>;
//   }

//   return (
//     <div><Navbar />
//     <ProfileSidebar />
//     <div className="shorts-container" ref={containerRef}>
//       {videos.length > 0 ? (
//         videos.map((video, index) => (
//           <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="shorts-item">
//             <ShortsItem video={video} />
//           </div>
//         ))
//       ) : (
//         <p className="no-shorts">No Shorts videos found</p>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Shorts;



// import React, { useState, useEffect, useRef } from 'react';
// import { API_KEY } from '../../data';
// import ShortsItem from '../ShortsItem/ShortsItem';
// import './Shorts.css';
// import Navbar from '../Navbar/Navbar';
// import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// import styles from './ShortsPage.module.css';

// const Shorts = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState('shorts'); // initialize category for sidebar logic
//   const videoRefs = useRef([]);
//   const containerRef = useRef(null);

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
//     return <div className="loading">Loading Shorts...</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <ProfileSidebar sidebar={true} category={category} setCategory={setCategory} />
//       <div className="shorts-container" ref={containerRef} style={{ marginLeft: '240px' }}>
//         {videos.length > 0 ? (
//           videos.map((video, index) => (
//             <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="shorts-item">
//               <ShortsItem video={video} />
//             </div>
//           ))
//         ) : (
//           <p className="no-shorts">No Shorts videos found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shorts;




import React, { useState, useEffect, useRef } from 'react';
import { API_KEY } from '../../data';
import ShortsItem from '../ShortsItem/ShortsItem';
import './Shorts.css';
import Navbar from '../Navbar/Navbar';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import Subscriptions from '../Subscriptions/Subscriptions';
import YouPage from '../../pages/YouPage/YouPage';
import { Home } from 'lucide-react';

const Shorts = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('shorts'); // Default category is 'shorts'
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  const convertDurationToSeconds = (duration) => {
    const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
    const minutes = parseInt(match?.[1] || 0, 10);
    const seconds = parseInt(match?.[2] || 0, 10);
    return minutes * 60 + seconds;
  };

  useEffect(() => {
    // Fetch Shorts videos when category is 'shorts'
    if (category === 'shorts') {
      const fetchShortsVideos = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${API_KEY}`
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

          const filteredVideos = detailedVideos.filter((video) => {
            const duration = video.contentDetails?.duration || '';
            const durationInSeconds = convertDurationToSeconds(duration);
            return durationInSeconds >= 15 && durationInSeconds <= 60;
          });

          setVideos(filteredVideos);
        } catch (error) {
          console.error('Error fetching Shorts videos:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchShortsVideos();
    }
  }, [category]); // Refetch when category changes

  return (
    <div>
      <Navbar />
      <ProfileSidebar sidebar={true} category={category} setCategory={setCategory} />

      <div className="shorts-container" ref={containerRef} style={{ marginLeft: '240px' }}>
        {loading ? (
          <div className="loading">Loading Shorts...</div>
        ) : category === 'shorts' && videos.length > 0 ? (
          videos.map((video, index) => (
            <div key={video.id.videoId} ref={(el) => (videoRefs.current[index] = el)} className="shorts-item">
              <ShortsItem video={video} />
            </div>
          ))
        ) : category === 'shorts' ? (
          <p className="no-shorts">No Shorts videos found</p>
        ) : category === 'subscriptions' ? (
          <div style={{ color: '#fff', fontSize: '20px' }}><Subscriptions /> </div>
        ) : category === 'you' ? (
          <div style={{ color: '#fff', fontSize: '20px' }}><YouPage /> </div>
        ) : category === 'home' ? (
          <div style={{ color: '#fff', fontSize: '20px' }}><Home /> </div>
        ) : (
          <div style={{ color: '#fff', fontSize: '20px' }}>No category selected</div>
        )}
      </div>
    </div>
  );
};

export default Shorts;
