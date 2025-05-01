
// import React, { useState } from "react";

// const EditProfileForm = ({ currentName, onSave, onCancel, onFileChange }) => {
//   const [newUsername, setNewUsername] = useState(currentName || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(newUsername);
//   };

//   return (
//     <form className="edit-profile-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={newUsername}
//         onChange={(e) => setNewUsername(e.target.value)}
//         placeholder="Enter new name"
//       />
//       <input type="file" accept="image/*" onChange={onFileChange} />
//       <div style={{ marginTop: "10px" }}>
//         <button type="submit">Save Changes</button>
//         <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default EditProfileForm;






import React, { useState } from 'react';
import './EditMetadata.css';

const EditMetadata = ({ metadata, onSave }) => {
  const [title, setTitle] = useState(metadata.title || '');
  const [description, setDescription] = useState(metadata.description || '');
  const [tags, setTags] = useState(metadata.tags || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, tags });
  };

  return (
    <form className="metadata-form" onSubmit={handleSubmit}>
      <h3>Edit Metadata</h3>

      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      ></textarea>

      <label>Tags (comma separated):</label>
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button type="submit">Save Metadata</button>
    </form>
  );
};

export default EditMetadata;
