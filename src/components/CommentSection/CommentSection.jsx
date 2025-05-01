// import React, { useState } from 'react';
// import './CommentSection.css';

// const CommentSection = ({ videoId }) => {
//   const [comments, setComments] = useState([]);
//   const [commentInput, setCommentInput] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (commentInput.trim() === '') return;

//     const newComment = {
//       id: Date.now(),
//       text: commentInput,
//       date: new Date().toLocaleString()
//     };

//     setComments([newComment, ...comments]);
//     setCommentInput('');
//   };

//   return (
//     <div className="comment-section">
//       <h3>Comments</h3>
//       <form onSubmit={handleCommentSubmit} className="comment-form">
//         <textarea
//           placeholder="Add a comment..."
//           value={commentInput}
//           onChange={(e) => setCommentInput(e.target.value)}
//         ></textarea>
//         <button type="submit">Post</button>
//       </form>
//       <div className="comments-list">
//         {comments.length === 0 ? (
//           <p>No comments yet.</p>
//         ) : (
//           comments.map((comment) => (
//             <div key={comment.id} className="comment-item">
//               <p>{comment.text}</p>
//               <span>{comment.date}</span>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;


import React, { useState, useEffect } from 'react';
import CommentItem from './CommentItem'; // Importing CommentItem component

const CommentSection = () => {
  const [comments, setComments] = useState([]); // State for comments
  const [newComment, setNewComment] = useState(''); // State for new comment text
  const [likedComments, setLikedComments] = useState(new Set());
  const [dislikedComments, setDislikedComments] = useState(new Set());
  const [replyTexts, setReplyTexts] = useState({});

  // Fetch comments from the backend API
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Handle adding a new comment
  const handleAddComment = async () => {
    if (!newComment.trim()) return; // Prevent adding empty comments

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newComment }),
      });

      const addedComment = await response.json();
      setComments((prevComments) => [addedComment, ...prevComments]);
      setNewComment(''); // Clear the input field after adding the comment
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = async (commentId) => {
    try {
      await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
      });
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  // Handle like on a comment
  const handleLike = (commentId) => {
    setLikedComments(new Set(likedComments.add(commentId)));
  };

  // Handle dislike on a comment
  const handleDislike = (commentId) => {
    setDislikedComments(new Set(dislikedComments.add(commentId)));
  };

  // Handle reply text change
  const handleReplyChange = (commentId, value) => {
    setReplyTexts((prev) => ({
      ...prev,
      [commentId]: value,
    }));
  };

  // Add a reply to a comment
  const handleAddReply = (commentId, replyText) => {
    // Here, you would typically send the reply to the backend or update the state
    console.log(`Reply to comment ${commentId}: ${replyText}`);
    setReplyTexts((prev) => ({
      ...prev,
      [commentId]: '',
    }));
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      
      {/* Input for new comment */}
      <div className="new-comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment"
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>

      {/* List of existing comments */}
      <div className="comments-list">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            likedComments={likedComments}
            dislikedComments={dislikedComments}
            handleLike={handleLike}
            handleDislike={handleDislike}
            handleReplyChange={handleReplyChange}
            handleAddReply={handleAddReply}
            replyTexts={replyTexts}
            setReplyTexts={setReplyTexts}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
