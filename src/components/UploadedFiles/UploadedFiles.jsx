import React, { useEffect, useState } from 'react';
import './UploadedFiles.css';
import axios from 'axios';

const UploadedFiles = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/uploads');
        setFiles(response.data);
      } catch (error) {
        console.error('Failed to fetch uploaded files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="uploaded-files-container">
      <h3>Uploaded Files</h3>
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index}>
            <a href={`http://localhost:3001${file.path}`} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadedFiles;
