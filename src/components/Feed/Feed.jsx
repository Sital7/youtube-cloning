// // // // import React, { useEffect, useState } from 'react'
// // // // import "./Feed.css"
// // // // import thumbnail1 from '../../assets/thumbnail1.png'
// // // // import thumbnail2 from '../../assets/thumbnail2.png'
// // // // import thumbnail3 from '../../assets/thumbnail3.png'
// // // // import thumbnail4 from '../../assets/thumbnail4.png'
// // // // import thumbnail5 from '../../assets/thumbnail5.png'
// // // // import thumbnail6 from '../../assets/thumbnail6.png'
// // // // import thumbnail7 from '../../assets/thumbnail7.png'
// // // // import thumbnail8 from '../../assets/thumbnail8.png'
// // // // import { Link } from 'react-router-dom'
// // // // import { API_KEY, value_conveter } from '../../data'

// // // // const Feed = (category) => {
// // // //     const [data,setData]= useState([]);

// // // //     const fetchData = async ()=>{
// // // //         const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`//AIzaSyAyXrd0YtYdmEozNz09DQMp-mZ9tujTXiA
// // // //         // {AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU}
// // // //         // await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
// // // //         const response = await fetch(videoList_url);
// // // //         const result = await response.json();
// // // //         setData(result.items || []);
// // // //     };

// // // //     useEffect(()=>{
// // // //         fetchData();
// // // //     },[category])


// // // //   return (
// // // //     <div className="feed">
// // // //         {data.map((item,index)=>{
// // // //             return(
// // // //         <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'key={index}>
// // // //             <img src={item.snippet.thumbnails.medium.url} alt="" />
// // // //             <h2>{item.snippet.title}</h2>
// // // //             <h3>{item.snippet.channelTitle}</h3>
// // // //             <p>{value_conveter(item.statistics.viewCount)} views &bull; 2 days ago </p>
// // // //         </Link>
// // // //             )
// // // //         })}
        







// // // //         {/* <div className='card'>
// // // //             <img src={thumbnail2} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail3} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail4} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail5} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail6} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail7} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail8} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>
// // // //         <div className='card'>
// // // //             <img src={thumbnail1} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail2} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail3} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail4} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail5} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail6} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail7} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div>

// // // //         <div className='card'>
// // // //             <img src={thumbnail8} alt="" />
// // // //             <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //             <h3>Greatstack</h3>
// // // //             <p>15k views &bull; 2days ago</p>
// // // //         </div> */}

// // // //     </div>
// // // //   )
// // // // }

// // // // export default Feed





// // // // // this is correct code 
// // // // import React from 'react';
// // // // import { useEffect,useState } from 'react';
// // // // import "./Feed.css";
// // // // import { Link } from 'react-router-dom';
// // // // import thumbnail1 from '../../assets/thumbnail1.png';  

// // // // const Feed = () => {  

// // // //     return (
// // // //         <div className='feed'>
// // // //             {Array.from({ length: 50 }).map((_, index) => (  
// // // //                 <Link key={index} to={`video/20/4521`} className='card'>
// // // //                     <img src={thumbnail1} alt="" />
// // // //                     <h2>Best channel to learn coding that help you to be a web developer</h2>
// // // //                     <h3>Greatstack</h3>
// // // //                     <p>15k views &bull; 2 days ago</p>
// // // //                 </Link>
// // // //             ))}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Feed;



// // // edit of second correct code i should use this
// // import React, { useEffect, useState } from 'react';
// // import "./Feed.css";
// // import { Link } from 'react-router-dom';
// // import moment from "moment";
// // import { API_KEY, value_conveter } from '../../data';
// // import ButtonList from '../ButtonList/ButtonList';


// // const Feed = ({ category = "0" }) => {  
// //     const [data, setData] = useState([]);
// //     const [loading, setLoading] = useState(true);
    
// //     const fetchData = async () => {
// //         try {
// //             const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            
// //             const response = await fetch(videoList_url);
// //             const result = await response.json();

// //             console.log("API Response:", result);

// //             if (result.items && result.items.length > 0) {
// //                 setData(result.items);
// //             } else {
// //                 console.log("No videos found.");
// //                 setData([]);
// //             }
// //         } catch (error) {
// //             console.error("Error fetching data:", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         console.log("Category:", category);
// //         fetchData();
// //     }, [category]);

// //     return (
// //         <div>
// //             <ButtonList />
// //         <div className='feed'>
// //             {loading ? <p>Loading...</p> : 
// //                 data.length === 0 ? <p>No videos found.</p> : 
// //                 data.map((item, index) => (
// //                     <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
// //                      {/* to={`/video/${item.id}`} className='card'> */}
// //                         <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
// //                         <h2>{item.snippet.title}</h2>
// //                         <h3>{item.snippet.channelTitle}</h3>
// //                         <p>{value_conveter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
// //                     </Link>
// //                 ))
// //             }
// //         </div>
// //         </div>
// //     );
// // };

// // export default Feed;




// // // import React, { useEffect, useState } from 'react';
// // // import "./Feed.css";
// // // import { Link } from 'react-router-dom';
// // // import moment from "moment";
// // // import { API_KEY, value_conveter } from '../../data';
// // // import ButtonList from '../ButtonList/ButtonList';

// // // const Feed = ({ category = "0" }) => {  
// // //     const [videoCategory, setVideoCategory] = useState("0");  // Renamed state variable
// // //     const [data, setData] = useState([]);
// // //     const [loading, setLoading] = useState(true);

// // //     const fetchData = async () => {
// // //         try {
// // //             const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${videoCategory}&key=${API_KEY}`;
            
// // //             const response = await fetch(videoList_url);
// // //             const result = await response.json();

// // //             console.log("API Response:", result);

// // //             if (result.items && result.items.length > 0) {
// // //                 setData(result.items);
// // //             } else {
// // //                 console.log("No videos found.");
// // //                 setData([]);
// // //             }
// // //         } catch (error) {
// // //             console.error("Error fetching data:", error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         console.log("Category:", videoCategory);
// // //         fetchData();
// // //     }, [videoCategory]);

// // //     return (
// // //         <div>
// // //             <ButtonList onCategoryChange={setVideoCategory} /> {/* Pass updated state function */}
// // //             <div className='feed'>
// // //                 {loading ? <p>Loading...</p> : 
// // //                     data.length === 0 ? <p>No videos found.</p> : 
// // //                     data.map((item, index) => (
// // //                         <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
// // //                             <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
// // //                             <h2>{item.snippet.title}</h2>
// // //                             <h3>{item.snippet.channelTitle}</h3>
// // //                             <p>{value_conveter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
// // //                         </Link>
// // //                     ))
// // //                 }
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Feed;











// // // 11
// // import React, { useEffect, useState } from 'react';
// // import "./Feed.css";
// // import { Link } from 'react-router-dom';
// // import moment from "moment";
// // import { API_KEY, value_conveter } from '../../data';
// // import ButtonList from '../ButtonList/ButtonList';

// // const Feed = () => {  
// //     const [category, setCategory] = useState("0");
// //     const [data, setData] = useState([]);
// //     const [loading, setLoading] = useState(true);
    
// //     const fetchData = async () => {
// //         try {
// //             setLoading(true);
// //             const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            
// //             const response = await fetch(videoList_url);
// //             const result = await response.json();

// //             if (result.items && result.items.length > 0) {
// //                 setData(result.items);
// //             } else {
// //                 setData([]);
// //             }
// //         } catch (error) {
// //             console.error("Error fetching data:", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchData();
// //     }, [category]);  // Fetch data when category changes

// //     return (
// //         <div>
// //             <ButtonList setCategory={setCategory} />
// //             <div className='feed'>
// //                 {loading ? <p>Loading...</p> : 
// //                     data.length === 0 ? <p>No videos found.</p> : 
// //                     data.map((item) => (
// //                         <Link key={item.id} to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
// //                             <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
// //                             <h2>{item.snippet.title}</h2>
// //                             <h3>{item.snippet.channelTitle}</h3>
// //                             <p>{value_conveter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
// //                         </Link>
// //                     ))
// //                 }
// //             </div>
// //         </div>
// //     );
// // };

// // export default Feed;





// import React, { useEffect, useState } from 'react';
// import "./Feed.css";
// import { Link } from 'react-router-dom';
// import moment from "moment";
// import { API_KEY, value_conveter } from '../../data';
// import ButtonList from '../ButtonList/ButtonList'; // Importing ButtonList

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
//     }, [category]);  // Fetch data when category changes

//     return (
//         <div>
//             {/* Ensure ButtonList is visible */}
//             <ButtonList setCategory={setCategory} />

//             <div className='feed'>
//                 {loading ? <p>Loading...</p> : 
//                     data.length === 0 ? <p>No videos found.</p> : 
//                     data.map((item) => (
//                         <Link key={item.id} to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
//                             <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
//                             <h2>{item.snippet.title}</h2>
//                             <h3>{item.snippet.channelTitle}</h3>
//                             <p>{value_conveter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
//                         </Link>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Feed;


// correct 123
import { useEffect, useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import moment from "moment";
import { API_KEY, value_conveter } from '../../data';
import ButtonList from '../ButtonList/ButtonList';

const Feed = ({ category, setCategory }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

            
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
    }, [category]);

    return (
        <div>
            <ButtonList setCategory={setCategory} /> 

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

export default Feed;
