import React, { useState } from 'react';

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle video upload logic here
    console.log('Uploading video', { title, description, videoFile });
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input type="file" onChange={handleVideoChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadVideo;
