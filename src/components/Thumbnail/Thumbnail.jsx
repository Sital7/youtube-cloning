// // import React, { useState } from 'react';
// // import './Thumbnail.css';

// // const Thumbnail = () => {
// //   const [image, setImage] = useState('https://via.placeholder.com/800x400');
// //   const [isEditing, setIsEditing] = useState(false);

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImage(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleEditClick = () => {
// //     setIsEditing(true);
// //   };

// //   return (
// //     <div className="thumbnail-page">
// //       <div className="thumbnail-container">
// //         <div className="thumbnail">
// //           <img src={image} alt="Thumbnail" className="thumbnail-image" />
// //           <button className="edit-button" onClick={handleEditClick}>
// //             Edit Cover Photo
// //           </button>
// //           {isEditing && (
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={handleImageChange}
// //               className="file-input"
// //             />
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Thumbnail;


// // correst code 
// import React, { useState } from 'react';
// import './Thumbnail.css';

// const Thumbnail = () => {
//   const [image, setImage] = useState('https://via.placeholder.com/800x400');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   return (
//     <div className="thumbnail-container">
//       <div className="thumbnail">
//         <img src={image} alt="Thumbnail" className="thumbnail-image" />
//         <button className="edit-button" onClick={handleEditClick}>
//           Edit Cover Photo
//         </button>
//         {isEditing && (
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="file-input"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Thumbnail;




// best code correct 
import React, { useState, useEffect } from 'react';
import './Thumbnail.css';

const Thumbnail = () => {
  const [image, setImage] = useState('https://via.placeholder.com/800x400');
  const [isEditing, setIsEditing] = useState(false);

  // Load the image from localStorage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem('thumbnailImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Store the uploaded image in localStorage
        localStorage.setItem('thumbnailImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="thumbnail-container">
      <div className="thumbnail">
        <img src={image} alt="Thumbnail" className="thumbnail-image" />
        <button className="edit-button" onClick={handleEditClick}>
          Edit Cover Photo
        </button>
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />
        )}
      </div>
    </div>
  );
};

export default Thumbnail;
