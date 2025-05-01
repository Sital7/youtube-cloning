// // // // // // import React from 'react';
// // // // // // // import ProfileHeader from '../ProfileHeader1/ProfileHeader';
// // // // // // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // // // // // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // // // // // import Navbar from '../Navbar/Navbar';

// // // // // // const ProfilePage = () => {
// // // // // //   return (
// // // // // //     <div className="profile-page">
// // // // // //       <Navbar />
// // // // // //       <ProfileDetails />
// // // // // //       <ProfileTabs />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProfilePage;




// // // // // import React from 'react';
// // // // // import './ProfilePage.css'; // Import CSS for ProfilePage
// // // // // // import ProfileHeader from '../ProfileHeader1/ProfileHeader';
// // // // // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // // // // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // // // // import Navbar from '../Navbar/Navbar';

// // // // // const ProfilePage = () => {
// // // // //   return (
// // // // //     <div className="profile-page">
// // // // //       <Navbar />
// // // // //       <div className="profile-content">
// // // // //         <ProfileDetails />
// // // // //         <ProfileTabs />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfilePage;





// // // // // import React from 'react';
// // // // // import './ProfilePage.css'; // Import ProfilePage CSS
// // // // // // import Sidebar from '../Sidebar/Sidebar'; // Import Sidebar
// // // // // // import ProfileHeader from '../ProfileHeader1/ProfileHeader';
// // // // // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // // // // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // // // // import Navbar from '../Navbar/Navbar';
// // // // // import ProfileSidebar from '../ProfileSidebar/ProfileSidebar'

// // // // // const ProfilePage = () => {
// // // // //   return (
// // // // //     <div className="profile-page">
    
// // // // //       <Navbar />
// // // // //       <div className="profile-page-content">
      
// // // // //         <ProfileSidebar />
// // // // //         <div className="main-content">
// // // // //           <ProfileDetails />
// // // // //           <ProfileTabs />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfilePage;



// // import React from 'react';
// import './ProfilePage.css'; // Import ProfilePage CSS
// import Navbar from '../Navbar/Navbar';
// import ProfileDetails from '../ProfileDetails/ProfileDetails';
// import ProfileTabs from '../ProfileTabs/ProfileTabs';
// import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// // import ThumbnailHoverOverlay from '../ThumbnailHoverOverlay/ThumbnailHoverOverlay';
// import Thumbnail from '../Thumbnail/Thumbnail';

// const ProfilePage = () => {
//   return (
//     <div className="profile-page">
//       <Navbar /> {/* Navbar */}
      
//       <div className="profile-page-content">
//         {/* Sidebar */}
//         <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
        
//         {/* Main Content */}
//         <div className="main-content">
//           <Thumbnail />
          
//           <ProfileDetails /> {/* Profile Details */}
//           <ProfileTabs /> {/* Profile Tabs */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;




// // import './ProfilePage.css';
// // import Navbar from '../Navbar/Navbar';
// // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// // import Thumbnail from '../Thumbnail/Thumbnail';

// // const ProfilePage = () => {
// //   return (
// //     <div className="profile-page">
// //       <Navbar />
// //       <div className="profile-page-content">
// //         <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
// //         <div className="main-content">
// //             <Thumbnail />
// //             <div className='profiledetails'>
// //             <ProfileDetails />
// //             </div>
// //           <ProfileTabs />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;



// // import './ProfilePage.css';
// // import Navbar from '../Navbar/Navbar';
// // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// // import Thumbnail from '../Thumbnail/Thumbnail';

// // const ProfilePage = () => {
// //   return (
// //     <div className="profile-page">
// //       <Navbar />
// //       <div className="profile-page-content">
// //         <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
// //         <div className="main-content">
// //           <div className="card-section">
// //             <div className="thumbnailcard">
// //               <Thumbnail />
// //             </div>
// //             <div className="card">
// //               <ProfileDetails />
// //             </div>
// //             <div className="card">
// //               <ProfileTabs />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;



// // import './ProfilePage.css';
// // import Navbar from '../Navbar/Navbar';
// // import ProfileDetails from '../ProfileDetails/ProfileDetails';
// // import ProfileTabs from '../ProfileTabs/ProfileTabs';
// // import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// // import Thumbnail from '../Thumbnail/Thumbnail';

// // const ProfilePage = () => {
// //   return (
// //     <div className="profile-page">
// //       <Navbar />
// //       <div className="profile-page-content">
// //         <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
// //         <div className="main-content">
// //           <div className="card-section">
// //             <div className="thumbnailcard">
// //               <Thumbnail />
// //             </div>
// //             <div className="card">
// //               <ProfileDetails />
// //             </div>
// //             <div className="card">
// //               <ProfileTabs />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;



// // correct but its css is effecting other page
// import './ProfilePage.css'; // Import ProfilePage CSS
// import Navbar from '../Navbar/Navbar';
// import ProfileDetails from '../ProfileDetails/ProfileDetails';
// import ProfileTabs from '../ProfileTabs/ProfileTabs';
// import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
// import Thumbnail from '../Thumbnail/Thumbnail';

// const ProfilePage = () => {
//   return (
//     <div className="profile-page">
//       <Navbar /> {/* Navbar */}
      
//       <div className="profile-page-content">
//         {/* Sidebar */}
//         <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
        
//         {/* Main Content */}
//         <div className="main-content">
//           {/* Thumbnail Section */}
//           <div className="thumbnail-card">
//             <Thumbnail />
//           </div>

//           <div className="card-section">
//             {/* Profile Details */}
//             <div className="card1">
//               {/* <div className='profilecard'><ProfileDetails /></div> */}
//               <ProfileDetails />
              
//             </div>
//             {/* Profile Tabs */}
//             <div className="card">
//               <ProfileTabs />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;




import Navbar from '../Navbar/Navbar';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ProfileTabs from '../ProfileTabs/ProfileTabs';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import Thumbnail from '../Thumbnail/Thumbnail';
import styles from './ProfilePage.module.css'; 

const ProfilePage = () => {
  return (
    <div className={styles['profile-page-container']}>
      <Navbar />
      
      <div className={styles['profile-page-content']}>
        <ProfileSidebar sidebar={true} category={0} setCategory={() => {}} />
        
        <div className={styles['main-content']}>
          <div className={styles['thumbnail-card']}>
            <Thumbnail />
          </div>

          <div className={styles['card-section']}>
            <div className={styles['card1']}>
              <ProfileDetails />
            </div>
            <div className={styles['card']}>
              <ProfileTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
