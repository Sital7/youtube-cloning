// // import React, { useEffect, useState } from 'react'
// // import "./Feed.css"
// // import thumbnail1 from '../../assets/thumbnail1.png'
// // import thumbnail2 from '../../assets/thumbnail2.png'
// // import thumbnail3 from '../../assets/thumbnail3.png'
// // import thumbnail4 from '../../assets/thumbnail4.png'
// // import thumbnail5 from '../../assets/thumbnail5.png'
// // import thumbnail6 from '../../assets/thumbnail6.png'
// // import thumbnail7 from '../../assets/thumbnail7.png'
// // import thumbnail8 from '../../assets/thumbnail8.png'
// // import { Link } from 'react-router-dom'
// // // import { API_KEY } from '../../data'

// // const Feed = (category) => {

// //     const [data, setData]= useState([]);

// //     const fetchData = async ()=>{
// //         const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${AIzaSyAyXrd0YtYdmEozNz09DQMp-mZ9tujTXiA}`
// //         // {AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU}
// //         await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
// //     }

// //     useEffect(()=>{
// //         fetchData();
// //     },[category])


// //   return (
// //     <div className='feed'>
// //         {data}
// //         <Link to={`video/20/4521`} className='card'>
// //             <img src={thumbnail1} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </Link>







// //         {/* <div className='card'>
// //             <img src={thumbnail2} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail3} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail4} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail5} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail6} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail7} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail8} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>
// //         <div className='card'>
// //             <img src={thumbnail1} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail2} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail3} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail4} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail5} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail6} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail7} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div>

// //         <div className='card'>
// //             <img src={thumbnail8} alt="" />
// //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// //             <h3>Greatstack</h3>
// //             <p>15k views &bull; 2days ago</p>
// //         </div> */}

// //     </div>
// //   )
// // }

// // export default Feed



// import React, { useEffect, useState } from 'react';
// import "./Feed.css";
// import { Link } from 'react-router-dom';

// const API_KEY = "AIzaSyAyXrd0YtYdmEozNz09DQMp-mZ9tujTXiA";

// const Feed = ({ category }) => {
//     const [data, setData] = useState([]);

//     const fetchData = async () => {
//         const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        
//         try {
//             const response = await fetch(videoList_url);
//             const result = await response.json();
//             setData(result.items || []); // Ensure it's an array
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [category]);

//     return (
//         <div className='feed'>
//             {data.length === 0 ? (
//                 <p>Loading...</p>
//             ) : (
//                 data.map((video) => (
//                     <Link key={video.id} to={`/video/${video.id}`} className='card'>
//                         <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//                         <h2>{video.snippet.title}</h2>
//                         <h3>{video.snippet.channelTitle}</h3>
//                         <p>{video.statistics.viewCount} views &bull; {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
//                     </Link>
//                 ))
//             )}
//         </div>
//     );
// };

// export default Feed;





// import React, { useEffect, useState } from 'react';
// import "./Feed.css";
// import { Link } from 'react-router-dom';
// import { API_KEY } from '../../data';

// const Feed = ({ category }) => {  // ✅ Fix destructuring

//     const [data, setData] = useState([]);

//     const fetchData = async () => {
//         try {
//             const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            
//             const response = await fetch(videoList_url);
//             const result = await response.json();

//             if (result.items) {
//                 setData(result.items);
//             } else {
//                 setData([]);
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [category]);

//     return (
//         <div className='feed'>
//             {data.length === 0 ? <p>Loading...</p> : data.map((item, index) => (
//                 <Link key={index} to={`/video/${item.id}`} className='card'>
//                     <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
//                     <h2>{item.snippet.title}</h2>
//                     <h3>{item.snippet.channelTitle}</h3>
//                     <p>{item.statistics.viewCount} views &bull; {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default Feed;




import React from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import thumbnail1 from '../../assets/thumbnail1.png';  

const Feed = () => {  
    return (
        <div className='feed'>
            {Array.from({ length: 50 }).map((_, index) => (  
                <Link key={index} to={`video/20/4521`} className='card'>
                    <img src={thumbnail1} alt="" />
                    <h2>Best channel to learn coding that help you to be a web developer</h2>
                    <h3>Greatstack</h3>
                    <p>15k views &bull; 2 days ago</p>
                </Link>
            ))}
        </div>
    );
};

export default Feed;
