import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyUploads.css'; 

const MyUploads = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/uploads');
        setUploads(response.data);
      } catch (error) {
        console.error('Error fetching uploads', error);
      }
    };

    fetchUploads();
  }, []);

  return (
    <div className="uploads-container">
      <h1>My Uploads</h1>
      <div className="uploads-list">
        {uploads.length === 0 ? (
          <p>No uploads found</p>
        ) : (
          uploads.map((upload) => (
            <div key={upload.id} className="upload-item">
              <div className="upload-content">
                <h3>{upload.title}</h3>
                <p>{upload.description}</p>
                {upload.type.includes('image') ? (
                  <img src={upload.filePath} alt={upload.title} />
                ) : (
                  <video controls>
                    <source src={upload.filePath} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyUploads;
