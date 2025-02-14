// import React from 'react';
// import './Navbar.css';
// import menu_icon from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import search_icon from '../../assets/search.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';
// import { Link } from 'react-router-dom';

// const Navbar = ({ setSidebar }) => {
//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <img
//           className="menu-icon"
//           onClick={() => setSidebar(prev => !prev)}
//           src={menu_icon}
//           alt="menu"
//         />
//         <Link to={'/'}>
//           <img className="logo" src={logo} alt="YouTube Clone" />
//         </Link>
//       </div>

//       <div className="nav-middle">
//         <div className="search-box">
//           <input type="text" placeholder="Search" />
//           <img src={search_icon} alt="Search" />
//         </div>
//       </div>

//       <div className="nav-right">
//         <img src={upload_icon} alt="Upload" className="hide-on-mobile" />
//         <img src={more_icon} alt="More" className="hide-on-mobile" />
//         <img src={notification_icon} alt="Notifications" className="hide-on-mobile" />
//         <img src={profile_icon} className="user-icon" alt="Profile" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => !prev)}
          src={menu_icon}
          alt="menu"
        />
        <Link to={'/'}>
          <img className="logo" src={logo} alt="YouTube Clone" />
        </Link>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="nav-middle">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="Search" />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="nav-right">
        <img src={upload_icon} alt="Upload" className="hide-on-mobile" />
        <img src={more_icon} alt="More" className="hide-on-mobile" />
        <img src={notification_icon} alt="Notifications" className="hide-on-mobile" />
        <img src={profile_icon} className="user-icon" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
