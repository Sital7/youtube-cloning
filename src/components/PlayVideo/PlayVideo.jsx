// import React, { useEffect, useState } from 'react'
// import './PlayVideo.css'
// import Video1 from '../../assets/video.mp4'
// import like from '../../assets/like.png'
// import dislike from '../../assets/dislike.png'
// import share from '../../assets/share.png'
// import save from '../../assets/save.png'
// import jack from '../../assets/jack.png'
// import user_profile from '../../assets/user_profile.jpg'
// import { data } from 'react-router-dom'
// import { value_conveter } from '../../data'
// import moment from 'moment'

// const PlayVideo = ({videoId}) => {

//     const [apiData, setApiData] = useState(null);

//     const fetchVideoData = async () =>{
//         //fetching videos data
//         const videoDetails_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%Cstatistics&id=${videoId}&key=${API_KEY}`;
//         await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
//     }
//     console.log(apiData,"this is from api")

//     useEffect(()=>{
//         fetchVideoData();
//     },[])

//   return (
//     <div className='play-video'>
//     <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//      {/* <video src={Video1} controls autoPlay muted></video> */}
//      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
//      <div className='play-video-info'>
//         {/* <p>{apiData?apiData.statistics.viewCount:"16K"} Views &bull; 2 days ago</p> */}
//         <p>{apiData?value_conveter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>

//         <div>
//             <span> <img src={like} alt="" /> 125</span>
//             <span> <img src={dislike} alt="" /> 2</span>
//             <span> <img src={share} alt="" /> Share</span>
//             <span> <img src={save} alt="" /> Save</span>
//         </div>

//      </div>
//      <hr />

//      <div className='publisher'>
//         <img src={jack} alt="" />
//         <div>
//             <p>GreatStack</p>
//             <span>1M Subscriber</span>
//         </div>
//         <button>Subscribe</button>
//      </div>
//      <div className='vid-description'>
//         <p>Channel that make learning Easy</p>
//         <p>Subscriber GreatStack to watch more tutorials on web Development</p>
//         <hr />
//         <h4>130 Comments</h4>
//         <div className="comment">
//             <img src={user_profile} alt="" />
//             <div>
//                 <h3>Jack Nicholson <span>1 day ago</span></h3>
//                 <p>A global computer network providing a variety of information and class of 
//                     onterconnected networks using standarized communication protocols. </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//             </div>
//         </div>

//         <div className="comment">
//             <img src={user_profile} alt="" />
//             <div>
//                 <h3>Jack Nicholson <span>1 day ago</span></h3>
//                 <p>A global computer network providing a variety of information and class of 
//                     onterconnected networks using standarized communication protocols. </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//             </div>
//         </div>

//         <div className="comment">
//             <img src={user_profile} alt="" />
//             <div>
//                 <h3>Jack Nicholson <span>1 day ago</span></h3>
//                 <p>A global computer network providing a variety of information and class of 
//                     onterconnected networks using standarized communication protocols. </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//             </div>
//         </div>
//         <div className="comment">
//             <img src={user_profile} alt="" />
//             <div>
//                 <h3>Jack Nicholson <span>1 day ago</span></h3>
//                 <p>A global computer network providing a variety of information and class of 
//                     onterconnected networks using standarized communication protocols. </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//             </div>
//         </div>
//         <div className="comment">
//             <img src={user_profile} alt="" />
//             <div>
//                 <h3>Jack Nicholson <span>1 day ago</span></h3>
//                 <p>A global computer network providing a variety of information and class of 
//                     onterconnected networks using standarized communication protocols. </p>
//                     <div className="comment-action">
//                         <img src={like} alt="" />
//                         <span>244</span>
//                         <img src={dislike} alt="" />
//                     </div>
//             </div>
//         </div>
//      </div>
//     </div>
//   )
// }

// export default PlayVideo






import Video1 from '../../assets/video.mp4'

import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { value_conveter } from '../../data';
import moment from 'moment';
import { API_KEY } from '../../data';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // this three line is for description read more button
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };


    // this is for
    const [channelData,setChannelData] = useState(null);


    const fetchVideoData = async () => {
        try {
            const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videoDetails_url);
            if (!response.ok) {
                throw new Error('Failed to fetch video data');
            }
            const data = await response.json();
            console.log("API Response:", data); // Debugging: Log API response
            if (data.items && data.items.length > 0) {
                setApiData(data.items[0]);
            } else {
                throw new Error('No video data found');
            }
        } catch (error) {
            console.error("Error fetching video data:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };



    const fetcOtherData = async ()=>{
        // fetching channeldata
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(()=>{
        fetcOtherData();
    },[apiData]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className='play-video-info'>
                <p>
                    {apiData ? value_conveter(apiData.statistics.viewCount) : "16K"} Views &bull;{' '}
                    {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
                </p>
                <div>
                    <span> <img src={like} alt="" /> {apiData ? value_conveter(apiData.statistics.likeCount) : "125"}</span>
                    <span> <img src={dislike} alt="" /> 2</span>
                    <span> <img src={share} alt="" /> Share</span>
                    <span> <img src={save} alt="" /> Save</span>
                </div>
            </div>

            <hr />
            
        <div className='publisher'>
                <img src={jack} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                {/* <p>{apiData ? apiData.snippet.description.slice(0,250) : "Description Here"}</p> */}

                 {/* this <p> tag and below is for description read more button */}

                <p>
                {apiData ? (
                    showFullDescription 
                        ? apiData.snippet.description 
                        : apiData.snippet.description.slice(0, 250) + "..."
                ) : "Description Here"}
            </p>
            
            {/* Show "Read More" or "Show Less" based on the toggle state */}
            {apiData && apiData.snippet.description.length > 250 && (
                <button onClick={toggleDescription} className="read-more-btn">
                    {showFullDescription ? "Show Less" : "Read More"}
                </button>
            )}
                <hr />
                <h4>{apiData?value_conveter(apiData.statistics.commentCount):102} Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and class of 
                            onterconnected networks using standarized communication protocols. </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                    </div>
                </div>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and class of 
                            onterconnected networks using standarized communication protocols. </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                    </div>
                </div>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and class of 
                            onterconnected networks using standarized communication protocols. </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and class of 
                            onterconnected networks using standarized communication protocols. </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>A global computer network providing a variety of information and class of 
                            onterconnected networks using standarized communication protocols. </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlayVideo;