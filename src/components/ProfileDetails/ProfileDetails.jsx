// // // // // // // // // // import React from 'react';

// // // // // // // // // // const ProfileDetails = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="profile-details">
// // // // // // // // // //       <div className="profile-avatar">
// // // // // // // // // //         <img src="path/to/profile-pic.jpg" alt="User Avatar" />
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className="profile-info">
// // // // // // // // // //         <h2>User Name</h2>
// // // // // // // // // //         <p>@username</p>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProfileDetails;



// // // // // // // // // import React from 'react';
// // // // // // // // // import './ProfileDetails.css'; // Make sure to create this file and import it

// // // // // // // // // const ProfileDetails = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="profile-details">
// // // // // // // // //       <div className="profile-avatar">
// // // // // // // // //         <img src="path/to/profile-pic.jpg" alt="User Avatar" className="avatar-img" />
// // // // // // // // //       </div>
// // // // // // // // //       <div className="profile-info">
// // // // // // // // //         <h2 className="user-name">User Name</h2>
// // // // // // // // //         <p className="user-username">@username</p>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProfileDetails;



// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { API_KEY } from "../data"; // Import your API key from data.js
// // // // // // // // import "./ProfileDetails.css";

// // // // // // // // const ProfileDetails = () => {
// // // // // // // //   const [profile, setProfile] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProfileDetails = async () => {
// // // // // // // //       try {
// // // // // // // //         const response = await fetch(
// // // // // // // //           `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=YOUR_CHANNEL_ID&key=${API_KEY}`
// // // // // // // //         );
// // // // // // // //         const data = await response.json();
// // // // // // // //         if (data.items.length > 0) {
// // // // // // // //           setProfile(data.items[0].snippet);
// // // // // // // //         }
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error fetching profile details:", error);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchProfileDetails();
// // // // // // // //   }, []);

// // // // // // // //   if (!profile) {
// // // // // // // //     return <p>Loading profile...</p>;
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="profile-details">
// // // // // // // //       <div className="profile-avatar">
// // // // // // // //         <img src={profile.thumbnails.high.url} alt={profile.title} className="avatar-img" />
// // // // // // // //       </div>
// // // // // // // //       <div className="profile-info">
// // // // // // // //         <h2 className="user-name">{profile.title}</h2>
// // // // // // // //         <p className="user-username">@{profile.customUrl || "username"}</p>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProfileDetails;




// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { auth } from "../firebase";
// // // // // // // // import { auth } from "../../firebase"; 
// // // // // // // import { auth } from "../../firebase";


// // // // // // // const ProfileDetails = () => {
// // // // // // //   const [profile, setProfile] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProfileDetails = async () => {
// // // // // // //       if (!auth.currentUser) return;
      
// // // // // // //       const token = await auth.currentUser.getIdToken(true); // Get OAuth token

// // // // // // //       try {
// // // // // // //         const response = await fetch(
// // // // // // //           `https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true`, 
// // // // // // //           {
// // // // // // //             headers: {
// // // // // // //               Authorization: `Bearer ${token}`,
// // // // // // //               Accept: "application/json",
// // // // // // //             },
// // // // // // //           }
// // // // // // //         );

// // // // // // //         const data = await response.json();
// // // // // // //         if (data.items.length > 0) {
// // // // // // //           setProfile(data.items[0].snippet);
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Error fetching YouTube profile:", error);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchProfileDetails();
// // // // // // //   }, []);

// // // // // // //   if (!profile) {
// // // // // // //     return <p>Loading profile...</p>;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="profile-details">
// // // // // // //       <div className="profile-avatar">
// // // // // // //         <img src={profile.thumbnails.high.url} alt={profile.title} className="avatar-img" />
// // // // // // //       </div>
// // // // // // //       <div className="profile-info">
// // // // // // //         <h2 className="user-name">{profile.title}</h2>
// // // // // // //         <p className="user-username">@{profile.customUrl || "username"}</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProfileDetails;


// // // // // // // correct
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { auth, provider, signInWithPopup } from "../../firebase"; // Ensure correct import
// // // // // // // import "./ProfileDetails.css";

// // // // // // // const ProfileDetails = () => {
// // // // // // //   const [user, setUser] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [profile, setProfile] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
// // // // // // //       setUser(currentUser);
// // // // // // //       setLoading(false);

// // // // // // //       if (currentUser) {
// // // // // // //         try {
// // // // // // //           const token = await currentUser.getIdToken(true); // Get OAuth token

// // // // // // //           const response = await fetch(
// // // // // // //             `https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true`,
// // // // // // //             {
// // // // // // //               headers: {
// // // // // // //                 Authorization: `Bearer ${token}`,
// // // // // // //                 Accept: "application/json",
// // // // // // //               },
// // // // // // //             }
// // // // // // //           );

// // // // // // //           const data = await response.json();
// // // // // // //           if (data.items && data.items.length > 0) {
// // // // // // //             setProfile(data.items[0].snippet);
// // // // // // //           }
// // // // // // //         } catch (error) {
// // // // // // //           console.error("Error fetching YouTube profile:", error);
// // // // // // //         }
// // // // // // //       }
// // // // // // //     });

// // // // // // //     return () => unsubscribe(); // Cleanup
// // // // // // //   }, []);

// // // // // // //   const handleLogin = async () => {
// // // // // // //     try {
// // // // // // //       await signInWithPopup(auth, provider);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Login Error:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (loading) {
// // // // // // //     return <h2>Loading Profile...</h2>;
// // // // // // //   }

// // // // // // //   if (!user) {
// // // // // // //     return (
// // // // // // //       <div>
// // // // // // //         <h2>No user logged in</h2>
// // // // // // //         <button onClick={handleLogin}>Sign in with Google</button>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="profile-details">
// // // // // // //       <div className="profile-avatar">
// // // // // // //         <img
// // // // // // //           src={profile ? profile.thumbnails.high.url : user.photoURL || "default-avatar.png"}
// // // // // // //           alt={profile ? profile.title : "User Avatar"}
// // // // // // //           className="avatar-img"
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <div className="profile-info">
// // // // // // //         <h2 className="user-name">{profile ? profile.title : user.displayName || "No Name"}</h2>
// // // // // // //         <p className="user-username">@{profile ? profile.customUrl : user.email.split("@")[0]}</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProfileDetails;



// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { auth, provider, signInWithPopup } from "../../firebase"; // Ensure correct import
// // // // // // import "./ProfileDetails.css";

// // // // // // const ProfileDetails = () => {
// // // // // //   const [user, setUser] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [profile, setProfile] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
// // // // // //       setUser(currentUser);
// // // // // //       setLoading(false);

// // // // // //       if (currentUser) {
// // // // // //         try {
// // // // // //           const token = await currentUser.getIdToken(true); // Get OAuth token

// // // // // //           const response = await fetch(
// // // // // //             `https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true`,
// // // // // //             {
// // // // // //               headers: {
// // // // // //                 Authorization: `Bearer ${token}`,
// // // // // //                 Accept: "application/json",
// // // // // //               },
// // // // // //             }
// // // // // //           );

// // // // // //           const data = await response.json();
// // // // // //           if (data.items && data.items.length > 0) {
// // // // // //             setProfile(data.items[0].snippet);
// // // // // //           }
// // // // // //         } catch (error) {
// // // // // //           console.error("Error fetching YouTube profile:", error);
// // // // // //         }
// // // // // //       }
// // // // // //     });

// // // // // //     return () => unsubscribe(); // Cleanup
// // // // // //   }, []);

// // // // // //   const handleLogin = async () => {
// // // // // //     try {
// // // // // //       await signInWithPopup(auth, provider);
// // // // // //     } catch (error) {
// // // // // //       console.error("Login Error:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) {
// // // // // //     return <h2>Loading Profile...</h2>;
// // // // // //   }

// // // // // //   if (!user) {
// // // // // //     return (
// // // // // //       <div>
// // // // // //         <h2>No user logged in</h2>
// // // // // //         <button onClick={handleLogin}>Sign in with Google</button>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="profile-details">
// // // // // //       <div className="profile-avatar">
// // // // // //         <img
// // // // // //           src={profile ? profile.thumbnails.high.url : user.photoURL || "default-avatar.png"}
// // // // // //           alt={profile ? profile.title : "User Avatar"}
// // // // // //           className="avatar-img"
// // // // // //         />
// // // // // //       </div>
// // // // // //       <div className="profile-info">
// // // // // //         <h2 className="user-name">
// // // // // //           {profile ? profile.title : user.displayName || "No Name"}
// // // // // //         </h2>
// // // // // //         <p className="user-username">
// // // // // //           @{profile ? profile.customUrl : user.email.split("@")[0]}
// // // // // //         </p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProfileDetails;



// // // // good code
// // // import React, { useEffect, useState } from "react";
// // // import { auth, provider, signInWithPopup } from "../../firebase";
// // // import { updateProfile } from "firebase/auth";
// // // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// // // import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// // // import jackImage from "../../assets/sital.png"; // <-- Import the image here
// // // import "./ProfileDetails.css";

// // // const ProfileDetails = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [profile, setProfile] = useState(null);
// // //   const [editMode, setEditMode] = useState(false);
// // //   const [newUsername, setNewUsername] = useState("");
// // //   const [newProfileImage, setNewProfileImage] = useState(null);
// // //   const [newCoverPhoto, setNewCoverPhoto] = useState(null);

// // //   const storage = getStorage();
// // //   const db = getFirestore();

// // //   useEffect(() => {
// // //     const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
// // //       setUser(currentUser);
// // //       setLoading(false);

// // //       if (currentUser) {
// // //         try {
// // //           const token = await currentUser.getIdToken(true);
// // //           const response = await fetch(
// // //             `https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true`,
// // //             {
// // //               headers: {
// // //                 Authorization: `Bearer ${token}`,
// // //                 Accept: "application/json",
// // //               },
// // //             }
// // //           );

// // //           const data = await response.json();
// // //           if (data.items && data.items.length > 0) {
// // //             setProfile(data.items[0].snippet);
// // //           }

// // //           const userDoc = await getDoc(doc(db, "users", currentUser.uid));
// // //           if (userDoc.exists()) {
// // //             setProfile((prev) => ({
// // //               ...prev,
// // //               coverPhotoURL: userDoc.data().coverPhotoURL || null,
// // //             }));
// // //           }
// // //         } catch (error) {
// // //           console.error("Error fetching YouTube profile:", error);
// // //         }
// // //       }
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   const handleLogin = async () => {
// // //     try {
// // //       await signInWithPopup(auth, provider);
// // //     } catch (error) {
// // //       console.error("Login Error:", error);
// // //     }
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       if (e.target.name === "profileImage") {
// // //         setNewProfileImage(file);
// // //       } else if (e.target.name === "coverPhoto") {
// // //         setNewCoverPhoto(file);
// // //       }
// // //     }
// // //   };

// // //   const handleSaveChanges = async () => {
// // //     try {
// // //       if (!user) return;

// // //       if (newUsername) {
// // //         await updateProfile(user, { displayName: newUsername });
// // //       }

// // //       let profileImageURL = user.photoURL;
// // //       if (newProfileImage) {
// // //         const profileImageRef = ref(storage, `profileImages/${user.uid}`);
// // //         await uploadBytes(profileImageRef, newProfileImage);
// // //         profileImageURL = await getDownloadURL(profileImageRef);
// // //         await updateProfile(user, { photoURL: profileImageURL });
// // //       }

// // //       let coverPhotoURL = profile?.coverPhotoURL;
// // //       if (newCoverPhoto) {
// // //         const coverPhotoRef = ref(storage, `coverPhotos/${user.uid}`);
// // //         await uploadBytes(coverPhotoRef, newCoverPhoto);
// // //         coverPhotoURL = await getDownloadURL(coverPhotoRef);
// // //         await setDoc(doc(db, "users", user.uid), { coverPhotoURL }, { merge: true });
// // //       }

// // //       await user.reload();
// // //       setUser(auth.currentUser);

// // //       setProfile((prev) => ({
// // //         ...prev,
// // //         title: newUsername || prev?.title,
// // //         thumbnails: {
// // //           high: { url: profileImageURL || prev?.thumbnails?.high?.url },
// // //         },
// // //         coverPhotoURL: coverPhotoURL || prev?.coverPhotoURL,
// // //       }));

// // //       setEditMode(false);
// // //     } catch (error) {
// // //       console.error("Error saving changes:", error);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <h2>Loading Profile...</h2>;
// // //   }

// // //   if (!user) {
// // //     return (
// // //       <div>
// // //         <h2>No user logged in</h2>
// // //         <button onClick={handleLogin}>Sign in with Google</button>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="profile-details">
// // //       {editMode ? (
// // //         <div className="edit-mode">
// // //           <input
// // //             type="text"
// // //             placeholder="Update Username"
// // //             value={newUsername}
// // //             onChange={(e) => setNewUsername(e.target.value)}
// // //           />
// // //           <input type="file" name="profileImage" onChange={handleFileChange} />
// // //           <input type="file" name="coverPhoto" onChange={handleFileChange} />
// // //           <button onClick={handleSaveChanges}>Save Changes</button>
// // //           <button onClick={() => setEditMode(false)}>Cancel</button>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           {profile?.coverPhotoURL && (
// // //             <div className="cover-photo-container">
// // //               <img src={profile.coverPhotoURL} alt="Cover" className="cover-photo" />
// // //             </div>
// // //           )}

// // //           <div className="profile-main">
// // //             <div className="profile-avatar">
// // //               <img
// // //                 src={newProfileImage ? URL.createObjectURL(newProfileImage) : user.photoURL || jackImage}
// // //                 alt={profile ? profile.title : "User Avatar"}
// // //                 className="avatar-img"
// // //               />
// // //             </div>

// // //             <div className="profile-info">
// // //               <h2 className="user-name">
// // //                 {profile?.title || user.displayName || "No Name"}
// // //               </h2>
// // //               <p className="user-username">{user.email}</p>
// // //               <button onClick={() => setEditMode(true)} className="edit-btn">Edit Profile</button>
// // //             </div>
// // //           </div>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ProfileDetails;



// final code
import { useEffect, useState } from "react";
import { auth, provider, signInWithPopup } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import jackImage from "../../assets/sital.png";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const storage = getStorage();
  const db = getFirestore();

  // Fetch user data and profile details
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setProfile({
              ...userDoc.data(),
              title: currentUser.displayName,
              photoURL: currentUser.photoURL,
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfileImage(file);
    }
  };

  const handleSaveChanges = async () => {
    try {
      if (!user) return;

      if (newUsername) {
        await updateProfile(user, { displayName: newUsername });
      }

      let profileImageURL = profile?.photoURL;
      if (newProfileImage) {
        const profileImageRef = ref(storage, `profileImages/${user.uid}`);
        await uploadBytes(profileImageRef, newProfileImage);
        profileImageURL = await getDownloadURL(profileImageRef);
        await updateProfile(user, { photoURL: profileImageURL });
        // Store the profile image URL in Firestore
        await setDoc(doc(db, "users", user.uid), { profileImageURL }, { merge: true });
      }

      // Refresh the profile data after saving
      await user.reload();
      setUser(auth.currentUser);

      setProfile((prev) => ({
        ...prev,
        title: newUsername || prev?.title,
        photoURL: profileImageURL || prev?.photoURL,
      }));

      setEditMode(false);
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds

    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  if (loading) {
    return <h2>Loading Profile...</h2>;
  }

  if (!user) {
    return (
      <div>
        <h2>No user logged in</h2>
        <button onClick={handleLogin}>Sign in with Google</button>
      </div>
    );
  }

  return (
    <div className="profile-details">
      {successMessage && <div className="success-message">{successMessage}</div>}

      {editMode ? (
        <div className="edit-mode">
          <input
            type="text"
            placeholder="Update Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          {/* <input type="file" name="profileImage" onChange={handleFileChange} /> */}
          <button onClick={handleSaveChanges}>Save Changes</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div className="profile-main">
          <div className="profile-avatar">
            <img
              src={profile?.photoURL || jackImage}
              alt={profile?.title || "User Avatar"}
              className="avatar-img"
            />
          </div>

          <div className="profile-info">
            <h2 className="user-name">
              {profile?.title || user.displayName || "No Name"}
            </h2>
            <p className="user-username">{user.email}</p>
            <button onClick={() => setEditMode(true)} className="edit-btn">Edit Profile</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;

