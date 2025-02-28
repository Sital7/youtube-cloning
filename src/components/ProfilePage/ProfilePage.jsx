// // import React from 'react';
// // // import ProfileHeader from '../ProfileHeader1/ProfileHeader';
// // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // import Navbar from '../Navbar/Navbar';

// // const ProfilePage = () => {
// //   return (
// //     <div className="profile-page">
// //       <Navbar />
// //       <ProfileDetails />
// //       <ProfileTabs />
// //     </div>
// //   );
// // };

// // export default ProfilePage;




// import React from 'react';
// import './ProfilePage.css'; // Import CSS for ProfilePage
// // import ProfileHeader from '../ProfileHeader1/ProfileHeader';
// import ProfileDetails from '../ProfileDetails/ProfileDetails';
// import ProfileTabs from '../ProfileTabs/ProfileTabs';
// import Navbar from '../Navbar/Navbar';

// const ProfilePage = () => {
//   return (
//     <div className="profile-page">
//       <Navbar />
//       <div className="profile-content">
//         <ProfileDetails />
//         <ProfileTabs />
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;





// import React from 'react';
// import './ProfilePage.css'; // Import ProfilePage CSS
// // import Sidebar from '../Sidebar/Sidebar'; // Import Sidebar
// // import ProfileHeader from '../ProfileHeader1/ProfileHeader';
// import ProfileDetails from '../ProfileDetails/ProfileDetails';
// import ProfileTabs from '../ProfileTabs/ProfileTabs';
// import Navbar from '../Navbar/Navbar';
// import ProfileSidebar from '../ProfileSidebar/ProfileSidebar'

// const ProfilePage = () => {
//   return (
//     <div className="profile-page">
    
//       <Navbar />
//       <div className="profile-page-content">
      
//         <ProfileSidebar />
//         <div className="main-content">
//           <ProfileDetails />
//           <ProfileTabs />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



import React from 'react';
import './ProfilePage.css'; // Import ProfilePage CSS
import Navbar from '../Navbar/Navbar';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileTabs from '../ProfileTabs/ProfileTabs';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Navbar /> {/* Navbar */}
      
      <div className="profile-page-content">
        {/* Sidebar */}
        <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
        
        {/* Main Content */}
        <div className="main-content">
          <ProfileDetails /> {/* Profile Details */}
          <ProfileTabs /> {/* Profile Tabs */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
