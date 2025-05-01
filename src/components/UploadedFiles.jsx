// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import EditMetadata from './EditMetadata/EditMetadata';
// // import EditMetadata from './EditMetadata';

// const UploadedFiles = () => {
//   const [files, setFiles] = useState([]);
//   const [editingFile, setEditingFile] = useState(null);

//   useEffect(() => {
//     const fetchFiles = async () => {
//       const response = await axios.get('http://localhost:3001/uploads');
//       setFiles(response.data);
//     };
//     fetchFiles();
//   }, []);

//   const handleEdit = (file) => {
//     setEditingFile(file);
//   };

//   const handleCloseEdit = () => {
//     setEditingFile(null);
//   };

//   const handleDelete = async (fileId) => {
//     try {
//       await axios.delete(`http://localhost:3001/uploads/${fileId}`);
//       setFiles(files.filter(file => file.id !== fileId)); // Remove file from list
//     } catch (error) {
//       console.error('Error deleting file:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Uploaded Files</h2>
//       <ul>
//         {files.map(file => (
//           <li key={file.id}>
//             <a href={`http://localhost:3001${file.filePath}`} target="_blank" rel="noopener noreferrer">
//               {file.filename}
//             </a>
//             <button onClick={() => handleEdit(file)}>Edit</button>
//             <button onClick={() => handleDelete(file.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       {editingFile && (
//         <EditMetadata 
//           fileId={editingFile.id} 
//           currentTitle={editingFile.title} 
//           currentTags={editingFile.tags} 
//           currentDescription={editingFile.description} 
//           onClose={handleCloseEdit}
//         />
//       )}
//     </div>
//   );
// };

// export default UploadedFiles;
