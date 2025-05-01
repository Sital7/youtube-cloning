// // // // // this is also correct
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import './Profile.css';

// // // // // const Profile = () => {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const navigate = useNavigate();
// // // // //   const auth = getAuth();

// // // // //   useEffect(() => {
// // // // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // // // //       if (currentUser) {
// // // // //         setUser(currentUser);
// // // // //       } else {
// // // // //         navigate('/login'); // Redirect if not logged in
// // // // //       }
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, [auth, navigate]);

// // // // //   return (
// // // // //     <div className="profile-container">
// // // // //       <h2>User Profile</h2>
// // // // //       {user ? (
// // // // //         <div className="profile-details">
// // // // //           <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
// // // // //           <p><strong>Email:</strong> {user.email}</p>
// // // // //           <p><strong>UID:</strong> {user.uid}</p>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <p>Loading...</p>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Profile;



// // // import React, { useEffect, useState } from 'react';
// // // import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // // import { useNavigate } from 'react-router-dom';
// // // import './Profile.css';

// // // const Profile = () => {
// // //   const [user, setUser] = useState(null);
// // //   const navigate = useNavigate();
// // //   const auth = getAuth();

// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// // //       if (currentUser) {
// // //         setUser(currentUser);
// // //       } else {
// // //         navigate('/login'); // Redirect if not logged in
// // //       }
// // //     });

// // //     return () => unsubscribe();
// // //   }, [auth, navigate]);

// // //   return (
// // //     <div className="profile-container">
// // //       <h2>User Profile</h2>
// // //       {user ? (
// // //         <>
// // //           {/* Profile Picture Section */}
// // //           {user.photoURL && (
// // //             <div className="profile-picture-container">
// // //               <img
// // //                 src={user.photoURL}
// // //                 alt="Profile"
// // //                 className="profile-picture"
// // //               />
// // //             </div>
// // //           )}
// // //           <div className="profile-details">
// // //             <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
// // //             <p><strong>Email:</strong> {user.email}</p>
// // //             <p><strong>UID:</strong> {user.uid}</p>
// // //           </div>
// // //         </>
// // //       ) : (
// // //         <p>Loading...</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Profile;




// // import React, { useEffect, useState } from 'react';
// // import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// // import { useNavigate } from 'react-router-dom';
// // import './Profile.css';
// // import sital from "../../assets/sital.png"

// // const Profile = () => {
// //   const [user, setUser] = useState(null);
// //   const [posts, setPosts] = useState([]);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [newName, setNewName] = useState('');
// //   const [newProfilePic, setNewProfilePic] = useState('');
// //   const navigate = useNavigate();
// //   const auth = getAuth();
// //   const db = getFirestore();

// //   // Fetch user data and posts
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       if (currentUser) {
// //         setUser(currentUser);
// //         setNewName(currentUser.displayName || '');
// //         setNewProfilePic(currentUser.photoURL || '');
// //         fetchPosts(currentUser.uid);
// //       } else {
// //         navigate('/login'); // Redirect if not logged in
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, [auth, navigate]);

// //   const fetchPosts = async (userId) => {
// //     try {
// //       const postsRef = collection(db, 'posts');
// //       const q = query(postsRef, where('userId', '==', userId));
// //       const querySnapshot = await getDocs(q);
// //       const postsData = querySnapshot.docs.map((doc) => doc.data());
// //       setPosts(postsData);
// //     } catch (error) {
// //       console.error('Error fetching posts:', error);
// //     }
// //   };

// //   const handleEditProfile = () => {
// //     setIsEditing(!isEditing);
// //   };

// //   const handleSaveProfile = () => {
// //     // Update profile in Firebase if necessary
// //     if (user) {
// //       user.updateProfile({
// //         displayName: newName,
// //         photoURL: newProfilePic,
// //       })
// //       .then(() => {
// //         setIsEditing(false);
// //       })
// //       .catch((error) => {
// //         console.error('Error updating profile:', error);
// //       });
// //     }
// //   };

// //   return (
// //     <div className="profile-container">
// //       <h2>User Profile</h2>
// //       {user ? (
// //         <>
// //           {/* Profile Picture Section */}
// //           {user.photoURL && (
// //             <div className="profile-picture-container">
// //               <img
// //                 src={sital}
// //                 alt="Profile"
// //                 className="profile-picture"
// //               />
// //             </div>
// //           )}
// //           <div className="profile-details">
// //             {isEditing ? (
// //               <>
// //                 <div className="profile-edit">
// //                   <input
// //                     type="text"
// //                     value={newName}
// //                     onChange={(e) => setNewName(e.target.value)}
// //                     placeholder="Edit name"
// //                     className="profile-input"
// //                   />
// //                   <input
// //                     type="text"
// //                     value={newProfilePic}
// //                     onChange={(e) => setNewProfilePic(e.target.value)}
// //                     placeholder="Edit profile picture URL"
// //                     className="profile-input"
// //                   />
// //                 </div>
// //                 <button className="save-button" onClick={handleSaveProfile}>Save</button>
// //               </>
// //             ) : (
// //               <>
// //                 <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
// //                 <p><strong>Email:</strong> {user.email}</p>
// //               </>
// //             )}
// //           </div>

// //           <button className="edit-button" onClick={handleEditProfile}>
// //             {isEditing ? 'Cancel Edit' : 'Edit Profile'}
// //           </button>

// //           {/* User Posts Section */}
// //           <div className="user-posts">
// //             <h3>Your Posts</h3>
// //             {posts.length > 0 ? (
// //               posts.map((post, index) => (
// //                 <div key={index} className="post-card">
// //                   <h4>{post.title}</h4>
// //                   <p>{post.content}</p>
// //                 </div>
// //               ))
// //             ) : (
// //               <p>No posts available.</p>
// //             )}
// //           </div>
// //         </>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;



// import React, { useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import './Profile.css';
// import defaultProfilePic from "../../assets/sital.png"; // Default profile picture

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newName, setNewName] = useState('');
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const db = getFirestore();

//   // Fetch user data and posts
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         setNewName(currentUser.displayName || '');
//         fetchPosts(currentUser.uid);
//       } else {
//         navigate('/login'); // Redirect if not logged in
//       }
//     });

//     return () => unsubscribe();
//   }, [auth, navigate]);

//   const fetchPosts = async (userId) => {
//     try {
//       const postsRef = collection(db, 'posts');
//       const q = query(postsRef, where('userId', '==', userId));
//       const querySnapshot = await getDocs(q);
//       const postsData = querySnapshot.docs.map((doc) => doc.data());
//       setPosts(postsData);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleEditProfile = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveProfile = () => {
//     // Update profile in Firebase if necessary
//     if (user) {
//       user.updateProfile({
//         displayName: newName,
//       })
//       .then(() => {
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error('Error updating profile:', error);
//       });
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {user ? (
//         <>
//           {/* Profile Picture Section */}
//           <div className="profile-picture-container">
//             <img
//               src={user.photoURL || defaultProfilePic}  // Use user's photo or default
//               alt="Profile"
//               className="profile-picture"
//             />
//           </div>

//           <div className="profile-details">
//             {isEditing ? (
//               <>
//                 <div className="profile-edit">
//                   <input
//                     type="text"
//                     value={newName}
//                     onChange={(e) => setNewName(e.target.value)}
//                     placeholder="Edit name"
//                     className="profile-input"
//                   />
//                 </div>
//                 <button className="save-button" onClick={handleSaveProfile}>Save</button>
//               </>
//             ) : (
//               <>
//                 <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//               </>
//             )}
//           </div>

//           <button className="edit-button" onClick={handleEditProfile}>
//             {isEditing ? 'Cancel Edit' : 'Edit Profile'}
//           </button>

//           {/* User Posts Section */}
//           <div className="user-posts">
//             <h3>Your Posts</h3>
//             {posts.length > 0 ? (
//               posts.map((post, index) => (
//                 <div key={index} className="post-card">
//                   <h4>{post.title}</h4>
//                   <p>{post.content}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No posts available.</p>
//             )}
//           </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;




import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import defaultProfilePic from "../../assets/sital.png"; // Default profile picture

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  // Fetch user data and posts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setNewName(currentUser.displayName || '');
        fetchPosts(currentUser.uid);
      } else {
        navigate('/login'); // Redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const fetchPosts = async (userId) => {
    try {
      const postsRef = collection(db, 'posts');
      const q = query(postsRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = async () => {
    if (user) {
      try {
        await user.updateProfile({
          displayName: newName, // Update displayName
        });

        // After successful update, set the isEditing state to false to stop editing mode
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <>
          {/* Profile Picture Section */}
          <div className="profile-picture-container">
            <img
              src={user.photoURL || defaultProfilePic} 
              alt="Profile"
              className="profile-picture"
            />
          </div>

          <div className="profile-details">
            {isEditing ? (
              <>
                <div className="profile-edit">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Edit name"
                    className="profile-input"
                  />
                </div>
                <button className="save-button" onClick={handleSaveProfile}>Save</button>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </>
            )}
          </div>

          <button className="edit-button" onClick={handleEditProfile}>
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>

          {/* User Posts Section */}
          <div className="user-posts">
            <h3>Your Posts</h3>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post-card">
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
