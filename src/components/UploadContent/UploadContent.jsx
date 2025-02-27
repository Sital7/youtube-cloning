// // src/components/UploadContent.jsx
// import React, { useState } from 'react';
// import { storage, ref, uploadBytes } from '../firebase'; // Firebase storage
// import {  storageRef, uploadFile } from "../../firebase";

// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
// import './UploadContent.css';

// const UploadContent = () => {
//   const navigate = useNavigate();

//   const [videoFile, setVideoFile] = useState(null);
//   const [audioFile, setAudioFile] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isUploading, setIsUploading] = useState(false);

//   const handleVideoChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleAudioChange = (e) => {
//     setAudioFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description || !videoFile) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsUploading(true);

//     try {
//       // Upload video
//       const videoRef = ref(storage, `videos/${uuidv4()}`);
//       await uploadBytes(videoRef, videoFile);

//       let audioUrl = '';
//       if (audioFile) {
//         // Upload audio if provided
//         const audioRef = ref(storage, `audio/${uuidv4()}`);
//         await uploadBytes(audioRef, audioFile);
//         audioUrl = await audioRef.getDownloadURL();
//       }

//       // Save data to backend or database (simulated here)
//       const videoData = {
//         title,
//         description,
//         videoUrl: `videos/${videoFile.name}`,
//         audioUrl,
//         uploadedAt: new Date(),
//       };

//       // Simulate sending data to a server or database
//       console.log('Video data:', videoData);

//       // Redirect to another page or show success message
//       alert('Upload successful!');
//       navigate('/home'); // Navigate to home after upload
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed, please try again');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="upload-content">
//       <h2>Upload Content</h2>

//       <form onSubmit={handleSubmit} className="upload-form">
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter video title"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter video description"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Upload Video</label>
//           <input
//             type="file"
//             accept="video/*"
//             onChange={handleVideoChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Upload Audio (optional)</label>
//           <input
//             type="file"
//             accept="audio/*"
//             onChange={handleAudioChange}
//           />
//         </div>

//         <button type="submit" disabled={isUploading}>
//           {isUploading ? 'Uploading...' : 'Upload Content'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadContent;



// correct
// import React, { useState } from 'react';
// import { storage } from "../../firebase"; // Correct import for Firebase storage
// import { ref, uploadBytes } from "firebase/storage"; // Correct Firebase storage functions
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
// import './UploadContent.css';

// const UploadContent = () => {
//   const navigate = useNavigate();

//   const [videoFile, setVideoFile] = useState(null);
//   const [audioFile, setAudioFile] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isUploading, setIsUploading] = useState(false);

//   const handleVideoChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleAudioChange = (e) => {
//     setAudioFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description || !videoFile) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsUploading(true);

//     try {
//       // Upload video
//       const videoRef = ref(storage, `videos/${uuidv4()}`);
//       await uploadBytes(videoRef, videoFile);

//       let audioUrl = '';
//       if (audioFile) {
//         // Upload audio if provided
//         const audioRef = ref(storage, `audio/${uuidv4()}`);
//         await uploadBytes(audioRef, audioFile);
//         audioUrl = await audioRef.getDownloadURL();
//       }

//       // Save data to backend or database (simulated here)
//       const videoData = {
//         title,
//         description,
//         videoUrl: `videos/${videoFile.name}`,
//         audioUrl,
//         uploadedAt: new Date(),
//       };

//       // Simulate sending data to a server or database
//       console.log('Video data:', videoData);

//       // Redirect to another page or show success message
//       alert('Upload successful!');
//       navigate('/home'); // Navigate to home after upload
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed, please try again');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="upload-content">
//       <h2>Upload Content</h2>

//       <form onSubmit={handleSubmit} className="upload-form">
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter video title"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter video description"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Upload Video</label>
//           <input
//             type="file"
//             accept="video/*"
//             onChange={handleVideoChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Upload Audio (optional)</label>
//           <input
//             type="file"
//             accept="audio/*"
//             onChange={handleAudioChange}
//           />
//         </div>

//         <button type="submit" disabled={isUploading}>
//           {isUploading ? 'Uploading...' : 'Upload Content'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadContent;




// correct 1
// import React, { useState } from 'react';
// import { storage } from "../../firebase"; // Correct import for Firebase storage
// import { ref, uploadBytes } from "firebase/storage"; // Correct Firebase storage functions
// import { v4 as uuidv4 } from 'uuid';
// import { useNavigate } from 'react-router-dom';
// import './UploadContent.css';

// const UploadContent = () => {
//   const navigate = useNavigate();

//   const [videoFile, setVideoFile] = useState(null);
//   const [audioFile, setAudioFile] = useState(null);
//   const [imageFile, setImageFile] = useState(null); // Added state for image
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [isUploading, setIsUploading] = useState(false);

//   const handleVideoChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleAudioChange = (e) => {
//     setAudioFile(e.target.files[0]);
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]); // Set the image file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description || !videoFile) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsUploading(true);

//     try {
//       // Upload video
//       const videoRef = ref(storage, `videos/${uuidv4()}`);
//       await uploadBytes(videoRef, videoFile);

//       let audioUrl = '';
//       if (audioFile) {
//         // Upload audio if provided
//         const audioRef = ref(storage, `audio/${uuidv4()}`);
//         await uploadBytes(audioRef, audioFile);
//         audioUrl = await audioRef.getDownloadURL();
//       }

//       let imageUrl = '';
//       if (imageFile) {
//         // Upload image if provided
//         const imageRef = ref(storage, `images/${uuidv4()}`);
//         await uploadBytes(imageRef, imageFile);
//         imageUrl = await imageRef.getDownloadURL();
//       }

//       // Save data to backend or database (simulated here)
//       const videoData = {
//         title,
//         description,
//         videoUrl: `videos/${videoFile.name}`,
//         audioUrl,
//         imageUrl, // Save the image URL as well
//         uploadedAt: new Date(),
//       };

//       // Simulate sending data to a server or database
//       console.log('Video data:', videoData);

//       // Redirect to another page or show success message
//       alert('Upload successful!');
//       navigate('/home'); // Navigate to home after upload
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed, please try again');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div className="upload-content">
//       <h2>Upload Content</h2>

//       <form onSubmit={handleSubmit} className="upload-form">
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter video title"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter video description"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Upload Video (optional)</label>
//           <input
//             type="file"
//             accept="video/*"
//             onChange={handleVideoChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Upload Audio (optional)</label>
//           <input
//             type="file"
//             accept="audio/*"
//             onChange={handleAudioChange}
//           />
//         </div>

//         {/* New Image upload field */}
//         <div className="form-group">
//           <label>Upload Image (optional)</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </div>

//         <button type="submit" disabled={isUploading}>
//           {isUploading ? 'Uploading...' : 'Upload Content'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadContent;


import React, { useState } from 'react';
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './UploadContent.css';

import videoIcon from "../../assets/video-icon.png"
import imgIcon from "../../assets/img-icon.png"
import audioicon from "../../assets/audio-icon.png"

const UploadContent = () => {
  const navigate = useNavigate();

  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAudioChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || (!videoFile && !imageFile && !audioFile)) {
      alert('Please fill in all fields and select at least one file');
      return;
    }

    setIsUploading(true);

    try {
      let videoUrl = '';
      if (videoFile) {
        const videoRef = ref(storage, `videos/${uuidv4()}`);
        await uploadBytes(videoRef, videoFile);
        videoUrl = await videoRef.getDownloadURL();
      }

      let imageUrl = '';
      if (imageFile) {
        const imageRef = ref(storage, `images/${uuidv4()}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await imageRef.getDownloadURL();
      }

      let audioUrl = '';
      if (audioFile) {
        const audioRef = ref(storage, `audio/${uuidv4()}`);
        await uploadBytes(audioRef, audioFile);
        audioUrl = await audioRef.getDownloadURL();
      }

      const contentData = {
        title,
        description,
        videoUrl,
        imageUrl,
        audioUrl,
        uploadedAt: new Date(),
      };

      console.log('Content data:', contentData);

      alert('Upload successful!');
      navigate('/home');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed, please try again');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-content">
      <h2>Upload Content</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter content title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter content description"
            required
          />
        </div>

        <div className="form-group">
          <label>Uploads</label>
          <div className='icons'>
          <div className="upload-icons-container">
            <div className="upload-icon" onClick={() => document.getElementById('video-input').click()}>
              <img src={videoIcon} alt="Upload Video" />
            </div>
            <div className="upload-icon" onClick={() => document.getElementById('image-input').click()}>
              <img src={imgIcon} alt="Upload Image" />
            </div>
            <div className="upload-icon" onClick={() => document.getElementById('audio-input').click()}>
              <img src={audioicon} alt="Upload Audio" />
            </div>
            </div>
          </div>
          <input
            id="video-input"
            type="file"
            accept="video/*"
            style={{ display: 'none' }}
            onChange={handleVideoChange}
          />
          <input
            id="image-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <input
            id="audio-input"
            type="file"
            accept="audio/*"
            style={{ display: 'none' }}
            onChange={handleAudioChange}
          />
        </div>

        <button type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload Content'}
        </button>
      </form>
    </div>
  );
};

export default UploadContent;
