// // // // // // // // // // src/components/UploadContent.jsx
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { storage, ref, uploadBytes } from '../firebase'; // Firebase storage
// // // // // // // // // import {  storageRef, uploadFile } from "../../firebase";

// // // // // // // // // import { v4 as uuidv4 } from 'uuid';
// // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // import './UploadContent.css';

// // // // // // // // // const UploadContent = () => {
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [videoFile, setVideoFile] = useState(null);
// // // // // // // // //   const [audioFile, setAudioFile] = useState(null);
// // // // // // // // //   const [title, setTitle] = useState('');
// // // // // // // // //   const [description, setDescription] = useState('');
// // // // // // // // //   const [isUploading, setIsUploading] = useState(false);

// // // // // // // // //   const handleVideoChange = (e) => {
// // // // // // // // //     setVideoFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleAudioChange = (e) => {
// // // // // // // // //     setAudioFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     if (!title || !description || !videoFile) {
// // // // // // // // //       alert('Please fill in all fields');
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setIsUploading(true);

// // // // // // // // //     try {
// // // // // // // // //       // Upload video
// // // // // // // // //       const videoRef = ref(storage, `videos/${uuidv4()}`);
// // // // // // // // //       await uploadBytes(videoRef, videoFile);

// // // // // // // // //       let audioUrl = '';
// // // // // // // // //       if (audioFile) {
// // // // // // // // //         // Upload audio if provided
// // // // // // // // //         const audioRef = ref(storage, `audio/${uuidv4()}`);
// // // // // // // // //         await uploadBytes(audioRef, audioFile);
// // // // // // // // //         audioUrl = await audioRef.getDownloadURL();
// // // // // // // // //       }

// // // // // // // // //       // Save data to backend or database (simulated here)
// // // // // // // // //       const videoData = {
// // // // // // // // //         title,
// // // // // // // // //         description,
// // // // // // // // //         videoUrl: `videos/${videoFile.name}`,
// // // // // // // // //         audioUrl,
// // // // // // // // //         uploadedAt: new Date(),
// // // // // // // // //       };

// // // // // // // // //       // Simulate sending data to a server or database
// // // // // // // // //       console.log('Video data:', videoData);

// // // // // // // // //       // Redirect to another page or show success message
// // // // // // // // //       alert('Upload successful!');
// // // // // // // // //       navigate('/home'); // Navigate to home after upload
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Upload failed:', error);
// // // // // // // // //       alert('Upload failed, please try again');
// // // // // // // // //     } finally {
// // // // // // // // //       setIsUploading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="upload-content">
// // // // // // // // //       <h2>Upload Content</h2>

// // // // // // // // //       <form onSubmit={handleSubmit} className="upload-form">
// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Title</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={title}
// // // // // // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // // // // // //             placeholder="Enter video title"
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Description</label>
// // // // // // // // //           <textarea
// // // // // // // // //             value={description}
// // // // // // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // // // // // //             placeholder="Enter video description"
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Video</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="video/*"
// // // // // // // // //             onChange={handleVideoChange}
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Audio (optional)</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="audio/*"
// // // // // // // // //             onChange={handleAudioChange}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <button type="submit" disabled={isUploading}>
// // // // // // // // //           {isUploading ? 'Uploading...' : 'Upload Content'}
// // // // // // // // //         </button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default UploadContent;



// // // // // // // // // correct
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { storage } from "../../firebase"; // Correct import for Firebase storage
// // // // // // // // // import { ref, uploadBytes } from "firebase/storage"; // Correct Firebase storage functions
// // // // // // // // // import { v4 as uuidv4 } from 'uuid';
// // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // import './UploadContent.css';

// // // // // // // // // const UploadContent = () => {
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [videoFile, setVideoFile] = useState(null);
// // // // // // // // //   const [audioFile, setAudioFile] = useState(null);
// // // // // // // // //   const [title, setTitle] = useState('');
// // // // // // // // //   const [description, setDescription] = useState('');
// // // // // // // // //   const [isUploading, setIsUploading] = useState(false);

// // // // // // // // //   const handleVideoChange = (e) => {
// // // // // // // // //     setVideoFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleAudioChange = (e) => {
// // // // // // // // //     setAudioFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     if (!title || !description || !videoFile) {
// // // // // // // // //       alert('Please fill in all fields');
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setIsUploading(true);

// // // // // // // // //     try {
// // // // // // // // //       // Upload video
// // // // // // // // //       const videoRef = ref(storage, `videos/${uuidv4()}`);
// // // // // // // // //       await uploadBytes(videoRef, videoFile);

// // // // // // // // //       let audioUrl = '';
// // // // // // // // //       if (audioFile) {
// // // // // // // // //         // Upload audio if provided
// // // // // // // // //         const audioRef = ref(storage, `audio/${uuidv4()}`);
// // // // // // // // //         await uploadBytes(audioRef, audioFile);
// // // // // // // // //         audioUrl = await audioRef.getDownloadURL();
// // // // // // // // //       }

// // // // // // // // //       // Save data to backend or database (simulated here)
// // // // // // // // //       const videoData = {
// // // // // // // // //         title,
// // // // // // // // //         description,
// // // // // // // // //         videoUrl: `videos/${videoFile.name}`,
// // // // // // // // //         audioUrl,
// // // // // // // // //         uploadedAt: new Date(),
// // // // // // // // //       };

// // // // // // // // //       // Simulate sending data to a server or database
// // // // // // // // //       console.log('Video data:', videoData);

// // // // // // // // //       // Redirect to another page or show success message
// // // // // // // // //       alert('Upload successful!');
// // // // // // // // //       navigate('/home'); // Navigate to home after upload
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Upload failed:', error);
// // // // // // // // //       alert('Upload failed, please try again');
// // // // // // // // //     } finally {
// // // // // // // // //       setIsUploading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="upload-content">
// // // // // // // // //       <h2>Upload Content</h2>

// // // // // // // // //       <form onSubmit={handleSubmit} className="upload-form">
// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Title</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={title}
// // // // // // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // // // // // //             placeholder="Enter video title"
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Description</label>
// // // // // // // // //           <textarea
// // // // // // // // //             value={description}
// // // // // // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // // // // // //             placeholder="Enter video description"
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Video</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="video/*"
// // // // // // // // //             onChange={handleVideoChange}
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Audio (optional)</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="audio/*"
// // // // // // // // //             onChange={handleAudioChange}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <button type="submit" disabled={isUploading}>
// // // // // // // // //           {isUploading ? 'Uploading...' : 'Upload Content'}
// // // // // // // // //         </button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default UploadContent;




// // // // // // // // // correct 1
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { storage } from "../../firebase"; // Correct import for Firebase storage
// // // // // // // // // import { ref, uploadBytes } from "firebase/storage"; // Correct Firebase storage functions
// // // // // // // // // import { v4 as uuidv4 } from 'uuid';
// // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // import './UploadContent.css';

// // // // // // // // // const UploadContent = () => {
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [videoFile, setVideoFile] = useState(null);
// // // // // // // // //   const [audioFile, setAudioFile] = useState(null);
// // // // // // // // //   const [imageFile, setImageFile] = useState(null); // Added state for image
// // // // // // // // //   const [title, setTitle] = useState('');
// // // // // // // // //   const [description, setDescription] = useState('');
// // // // // // // // //   const [isUploading, setIsUploading] = useState(false);

// // // // // // // // //   const handleVideoChange = (e) => {
// // // // // // // // //     setVideoFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleAudioChange = (e) => {
// // // // // // // // //     setAudioFile(e.target.files[0]);
// // // // // // // // //   };

// // // // // // // // //   const handleImageChange = (e) => {
// // // // // // // // //     setImageFile(e.target.files[0]); // Set the image file
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     if (!title || !description || !videoFile) {
// // // // // // // // //       alert('Please fill in all fields');
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     setIsUploading(true);

// // // // // // // // //     try {
// // // // // // // // //       // Upload video
// // // // // // // // //       const videoRef = ref(storage, `videos/${uuidv4()}`);
// // // // // // // // //       await uploadBytes(videoRef, videoFile);

// // // // // // // // //       let audioUrl = '';
// // // // // // // // //       if (audioFile) {
// // // // // // // // //         // Upload audio if provided
// // // // // // // // //         const audioRef = ref(storage, `audio/${uuidv4()}`);
// // // // // // // // //         await uploadBytes(audioRef, audioFile);
// // // // // // // // //         audioUrl = await audioRef.getDownloadURL();
// // // // // // // // //       }

// // // // // // // // //       let imageUrl = '';
// // // // // // // // //       if (imageFile) {
// // // // // // // // //         // Upload image if provided
// // // // // // // // //         const imageRef = ref(storage, `images/${uuidv4()}`);
// // // // // // // // //         await uploadBytes(imageRef, imageFile);
// // // // // // // // //         imageUrl = await imageRef.getDownloadURL();
// // // // // // // // //       }

// // // // // // // // //       // Save data to backend or database (simulated here)
// // // // // // // // //       const videoData = {
// // // // // // // // //         title,
// // // // // // // // //         description,
// // // // // // // // //         videoUrl: `videos/${videoFile.name}`,
// // // // // // // // //         audioUrl,
// // // // // // // // //         imageUrl, // Save the image URL as well
// // // // // // // // //         uploadedAt: new Date(),
// // // // // // // // //       };

// // // // // // // // //       // Simulate sending data to a server or database
// // // // // // // // //       console.log('Video data:', videoData);

// // // // // // // // //       // Redirect to another page or show success message
// // // // // // // // //       alert('Upload successful!');
// // // // // // // // //       navigate('/home'); // Navigate to home after upload
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Upload failed:', error);
// // // // // // // // //       alert('Upload failed, please try again');
// // // // // // // // //     } finally {
// // // // // // // // //       setIsUploading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="upload-content">
// // // // // // // // //       <h2>Upload Content</h2>

// // // // // // // // //       <form onSubmit={handleSubmit} className="upload-form">
// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Title</label>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={title}
// // // // // // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // // // // // //             placeholder="Enter video title"
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Description</label>
// // // // // // // // //           <textarea
// // // // // // // // //             value={description}
// // // // // // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // // // // // //             placeholder="Enter video description"
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Video (optional)</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="video/*"
// // // // // // // // //             onChange={handleVideoChange}
// // // // // // // // //             required
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Audio (optional)</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="audio/*"
// // // // // // // // //             onChange={handleAudioChange}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         {/* New Image upload field */}
// // // // // // // // //         <div className="form-group">
// // // // // // // // //           <label>Upload Image (optional)</label>
// // // // // // // // //           <input
// // // // // // // // //             type="file"
// // // // // // // // //             accept="image/*"
// // // // // // // // //             onChange={handleImageChange}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         <button type="submit" disabled={isUploading}>
// // // // // // // // //           {isUploading ? 'Uploading...' : 'Upload Content'}
// // // // // // // // //         </button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default UploadContent;


// // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { storage } from "../../firebase";
// // // // // // // // import { storage } from '../../firebase';
// // // // // // // // import { ref, uploadBytes } from "firebase/storage";
// // // // // // // // import { v4 as uuidv4 } from 'uuid';
// // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // import './UploadContent.css';

// // // // // // // // import videoIcon from "../../assets/video-icon.png"
// // // // // // // // import imgIcon from "../../assets/img-icon.png"
// // // // // // // // import audioicon from "../../assets/audio-icon.png"

// // // // // // // // const UploadContent = () => {
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const [videoFile, setVideoFile] = useState(null);
// // // // // // // //   const [imageFile, setImageFile] = useState(null);
// // // // // // // //   const [audioFile, setAudioFile] = useState(null);
// // // // // // // //   const [title, setTitle] = useState('');
// // // // // // // //   const [description, setDescription] = useState('');
// // // // // // // //   const [isUploading, setIsUploading] = useState(false);

// // // // // // // //   const handleVideoChange = (e) => {
// // // // // // // //     setVideoFile(e.target.files[0]);
// // // // // // // //   };

// // // // // // // //   const handleImageChange = (e) => {
// // // // // // // //     setImageFile(e.target.files[0]);
// // // // // // // //   };

// // // // // // // //   const handleAudioChange = (e) => {
// // // // // // // //     setAudioFile(e.target.files[0]);
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     if (!title || !description || (!videoFile && !imageFile && !audioFile)) {
// // // // // // // //       alert('Please fill in all fields and select at least one file');
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setIsUploading(true);

// // // // // // // //     try {
// // // // // // // //       let videoUrl = '';
// // // // // // // //       if (videoFile) {
// // // // // // // //         const videoRef = ref(storage, `videos/${uuidv4()}`);
// // // // // // // //         await uploadBytes(videoRef, videoFile);
// // // // // // // //         videoUrl = await videoRef.getDownloadURL();
// // // // // // // //       }

// // // // // // // //       let imageUrl = '';
// // // // // // // //       if (imageFile) {
// // // // // // // //         const imageRef = ref(storage, `images/${uuidv4()}`);
// // // // // // // //         await uploadBytes(imageRef, imageFile);
// // // // // // // //         imageUrl = await imageRef.getDownloadURL();
// // // // // // // //       }

// // // // // // // //       let audioUrl = '';
// // // // // // // //       if (audioFile) {
// // // // // // // //         const audioRef = ref(storage, `audio/${uuidv4()}`);
// // // // // // // //         await uploadBytes(audioRef, audioFile);
// // // // // // // //         audioUrl = await audioRef.getDownloadURL();
// // // // // // // //       }

// // // // // // // //       const contentData = {
// // // // // // // //         title,
// // // // // // // //         description,
// // // // // // // //         videoUrl,
// // // // // // // //         imageUrl,
// // // // // // // //         audioUrl,
// // // // // // // //         uploadedAt: new Date(),
// // // // // // // //       };

// // // // // // // //       console.log('Content data:', contentData);

// // // // // // // //       alert('Upload successful!');
// // // // // // // //       navigate('/home');
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Upload failed:', error);
// // // // // // // //       alert('Upload failed, please try again');
// // // // // // // //     } finally {
// // // // // // // //       setIsUploading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="upload-content">
// // // // // // // //       <h2>Upload Content</h2>

// // // // // // // //       <form onSubmit={handleSubmit} className="upload-form">
// // // // // // // //         <div className="form-group">
// // // // // // // //           <label>Title</label>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             value={title}
// // // // // // // //             onChange={(e) => setTitle(e.target.value)}
// // // // // // // //             placeholder="Enter content title"
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         <div className="form-group">
// // // // // // // //           <label>Description</label>
// // // // // // // //           <textarea
// // // // // // // //             value={description}
// // // // // // // //             onChange={(e) => setDescription(e.target.value)}
// // // // // // // //             placeholder="Enter content description"
// // // // // // // //             required
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         <div className="form-group">
// // // // // // // //           <label>Uploads</label>
// // // // // // // //           <div className='icons'>
// // // // // // // //           <div className="upload-icons-container">
// // // // // // // //             <div className="upload-icon" onClick={() => document.getElementById('video-input').click()}>
// // // // // // // //               <img src={videoIcon} alt="Upload Video" />
// // // // // // // //             </div>
// // // // // // // //             <div className="upload-icon" onClick={() => document.getElementById('image-input').click()}>
// // // // // // // //               <img src={imgIcon} alt="Upload Image" />
// // // // // // // //             </div>
// // // // // // // //             <div className="upload-icon" onClick={() => document.getElementById('audio-input').click()}>
// // // // // // // //               <img src={audioicon} alt="Upload Audio" />
// // // // // // // //             </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <input
// // // // // // // //             id="video-input"
// // // // // // // //             type="file"
// // // // // // // //             accept="video/*"
// // // // // // // //             style={{ display: 'none' }}
// // // // // // // //             onChange={handleVideoChange}
// // // // // // // //           />
// // // // // // // //           <input
// // // // // // // //             id="image-input"
// // // // // // // //             type="file"
// // // // // // // //             accept="image/*"
// // // // // // // //             style={{ display: 'none' }}
// // // // // // // //             onChange={handleImageChange}
// // // // // // // //           />
// // // // // // // //           <input
// // // // // // // //             id="audio-input"
// // // // // // // //             type="file"
// // // // // // // //             accept="audio/*"
// // // // // // // //             style={{ display: 'none' }}
// // // // // // // //             onChange={handleAudioChange}
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         <button type="submit" disabled={isUploading}>
// // // // // // // //           {isUploading ? 'Uploading...' : 'Upload Content'}
// // // // // // // //         </button>
// // // // // // // //       </form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default UploadContent;

// // // // // // // // // good
// // // // // // // // import { useState } from 'react';
// // // // // // // // import axios from 'axios';

// // // // // // // // const UploadContent = () => {
// // // // // // // //   const [file, setFile] = useState(null);
// // // // // // // //   const [uploadedUrl, setUploadedUrl] = useState("");

// // // // // // // //   const handleFileChange = (e) => {
// // // // // // // //     const selectedFile = e.target.files[0];
// // // // // // // //     if (selectedFile) {
// // // // // // // //       setFile(selectedFile);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleUpload = async () => {
// // // // // // // //     if (!file) return;

// // // // // // // //     const formData = new FormData();
// // // // // // // //     formData.append('file', file);

// // // // // // // //     try {
// // // // // // // //       const response = await axios.post('http://localhost:3001/upload', formData, {
// // // // // // // //         headers: { 'Content-Type': 'multipart/form-data' },
// // // // // // // //       });
// // // // // // // //       const url = `http://localhost:3001${response.data.filePath}`;
// // // // // // // //       console.log('File uploaded to:', url);
// // // // // // // //       setUploadedUrl(url);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error uploading file:', error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: '20px' }}>
// // // // // // // //       <h2>Upload a File</h2>
// // // // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // // // //       <button onClick={handleUpload} style={{ marginLeft: '10px' }}>Upload</button>

// // // // // // // //       {uploadedUrl && (
// // // // // // // //         <div style={{ marginTop: '20px' }}>
// // // // // // // //           <p><strong>File uploaded:</strong></p>
// // // // // // // //           {uploadedUrl.endsWith('.mp4') ? (
// // // // // // // //             <video width="320" height="240" controls>
// // // // // // // //               <source src={uploadedUrl} type="video/mp4" />
// // // // // // // //               Your browser does not support the video tag.
// // // // // // // //             </video>
// // // // // // // //           ) : (
// // // // // // // //             <img src={uploadedUrl} alt="Uploaded File" width="320" />
// // // // // // // //           )}
// // // // // // // //           <p>
// // // // // // // //             <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">{uploadedUrl}</a>
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default UploadContent;





// // // // // // // import { useState, useEffect } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import { Trash2, CloudUpload } from 'lucide-react';

// // // // // // // const UploadContent = () => {
// // // // // // //   const [file, setFile] = useState(null);
// // // // // // //   const [uploadedUrl, setUploadedUrl] = useState("");
// // // // // // //   const [filesList, setFilesList] = useState([]);

// // // // // // //   const fetchFiles = async () => {
// // // // // // //     const res = await axios.get('http://localhost:3001/uploads');
// // // // // // //     setFilesList(res.data);
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     fetchFiles();
// // // // // // //   }, []);

// // // // // // //   const handleFileChange = (e) => {
// // // // // // //     const selectedFile = e.target.files[0];
// // // // // // //     if (selectedFile) setFile(selectedFile);
// // // // // // //   };

// // // // // // //   const handleUpload = async () => {
// // // // // // //     if (!file) return;
// // // // // // //     const formData = new FormData();
// // // // // // //     formData.append('file', file);

// // // // // // //     try {
// // // // // // //       const response = await axios.post('http://localhost:3001/upload', formData, {
// // // // // // //         headers: { 'Content-Type': 'multipart/form-data' },
// // // // // // //       });
// // // // // // //       setUploadedUrl(`http://localhost:3001${response.data.filePath}`);
// // // // // // //       fetchFiles(); // Refresh list
// // // // // // //       setFile(null); // Reset input
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Upload failed:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDelete = async (id) => {
// // // // // // //     try {
// // // // // // //       await axios.delete(`http://localhost:3001/uploads/${id}`);
// // // // // // //       fetchFiles();
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Delete failed:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // // // //       <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
// // // // // // //         <h2 className="text-xl font-semibold mb-4">Upload New Content</h2>

// // // // // // //         <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-xl">
// // // // // // //           <CloudUpload className="w-10 h-10 text-gray-400 mb-2" />
// // // // // // //           <p className="text-gray-500">Choose file to upload</p>
// // // // // // //           <input type="file" onChange={handleFileChange} className="my-2" />
// // // // // // //           {file && (
// // // // // // //             <button
// // // // // // //               onClick={handleUpload}
// // // // // // //               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
// // // // // // //             >
// // // // // // //               Upload
// // // // // // //             </button>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {uploadedUrl && (
// // // // // // //           <div className="mt-4 text-green-600">
// // // // // // //             Uploaded to:{" "}
// // // // // // //             <a href={uploadedUrl} target="_blank" rel="noreferrer" className="underline">
// // // // // // //               {uploadedUrl}
// // // // // // //             </a>
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         <h3 className="mt-6 text-lg font-medium">Uploaded Files</h3>
// // // // // // //         <div className="space-y-4 mt-4">
// // // // // // //           {filesList.map(file => (
// // // // // // //             <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
// // // // // // //               <div className="flex items-center space-x-4">
// // // // // // //                 {file.type.includes("image") ? (
// // // // // // //                   <img src={`http://localhost:3001${file.filePath}`} alt="" className="w-16 h-16 rounded" />
// // // // // // //                 ) : (
// // // // // // //                   <video src={`http://localhost:3001${file.filePath}`} className="w-16 h-16 rounded" controls />
// // // // // // //                 )}
// // // // // // //                 <div>
// // // // // // //                   <p className="text-sm font-medium">{file.filename}</p>
// // // // // // //                   <a href={`http://localhost:3001${file.filePath}`} className="text-blue-500 text-xs underline" target="_blank" rel="noreferrer">
// // // // // // //                     View
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <button onClick={() => handleDelete(file.id)} className="text-red-600 hover:text-red-800">
// // // // // // //                 <Trash2 />
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default UploadContent;



// // // // // // import { useState } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const UploadContent = () => {
// // // // // //   const [file, setFile] = useState(null);
// // // // // //   const [progress, setProgress] = useState(0); // Track progress
// // // // // //   const [uploadedUrl, setUploadedUrl] = useState('');

// // // // // //   const handleFileChange = (e) => {
// // // // // //     const selectedFile = e.target.files[0];
// // // // // //     if (selectedFile) {
// // // // // //       setFile(selectedFile);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleUpload = async () => {
// // // // // //     if (!file) return;

// // // // // //     const formData = new FormData();
// // // // // //     formData.append('file', file);

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         'http://localhost:3001/upload', 
// // // // // //         formData, 
// // // // // //         {
// // // // // //           headers: { 'Content-Type': 'multipart/form-data' },
// // // // // //           onUploadProgress: (progressEvent) => {
// // // // // //             const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
// // // // // //             setProgress(percent); // Update progress
// // // // // //           }
// // // // // //         }
// // // // // //       );
// // // // // //       setUploadedUrl(`http://localhost:3001${response.data.filePath}`);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error uploading file:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <input type="file" onChange={handleFileChange} />
// // // // // //       <button onClick={handleUpload}>Upload</button>

// // // // // //       {/* Show progress bar */}
// // // // // //       {progress > 0 && (
// // // // // //         <div className="w-full bg-gray-200 rounded h-2 mt-2">
// // // // // //           <div className="bg-red-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Show uploaded URL */}
// // // // // //       {uploadedUrl && (
// // // // // //         <div>
// // // // // //           <p>File uploaded:</p>
// // // // // //           <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">{uploadedUrl}</a>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UploadContent;





// // // // // good
// // // // import React from "react";
// // // // import "./UploadContent.css";
// // // // import { FaCloudUploadAlt } from "react-icons/fa";

// // // // const UploadContent = () => {
// // // //   return (
// // // //     <div className="upload-page">
// // // //       <div className="upload-card">
// // // //         <FaCloudUploadAlt className="upload-icon" />
// // // //         <h2>Upload your video</h2>
// // // //         <p>Video must be less than 15 minutes and follow community guidelines.</p>
// // // //         <button className="upload-btn">Select File</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UploadContent;



// // // import React, { useRef } from "react";
// // // import "./UploadContent.css";
// // // import { FaCloudUploadAlt } from "react-icons/fa";

// // // const UploadContent = () => {
// // //   const fileInputRef = useRef(null);

// // //   const handleButtonClick = () => {
// // //     fileInputRef.current.click(); // open file selector
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       console.log("Selected file:", file);
// // //       // You can upload it using axios or show a preview here
// // //     }
// // //   };

// // //   return (
// // //     <div className="upload-page">
// // //       <div className="upload-card">
// // //         <FaCloudUploadAlt className="upload-icon" />
// // //         <h2>Upload your video</h2>
// // //         <p>Video must be less than 15 minutes and follow community guidelines.</p>
        
// // //         <input
// // //           type="file"
// // //           ref={fileInputRef}
// // //           style={{ display: "none" }}
// // //           accept="video/*,image/*"
// // //           onChange={handleFileChange}
// // //         />
        
// // //         <button className="upload-btn" onClick={handleButtonClick}>
// // //           Select File
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UploadContent;



// // import React, { useRef, useState } from "react";
// // import "./UploadContent.css";
// // import { FaCloudUploadAlt } from "react-icons/fa";
// // import axios from "axios";

// // const UploadContent = () => {
// //   const fileInputRef = useRef(null);
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [message, setMessage] = useState("");

// //   const handleButtonClick = () => {
// //     fileInputRef.current.click(); // Open file selector
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setSelectedFile(file);
// //       setMessage(""); // Clear previous messages
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!selectedFile) {
// //       setMessage("Please select a file first.");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("file", selectedFile);

// //     try {
// //       const res = await axios.post("http://localhost:3001/upload", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data"
// //         }
// //       });

// //       console.log("Upload success:", res.data);
// //       setMessage("✅ File uploaded successfully!");
// //       setSelectedFile(null); // Clear after upload
// //     } catch (err) {
// //       console.error("Upload failed:", err);
// //       setMessage("❌ Upload failed. Try again.");
// //     }
// //   };

// //   return (
// //     <div className="upload-page">
// //       <div className="upload-card">
// //         <FaCloudUploadAlt className="upload-icon" />
// //         <h2>Upload your video</h2>
// //         <p>Video must be less than 15 minutes and follow community guidelines.</p>

// //         <input
// //           type="file"
// //           ref={fileInputRef}
// //           style={{ display: "none" }}
// //           accept="video/*,image/*"
// //           onChange={handleFileChange}
// //         />

// //         <button className="upload-btn" onClick={handleButtonClick}>
// //           Select File
// //         </button>

// //         {selectedFile && (
// //           <div style={{ marginTop: "15px", fontSize: "14px" }}>
// //             Selected: {selectedFile.name}
// //           </div>
// //         )}

// //         {selectedFile && (
// //           <button
// //             className="upload-btn"
// //             style={{ marginTop: "15px", backgroundColor: "#2ecc71" }}
// //             onClick={handleUpload}
// //           >
// //             Upload
// //           </button>
// //         )}

// //         {message && <p style={{ marginTop: "15px" }}>{message}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UploadContent;



// // import React, { useRef, useState } from "react";
// // import "./UploadContent.css";
// // import { FaCloudUploadAlt } from "react-icons/fa";
// // import axios from "axios";

// // const UploadContent = () => {
// //   const fileInputRef = useRef(null);
// //   const [uploading, setUploading] = useState(false);
// //   const [fileInfo, setFileInfo] = useState(null);

// //   const handleButtonClick = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("file", file);

// //     try {
// //       setUploading(true);
// //       const res = await axios.post("http://localhost:3001/upload", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       });

// //       setFileInfo(res.data); // file info from server
// //       setUploading(false);
// //     } catch (err) {
// //       console.error("Upload failed:", err);
// //       setUploading(false);
// //     }
// //   };

// //   return (
// //     <div className="upload-page">
// //       <div className="upload-card">
// //         <FaCloudUploadAlt className="upload-icon" />
// //         <h2>Upload your video</h2>
// //         <p>Video must be less than 15 minutes and follow community guidelines.</p>

// //         <input
// //           type="file"
// //           ref={fileInputRef}
// //           style={{ display: "none" }}
// //           accept="video/*,image/*"
// //           onChange={handleFileChange}
// //         />

// //         <button className="upload-btn" onClick={handleButtonClick} disabled={uploading}>
// //           {uploading ? "Uploading..." : "Select File"}
// //         </button>

// //         {fileInfo && (
// //           <div className="upload-success">
// //             <p><strong>Uploaded:</strong> {fileInfo.filename}</p>
// //             <video
// //               width="100%"
// //               controls
// //               src={`http://localhost:3001${fileInfo.filePath}`}
// //               style={{ marginTop: "10px", borderRadius: "8px" }}
// //             ></video>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UploadContent;

// // good
// import React, { useRef, useState } from "react";
// import "./UploadContent.css";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import axios from "axios";

// const UploadContent = () => {
//   const fileInputRef = useRef(null);
//   const [uploading, setUploading] = useState(false);
//   const [fileInfo, setFileInfo] = useState(null);

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       setUploading(true);
//       const res = await axios.post("http://localhost:3001/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setFileInfo(res.data); // file info from server
//       setUploading(false);
//     } catch (err) {
//       console.error("Upload failed:", err);
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="upload-page">
//       <div className="upload-card">
//         <FaCloudUploadAlt className="upload-icon" />
//         <h2>Upload your content</h2>
//         <p>File must be less than 15 minutes and follow community guidelines.</p>

//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           accept="video/*,image/*"
//           onChange={handleFileChange}
//         />

//         <button className="upload-btn" onClick={handleButtonClick} disabled={uploading}>
//           {uploading ? "Uploading..." : "Select File"}
//         </button>

//         {fileInfo && (
//           <div className="upload-success">
//             <p><strong>Uploaded:</strong> {fileInfo.filename}</p>
            
//             {/* Conditional rendering for video or image */}
//             {fileInfo.filePath.endsWith(".mp4") || fileInfo.filePath.endsWith(".mov") ? (
//               <video
//                 width="100%"
//                 controls
//                 src={`http://localhost:3001${fileInfo.filePath}`}
//                 style={{ marginTop: "10px", borderRadius: "8px" }}
//               ></video>
//             ) : (
//               <img
//                 src={`http://localhost:3001${fileInfo.filePath}`}
//                 alt="Uploaded content"
//                 style={{ marginTop: "10px", borderRadius: "8px", width: "100%" }}
//               />
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UploadContent;



import React, { useRef, useState } from "react";
import "./UploadContent.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";

const UploadContent = () => {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // To store selected file

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Open file picker
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file); // Set selected file
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploading(true);
      const res = await axios.post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFileInfo(res.data); // file info from server
      setUploading(false);
    } catch (err) {
      console.error("Upload failed:", err);
      setUploading(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-card">
        <FaCloudUploadAlt className="upload-icon" />
        <h2>Upload your content</h2>
        <p>File must be less than 15 minutes and follow community guidelines.</p>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="video/*,image/*"
          onChange={handleFileChange}
        />

        {/* "Choose File" button */}
        <button className="upload-btn" onClick={handleButtonClick} disabled={uploading}>
          {selectedFile ? `Selected: ${selectedFile.name}` : "Choose File"}
        </button>

        {/* Upload button after file is selected */}
        {selectedFile && (
          <button className="upload-btn" onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        )}

        {/* Show uploaded file information */}
        {fileInfo && (
          <div className="upload-success">
            <p><strong>Uploaded:</strong> {fileInfo.filename}</p>
            
            {/* Conditional rendering for video or image */}
            {fileInfo.filePath.endsWith(".mp4") || fileInfo.filePath.endsWith(".mov") ? (
              <video
                width="100%"
                controls
                src={`http://localhost:3001${fileInfo.filePath}`}
                style={{ marginTop: "10px", borderRadius: "8px" }}
              ></video>
            ) : (
              <img
                src={`http://localhost:3001${fileInfo.filePath}`}
                alt="Uploaded content"
                style={{ marginTop: "10px", borderRadius: "8px", width: "100%" }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadContent;
