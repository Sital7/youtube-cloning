// import React from 'react';
// import Recommended1 from '../Recommended1/Recommended1';
// import Shorts from '../Shots/Shorts';
// import './ProfileHome.css';

// const shorts = [
//   { id: 101, title: 'Short 1', thumbnail: 'https://via.placeholder.com/150x250' },
//   { id: 102, title: 'Short 2', thumbnail: 'https://via.placeholder.com/150x250' },
//   { id: 103, title: 'Short 3', thumbnail: 'https://via.placeholder.com/150x250' },
//   { id: 104, title: 'Short 4', thumbnail: 'https://via.placeholder.com/150x250' },
// ];

// const ProfileHome = () => {
//   return (
//     <div className="profile-home">
//       <h2>For You</h2>
//       <Recommended1 categoryId={1} />
//       <hr />

//       <h2>Shorts</h2>
//       <Shorts /> 
//       <div className="shorts-container">
//         {shorts.map((short) => (
//           <div key={short.id} className="short-item">
//             <img src={short.thumbnail} alt={short.title} />
//             <p>{short.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileHome;


import React from 'react';
import Recommended1 from '../Recommended1/Recommended1';
import Shorts from '../Shots/Shorts';
import './ProfileHome.css';
import Profileshorts from '../Profileshorts/Profileshorts';
// import { SiYoutubeshorts } from "react-icons/si";


const ProfileHome = () => {
  return (
    <div className="profile-home">
      <h2>For You</h2>
      <Recommended1 categoryId={1} />
      <hr />

      <h2>Shorts</h2>
      <Profileshorts />
      {/* <Shorts /> */}
      {/* <div className="shorts-scroll-wrapper">
        <div className="shorts-scroll-container"> */}
          {/* <SiYoutubeshorts size={24} /> */}
          {/* <Shorts /> */}
        {/* </div>
      </div> */}
    </div>
  );
};

export default ProfileHome;
