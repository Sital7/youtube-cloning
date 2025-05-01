// import { useState } from 'react';
// import axios from 'axios';

// const EditMetadata = ({ fileId, currentTitle, currentTags, currentDescription, onClose }) => {
//   const [title, setTitle] = useState(currentTitle);
//   const [tags, setTags] = useState(currentTags);
//   const [description, setDescription] = useState(currentDescription);

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:3001/uploads/${fileId}`, {
//         title,
//         tags,
//         description
//       });
//       onClose();  // Close modal or form
//       alert('Metadata updated successfully!');
//     } catch (error) {
//       console.error('Error updating metadata:', error);
//     }
//   };

//   return (
//     <div className="modal">
//       <h2>Edit Metadata</h2>
//       <input 
//         type="text" 
//         value={title} 
//         onChange={(e) => setTitle(e.target.value)} 
//         placeholder="Title" 
//       />
//       <input 
//         type="text" 
//         value={tags} 
//         onChange={(e) => setTags(e.target.value)} 
//         placeholder="Tags (comma separated)" 
//       />
//       <textarea 
//         value={description} 
//         onChange={(e) => setDescription(e.target.value)} 
//         placeholder="Description"
//       />
//       <button onClick={handleUpdate}>Save</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// };

// export default EditMetadata;



import { useState } from 'react';
import axios from 'axios';

const EditMetadata = ({ fileId, currentTitle, currentTags, currentDescription, onClose }) => {
  const [title, setTitle] = useState(currentTitle);
  const [tags, setTags] = useState(currentTags);
  const [description, setDescription] = useState(currentDescription);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/uploads/${fileId}`, {
        title,
        tags,
        description
      });
      onClose(); 
      alert('Metadata updated successfully!');
    } catch (error) {
      console.error('Error updating metadata:', error);
    }
  };

  return (
    <div className="modal">
      <h2>Edit Metadata</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <input 
        type="text" 
        value={tags} 
        onChange={(e) => setTags(e.target.value)} 
        placeholder="Tags (comma separated)" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description"
      />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditMetadata;
