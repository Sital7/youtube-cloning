// import React from 'react';

// const ProfileDetails = () => {
//   return (
//     <div className="profile-details">
//       <div className="profile-avatar">
//         <img src="path/to/profile-pic.jpg" alt="User Avatar" />
//       </div>
//       <div className="profile-info">
//         <h2>User Name</h2>
//         <p>@username</p>
//       </div>
//     </div>
//   );
// };

// export default ProfileDetails;



import React from 'react';
import './ProfileDetails.css'; // Make sure to create this file and import it

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <div className="profile-avatar">
        <img src="path/to/profile-pic.jpg" alt="User Avatar" className="avatar-img" />
      </div>
      <div className="profile-info">
        <h2 className="user-name">User Name</h2>
        <p className="user-username">@username</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
