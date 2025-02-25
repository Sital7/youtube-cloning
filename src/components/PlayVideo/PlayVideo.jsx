import  { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
// import user_profile from '../../assets/user_profile.jpg';
import { value_conveter } from '../../data';
import moment from 'moment';
import { API_KEY } from '../../data';
import { useParams } from 'react-router-dom';


const PlayVideo = () => {
    const { videoId } = useParams();
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
                const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=31&videoId=${videoId}&key=${API_KEY}`;
                const response = await fetch(comment_url);
                const data = await response.json();
                setCommentData(data.items);
            } catch (error) {
                console.error('Error fetching comment data:', error);
            }
        };

        fetchCommentData();
    }, [videoId]);

    const handleLike = (commentId, currentLikeCount, liked) => {
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
                                      likeCount: liked ? currentLikeCount - 1 : currentLikeCount + 1,
                                  },
                              },
                          },
                      }
                    : comment
            )
        );
    };

    const handleDislike = (commentId, currentDislikeCount, disliked) => {
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
                                      dislikeCount: disliked ? currentDislikeCount - 1 : currentDislikeCount + 1,
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
            id: Date.now(),
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
        setNewComment('');
    };

    const handleReply = (commentId) => {
        setCommentData((prev) =>
            prev.map((comment) =>
                comment.id === commentId
                    ? {
                          ...comment,
                          showReplyInput: !comment.showReplyInput,
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
                          showReplyInput: false,
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
                          showReplyInput: false,
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
                    {/* <span><img src={dislike} alt='' /> {value_conveter(apiData.statistics.dislikeCount)}</span> */}
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
                                    className="like-dislike-btn"
                                    onClick={() => handleLike(item.id, likeCount, item.snippet.topLevelComment.snippet.likeCount > 0)}
                                />
                                <span>{value_conveter(likeCount)}</span>
                                <img
                                    src={dislike}
                                    alt="Dislike"
                                    className="like-dislike-btn"
                                    onClick={() => handleDislike(item.id, dislikeCount, item.snippet.topLevelComment.snippet.dislikeCount > 0)}
                                />
                                <span>{value_conveter(dislikeCount)}</span>
                            </div>

                            <button className='reply' onClick={() => handleReply(item.id)}>Reply</button>

                            {item.showReplyInput && (
                                <div className="reply-input">
                                    <input type="text" placeholder="Write a reply..." onChange={(e) => setNewComment(e.target.value)} />
                                    {/* <button onClick={() => handleAddReply(item.id, newComment)}>Post</button>
                                    <button onClick={() => handleCancelReply(item.id)}>Cancel</button> */}

                                <div className="post-cancel-buttons">
                                    <button onClick={() => handleAddReply(item.id, newComment)}>Post Reply</button>
                                    <button onClick={() => handleCancelReply(item.id)}>Cancel</button>
                                    </div>

                                </div>
                            )}
                            <div className="replies">
                                {item.snippet.topLevelComment.replies && item.snippet.topLevelComment.replies.map((reply, i) => (
                                    <div key={i} className="reply">
                                        <p>{reply.authorDisplayName} - {reply.textDisplay}</p>
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






// import React, { useEffect, useState } from 'react';
// import './PlayVideo.css';
// import likeIcon from '../../assets/like.png';
// import dislikeIcon from '../../assets/dislike.png';
// import shareIcon from '../../assets/share.png';
// import saveIcon from '../../assets/save.png';
// import { value_conveter } from '../../data';
// import moment from 'moment';
// import { API_KEY } from '../../data';
// import { useParams } from 'react-router-dom';

// const PlayVideo = () => {
//     const { videoId } = useParams();
//     const [apiData, setApiData] = useState(null);
//     const [liked, setLiked] = useState(false);
//     const [disliked, setDisliked] = useState(false);

//     useEffect(() => {
//         const fetchVideoData = async () => {
//             try {
//                 const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`);
//                 const data = await response.json();
//                 if (data.items.length > 0) {
//                     setApiData(data.items[0]);
//                 }
//             } catch (error) {
//                 console.error('Failed to fetch video data', error);
//             }
//         };
//         fetchVideoData();
//     }, [videoId]);

//     const handleLike = () => {
//         if (!liked) {
//             setLiked(true);
//             setDisliked(false);
//         } else {
//             setLiked(false);
//         }
//     };

//     const handleDislike = () => {
//         if (!disliked) {
//             setDisliked(true);
//             setLiked(false);
//         } else {
//             setDisliked(false);
//         }
//     };

//     const handleShare = () => {
//         if (navigator.share) {
//             navigator.share({
//                 title: apiData.snippet.title,
//                 text: 'Check out this video!',
//                 url: `https://www.youtube.com/watch?v=${videoId}`,
//             }).catch(err => console.error('Error sharing', err));
//         } else {
//             alert('Sharing not supported in this browser.');
//         }
//     };

//     if (!apiData) return <div>Loading...</div>;

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
//                     <span onClick={handleLike} style={{ cursor: 'pointer' }}>
//                         <img src={likeIcon} alt='' className={liked ? 'active' : ''} /> {value_conveter(apiData.statistics.likeCount)}
//                     </span>
//                     <span onClick={handleDislike} style={{ cursor: 'pointer' }}>
//                         <img src={dislikeIcon} alt='' className={disliked ? 'active' : ''} /> Dislike
//                     </span>
//                     <span onClick={handleShare} style={{ cursor: 'pointer' }}>
//                         <img src={shareIcon} alt='' /> Share
//                     </span>
//                     <span>
//                         <img src={saveIcon} alt='' /> Save
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlayVideo;
