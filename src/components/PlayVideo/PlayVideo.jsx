// // import Video1 from '../../assets/video.mp4'

// // import React, { useEffect, useState } from 'react';
// // import './PlayVideo.css';
// // import like from '../../assets/like.png';
// // import dislike from '../../assets/dislike.png';
// // import share from '../../assets/share.png';
// // import save from '../../assets/save.png';
// // import jack from '../../assets/jack.png';
// // import user_profile from '../../assets/user_profile.jpg';
// // import { value_conveter } from '../../data';
// // import moment from 'moment';
// // import { API_KEY } from '../../data';

// // const PlayVideo = ({ videoId }) => {
// //     const [apiData, setApiData] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     // this three line is for description read more button
// //     const [showFullDescription, setShowFullDescription] = useState(false);

// //     const toggleDescription = () => {
// //         setShowFullDescription(!showFullDescription);
// //     };


// //     // this is for
// //     const [channelData,setChannelData] = useState(null);


// //     const fetchVideoData = async () => {
// //         try {
// //             const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
// //             const response = await fetch(videoDetails_url);
// //             if (!response.ok) {
// //                 throw new Error('Failed to fetch video data');
// //             }
// //             const data = await response.json();
// //             console.log("API Response:", data); // Debugging: Log API response
// //             if (data.items && data.items.length > 0) {
// //                 setApiData(data.items[0]);
// //             } else {
// //                 throw new Error('No video data found');
// //             }
// //         } catch (error) {
// //             console.error("Error fetching video data:", error);
// //             setError(error.message);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };



// //     const fetcOtherData = async ()=>{
// //         // fetching channeldata
// //         const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
// //         await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items))
// //     }

// //     useEffect(() => {
// //         fetchVideoData();
// //     }, [videoId]);

// //     useEffect(()=>{
// //         fetcOtherData();
// //     },[apiData]);


// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }
    
// //     return (
// //         <div className='play-video'>
// //             <iframe
// //                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
// //                 frameBorder="0"
// //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //                 referrerPolicy="strict-origin-when-cross-origin"
// //                 allowFullScreen></iframe>

// //             <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
// //             <div className='play-video-info'>
// //                 <p>
// //                     {apiData ? value_conveter(apiData.statistics.viewCount) : "16K"} Views &bull;{' '}
// //                     {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
// //                 </p>
// //                 <div>
// //                     <span> <img src={like} alt="" /> {apiData ? value_conveter(apiData.statistics.likeCount) : "125"}</span>
// //                     <span> <img src={dislike} alt="" /> 2</span>
// //                     <span> <img src={share} alt="" /> Share</span>
// //                     <span> <img src={save} alt="" /> Save</span>
// //                 </div>
// //             </div>

// //             <hr />
            
// //         <div className='publisher'>
// //                 <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
// //                 <div>
// //                     <p>{apiData?apiData.snippet.channelTitle:""}</p>
// //                     <span>1M Subscriber</span>
// //                 </div>
// //                 <button>Subscribe</button>
// //             </div>
// //             <div className='vid-description'>
// //                 {/* <p>{apiData ? apiData.snippet.description.slice(0,250) : "Description Here"}</p> */}

// //                  {/* this <p> tag and below is for description read more button */}

// //                 <p>
// //                 {apiData ? (
// //                     showFullDescription 
// //                         ? apiData.snippet.description 
// //                         : apiData.snippet.description.slice(0, 250) + "..."
// //                 ) : "Description Here"}
// //             </p>
            
// //             {/* Show "Read More" or "Show Less" based on the toggle state */}
// //             {apiData && apiData.snippet.description.length > 250 && (
// //                 <button onClick={toggleDescription} className="read-more-btn">
// //                     {showFullDescription ? "Show Less" : "Read More"}
// //                 </button>
// //             )}
// //                 <hr />
// //                 <h4>{apiData?value_conveter(apiData.statistics.commentCount):102} Comments</h4>
// //                 <div className="comment">
// //                     <img src={user_profile} alt="" />
// //                     <div>
// //                         <h3>Jack Nicholson <span>1 day ago</span></h3>
// //                         <p>A global computer network providing a variety of information and class of 
// //                             onterconnected networks using standarized communication protocols. </p>
// //                             <div className="comment-action">
// //                                 <img src={like} alt="" />
// //                                 <span>244</span>
// //                                 <img src={dislike} alt="" />
// //                             </div>
// //                     </div>
// //                 </div>

// //                 <div className="comment">
// //                     <img src={user_profile} alt="" />
// //                     <div>
// //                         <h3>Jack Nicholson <span>1 day ago</span></h3>
// //                         <p>A global computer network providing a variety of information and class of 
// //                             onterconnected networks using standarized communication protocols. </p>
// //                             <div className="comment-action">
// //                                 <img src={like} alt="" />
// //                                 <span>244</span>
// //                                 <img src={dislike} alt="" />
// //                             </div>
// //                     </div>
// //                 </div>

// //                 <div className="comment">
// //                     <img src={user_profile} alt="" />
// //                     <div>
// //                         <h3>Jack Nicholson <span>1 day ago</span></h3>
// //                         <p>A global computer network providing a variety of information and class of 
// //                             onterconnected networks using standarized communication protocols. </p>
// //                             <div className="comment-action">
// //                                 <img src={like} alt="" />
// //                                 <span>244</span>
// //                                 <img src={dislike} alt="" />
// //                             </div>
// //                     </div>
// //                 </div>
// //                 <div className="comment">
// //                     <img src={user_profile} alt="" />
// //                     <div>
// //                         <h3>Jack Nicholson <span>1 day ago</span></h3>
// //                         <p>A global computer network providing a variety of information and class of 
// //                             onterconnected networks using standarized communication protocols. </p>
// //                             <div className="comment-action">
// //                                 <img src={like} alt="" />
// //                                 <span>244</span>
// //                                 <img src={dislike} alt="" />
// //                             </div>
// //                     </div>
// //                 </div>
// //                 <div className="comment">
// //                     <img src={user_profile} alt="" />
// //                     <div>
// //                         <h3>Jack Nicholson <span>1 day ago</span></h3>
// //                         <p>A global computer network providing a variety of information and class of 
// //                             onterconnected networks using standarized communication protocols. </p>
// //                             <div className="comment-action">
// //                                 <img src={like} alt="" />
// //                                 <span>244</span>
// //                                 <img src={dislike} alt="" />
// //                             </div>
// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default PlayVideo;



// import React, { useEffect, useState } from 'react';
// import './PlayVideo.css';
// import like from '../../assets/like.png';
// import dislike from '../../assets/dislike.png';
// import share from '../../assets/share.png';
// import save from '../../assets/save.png';
// import user_profile from '../../assets/user_profile.jpg';
// import { value_conveter } from '../../data';
// import moment from 'moment';
// import { API_KEY } from '../../data';

// const PlayVideo = ({ videoId }) => {
//     const [apiData, setApiData] = useState(null);
//     const [channelData, setChannelData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showFullDescription, setShowFullDescription] = useState(false);

//     const [ commentData,setCommentData ] = useState([]);

//     const toggleDescription = () => {
//         setShowFullDescription(!showFullDescription);
//     };

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
//                 const response = await fetch(videoDetails_url);
//                 if (!response.ok) throw new Error('Failed to fetch video data');
//                 const data = await response.json();
//                 if (data.items.length > 0) {
//                     setApiData(data.items[0]);
//                     console.log("Video Data:", data.items[0]); 
//                 } else {
//                     throw new Error('No video data found');
//                 }
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchVideoData();
//     }, [videoId]);

//     useEffect(() => {
//         const fetchChannelData = async () => {
//             if (!apiData) return;
//             try {
//                 const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
//                 const response = await fetch(channelData_url);
//                 if (!response.ok) throw new Error('Failed to fetch channel data');
//                 const data = await response.json();
//                 if (data.items.length > 0) {
//                     setChannelData(data.items[0]);
//                     console.log("Channel Data:", data.items[0]); 
//                 }
//             } catch (error) {
//                 console.error('Error fetching channel data:', error);
//             }
//         };

//         fetchChannelData();
//     }, [apiData]);

//     //fetching comment Data
//     const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
//     await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className='play-video'>
//             <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen  
//                 title="YouTube video player"
//             ></iframe>

//             <h3>{apiData.snippet.title}</h3>
//             <div className='play-video-info'>
//                 <p>{value_conveter(apiData.statistics.viewCount)} Views • {moment(apiData.snippet.publishedAt).fromNow()}</p>
//                 <div>
//                     <span><img src={like} alt='' /> {value_conveter(apiData.statistics.likeCount)}</span>
//                     <span><img src={dislike} alt='' /> Dislike</span>
//                     <span><img src={share} alt='' /> Share</span>
//                     <span><img src={save} alt='' /> Save</span>
//                 </div>
//             </div>

//             <hr />
//             <div className='publisher'>
//                 <img src={channelData?.snippet.thumbnails.default.url} alt='Channel' />
//                 <div>
//                     {/* this is better 1st p tag */}
//                     {/* <p>{channelData?.snippet.title}</p> */}
//                     <p>{apiData?apiData.snippet.channelTitle:""}</p>
//                     <span>{value_conveter(channelData?channelData.statistics.subscriberCount:"1M")} Subscribers</span>
//                 </div>
//                 <button>Subscribe</button>
//             </div>

//             <div className='vid-description'>
//                 <p>{showFullDescription ? apiData.snippet.description : `${apiData.snippet.description.slice(0, 250)}...`}</p>
//                 {apiData.snippet.description.length > 250 && (
//                     <button onClick={toggleDescription} className='read-more-btn'>
//                         {showFullDescription ? 'Show Less' : 'Read More'}
//                     </button>
//                 )}
//             </div>

            
//             <h4>{apiData?value_conveter(apiData.statistics.commentCount):102} Comments</h4>
//                             <div className="comment">
//                                 <img src={user_profile} alt="" />
//                                 <div>
//                                     <h3>Jack Nicholson <span>1 day ago</span></h3>
//                                     <p>A global computer network providing a variety of information and class of 
//                                         onterconnected networks using standarized communication protocols. </p>
//                                         <div className="comment-action">
//                                             <img src={like} alt="" />
//                                             <span>244</span>
//                                             <img src={dislike} alt="" />
//                                         </div>
//                                 </div>
//                             </div>

                            



            
//         </div>
//     );
// };

// export default PlayVideo;









// // correct code
// import React, { useEffect, useState } from 'react';
// import './PlayVideo.css';
// import like from '../../assets/like.png';
// import dislike from '../../assets/dislike.png';
// import share from '../../assets/share.png';
// import save from '../../assets/save.png';
// import user_profile from '../../assets/user_profile.jpg';
// import { value_conveter } from '../../data';
// import moment from 'moment';
// import { API_KEY } from '../../data';

// const PlayVideo = ({ videoId }) => {
//     const [apiData, setApiData] = useState(null);
//     const [channelData, setChannelData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showFullDescription, setShowFullDescription] = useState(false);
//     const [commentData, setCommentData] = useState([]);

//     const toggleDescription = () => {
//         setShowFullDescription(!showFullDescription);
//     };

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
//                 const response = await fetch(videoDetails_url);
//                 if (!response.ok) throw new Error('Failed to fetch video data');
//                 const data = await response.json();
//                 if (data.items.length > 0) {
//                     setApiData(data.items[0]);
//                     console.log("Video Data:", data.items[0]); 
//                 } else {
//                     throw new Error('No video data found');
//                 }
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchVideoData();
//     }, [videoId]);

//     useEffect(() => {
//         const fetchChannelData = async () => {
//             if (!apiData) return;
//             try {
//                 const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
//                 const response = await fetch(channelData_url);
//                 if (!response.ok) throw new Error('Failed to fetch channel data');
//                 const data = await response.json();
//                 if (data.items.length > 0) {
//                     setChannelData(data.items[0]);
//                     console.log("Channel Data:", data.items[0]); 
//                 }
//             } catch (error) {
//                 console.error('Error fetching channel data:', error);
//             }
//         };

//         fetchChannelData();
//     }, [apiData]);

//     useEffect(() => {
//         const fetchCommentData = async () => {
//             try {
//                 const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
//                 const response = await fetch(comment_url);
//                 const data = await response.json();
//                 setCommentData(data.items);
//             } catch (error) {
//                 console.error('Error fetching comment data:', error);
//             }
//         };

//         fetchCommentData();
//     }, [videoId]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className='play-video'>
//             <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen  
//                 title="YouTube video player"
//             ></iframe>

//             <h3>{apiData.snippet.title}</h3>
//             <div className='play-video-info'>
//                 <p>{value_conveter(apiData.statistics.viewCount)} Views • {moment(apiData.snippet.publishedAt).fromNow()}</p>
//                 <div>
//                     <span><img src={like} alt='' /> {value_conveter(apiData.statistics.likeCount)}</span>
//                     <span><img src={dislike} alt='' /> Dislike</span>
//                     <span><img src={share} alt='' /> Share</span>
//                     <span><img src={save} alt='' /> Save</span>
//                 </div>
//             </div>

//             <hr />
//             <div className='publisher'>
//                 <img src={channelData?.snippet.thumbnails.default.url} alt='Channel' />
//                 <div>
//                     <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
//                     <span>{value_conveter(channelData ? channelData.statistics.subscriberCount : "1M")} Subscribers</span>
//                 </div>
//                 <button>Subscribe</button>
//             </div>

//             <div className='vid-description'>
//                 <p>{showFullDescription ? apiData.snippet.description : `${apiData.snippet.description.slice(0, 250)}...`}</p>
//                 {apiData.snippet.description.length > 250 && (
//                     <button onClick={toggleDescription} className='read-more-btn'>
//                         {showFullDescription ? 'Show Less' : 'Read More'}
//                     </button>
//                 )}
//             </div>
//             {/* <hr /> */}

//             <h4>{apiData ? value_conveter(apiData.statistics.commentCount) : 102} Comments</h4>
//             {commentData.map((item,index)=>{

//                 return(
//                     <div className="comment" key={index}>
//                     <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
//                     <div>
//                         <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
//                         <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>{value_conveter(item.snippet.topLevelComment.snippet.likeCount)}</span>
//                             <img src={dislike} alt="" />
//                         </div>
//                     </div>
//                 </div>

//                 )
//             })}
//             {/* {commentData.map((comment, index) => (
//                 <div className="comment" key={index}>
//                     <img src={user_profile} alt="" />
//                     <div>
//                         <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
//                         <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
//                         <div className="comment-action">
//                             <img src={like} alt="" />
//                             <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
//                             <img src={dislike} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             ))} */}
//         </div>
//     );
// };

// export default PlayVideo;




import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import { value_conveter } from '../../data';
import moment from 'moment';
import { API_KEY } from '../../data';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [commentData, setCommentData] = useState([]);
    const [newComment, setNewComment] = useState('');

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Fetch Video Data
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`;
                const response = await fetch(videoDetails_url);
                if (!response.ok) throw new Error('Failed to fetch video data');
                const data = await response.json();
                if (data.items.length > 0) {
                    setApiData(data.items[0]);
                    console.log("Video Data:", data.items[0]); 
                } else {
                    throw new Error('No video data found');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideoData();
    }, [videoId]);

    // Fetch Channel Data
    useEffect(() => {
        const fetchChannelData = async () => {
            if (!apiData) return;
            try {
                const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
                const response = await fetch(channelData_url);
                if (!response.ok) throw new Error('Failed to fetch channel data');
                const data = await response.json();
                if (data.items.length > 0) {
                    setChannelData(data.items[0]);
                    console.log("Channel Data:", data.items[0]); 
                }
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        };

        fetchChannelData();
    }, [apiData]);

    // Fetch Comments
    useEffect(() => {
        const fetchCommentData = async () => {
            try {
                const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
                const response = await fetch(comment_url);
                const data = await response.json();
                setCommentData(data.items);
            } catch (error) {
                console.error('Error fetching comment data:', error);
            }
        };

        fetchCommentData();
    }, [videoId]);

    const handleLike = (commentId, currentLikeCount) => {
        // Update the like count for the comment
        setCommentData((prev) =>
            prev.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          snippet: {
                              ...comment.snippet,
                              topLevelComment: {
                                  ...comment.snippet.topLevelComment,
                                  snippet: {
                                      ...comment.snippet.topLevelComment.snippet,
                                      likeCount: currentLikeCount + 1, // Increase like count
                                  },
                              },
                          },
                      }
                    : comment
            )
        );
    };

    const handleDislike = (commentId, currentDislikeCount) => {
        // Update the dislike count for the comment
        setCommentData((prev) =>
            prev.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          snippet: {
                              ...comment.snippet,
                              topLevelComment: {
                                  ...comment.snippet.topLevelComment,
                                  snippet: {
                                      ...comment.snippet.topLevelComment.snippet,
                                      dislikeCount: currentDislikeCount + 1, // Increase dislike count
                                  },
                              },
                          },
                      }
                    : comment
            )
        );
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        const newCommentData = {
            id: Date.now(), // Unique ID based on time
            snippet: {
                topLevelComment: {
                    snippet: {
                        authorDisplayName: "You",
                        textDisplay: newComment,
                        likeCount: 0,
                        dislikeCount: 0,
                        publishedAt: new Date().toISOString(),
                    },
                },
            },
        };
        setCommentData([...commentData, newCommentData]);
        setNewComment(''); // Clear the input field
    };

    const handleReply = (commentId) => {
        // Set the reply input visibility
        setCommentData((prev) =>
            prev.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          showReplyInput: !comment.showReplyInput, // Toggle reply input visibility
                      }
                    : comment
            )
        );
    };

    const handleAddReply = (commentId, replyText) => {
        setCommentData((prev) =>
            prev.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          snippet: {
                              ...comment.snippet,
                              topLevelComment: {
                                  ...comment.snippet.topLevelComment,
                                  replies: [
                                      ...comment.snippet.topLevelComment.replies,
                                      {
                                          authorDisplayName: "You",
                                          textDisplay: replyText,
                                          likeCount: 0,
                                          dislikeCount: 0,
                                          publishedAt: new Date().toISOString(),
                                      },
                                  ],
                              },
                          },
                          showReplyInput: false, // Hide the reply input after posting
                      }
                    : comment
            )
        );
    };

    const handleCancelReply = (commentId) => {
        setCommentData((prev) =>
            prev.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          showReplyInput: false, // Hide the reply input on cancel
                      }
                    : comment
            )
        );
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  
                title="YouTube video player"
            ></iframe>

            <h3>{apiData.snippet.title}</h3>
            <div className='play-video-info'>
                <p>{value_conveter(apiData.statistics.viewCount)} Views • {moment(apiData.snippet.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={like} alt='' /> {value_conveter(apiData.statistics.likeCount)}</span>
                    <span><img src={dislike} alt='' /> Dislike</span>
                    <span><img src={share} alt='' /> Share</span>
                    <span><img src={save} alt='' /> Save</span>
                </div>
            </div>

            <hr />
            <div className='publisher'>
                <img src={channelData?.snippet.thumbnails.default.url} alt='Channel' />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>{value_conveter(channelData ? channelData.statistics.subscriberCount : "1M")} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className='vid-description'>
                <p>{showFullDescription ? apiData.snippet.description : `${apiData.snippet.description.slice(0, 250)}...`}</p>
                {apiData.snippet.description.length > 250 && (
                    <button onClick={toggleDescription} className='read-more-btn'>
                        {showFullDescription ? 'Show Less' : 'Read More'}
                    </button>
                )}
            </div>

            <h4>{apiData ? value_conveter(apiData.statistics.commentCount) : 102} Comments</h4>
            <div className="comment-form">
                <input 
                    type="text" 
                    placeholder="Add a public comment..." 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                />
                <button onClick={handleAddComment}>Post Comment</button>
            </div>
            {commentData.map((item, index) => {
                const { snippet } = item;
                const likeCount = snippet.topLevelComment.snippet.likeCount || 0;
                const dislikeCount = snippet.topLevelComment.snippet.dislikeCount || 0;

                return (
                    <div className="comment" key={index}>
                        <img src={snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img 
                                    src={like} 
                                    alt="Like" 
                                    onClick={() => handleLike(item.id, likeCount)} 
                                />
                                <span>{value_conveter(likeCount)}</span>
                                <img 
                                    src={dislike} 
                                    alt="Dislike" 
                                    onClick={() => handleDislike(item.id, dislikeCount)} 
                                />
                                <span>{value_conveter(dislikeCount)}</span>
                            </div>
                            
                            <button className='reply' onClick={() => handleReply(item.id)}>Reply</button>

                            {item.showReplyInput && (
                                <div className="reply-input">
                                    <input 
                                        type="text" 
                                        placeholder="Write a reply..." 
                                        onChange={(e) => setNewComment(e.target.value)} 
                                    />
                                    {/* <button onClick={() => handleAddReply(item.id, newComment)}>Post Reply</button>
                                    <button onClick={() => handleCancelReply(item.id)}>Cancel</button> */}
                                    <div className="post-cancel-buttons">
                                    <button onClick={() => handleAddReply(item.id, newComment)}>Post Reply</button>
                                    <button onClick={() => handleCancelReply(item.id)}>Cancel</button>
                                    </div>
                                </div>
                            )}

                            <div className="replies">
                                {item.snippet.topLevelComment.replies?.map((reply, index) => (
                                    <div key={index} className="reply">
                                        <p><strong>{reply.authorDisplayName}</strong> {reply.textDisplay}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PlayVideo;
