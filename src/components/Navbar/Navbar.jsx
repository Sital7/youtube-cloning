// // // // import React from 'react';
// // // // import './Navbar.css';
// // // // import menu_icon from '../../assets/menu.png';
// // // // import logo from '../../assets/logo.png';
// // // // import search_icon from '../../assets/search.png';
// // // // import upload_icon from '../../assets/upload.png';
// // // // import more_icon from '../../assets/more.png';
// // // // import notification_icon from '../../assets/notification.png';
// // // // import profile_icon from '../../assets/jack.png';
// // // // import { Link } from 'react-router-dom';

// // // // const Navbar = ({ setSidebar }) => {
// // // //   return (
// // // //     <nav className="navbar">
// // // //       <div className="nav-left">
// // // //         <img
// // // //           className="menu-icon"
// // // //           onClick={() => setSidebar(prev => !prev)}
// // // //           src={menu_icon}
// // // //           alt="menu"
// // // //         />
// // // //         <Link to={'/'}>
// // // //           <img className="logo" src={logo} alt="YouTube Clone" />
// // // //         </Link>
// // // //       </div>

// // // //       <div className="nav-middle">
// // // //         <div className="search-box">
// // // //           <input type="text" placeholder="Search" />
// // // //           <img src={search_icon} alt="Search" />
// // // //         </div>
// // // //       </div>

// // // //       <div className="nav-right">
// // // //         <img src={upload_icon} alt="Upload" className="hide-on-mobile" />
// // // //         <img src={more_icon} alt="More" className="hide-on-mobile" />
// // // //         <img src={notification_icon} alt="Notifications" className="hide-on-mobile" />
// // // //         <img src={profile_icon} className="user-icon" alt="Profile" />
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;



// // correct code i should use this 
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import menu_icon from '../../assets/menu.png';
// import logo from '../../assets/logo.png';
// import search_icon from '../../assets/search.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/jack.png';

// const Navbar = ({ setSidebar }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume the user is logged in initially
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${searchQuery}`);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const toggleProfileMenu = () => {
//     setIsProfileMenuOpen(prev => !prev);
//   };

//   const handleSignOut = () => {
//     setIsLoggedIn(false);
//     setIsProfileMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Left Section */}
//       <div className="nav-left">
//         <img
//           className="menu-icon"
//           onClick={() => setSidebar(prev => !prev)}
//           src={menu_icon}
//           alt="menu"
//         />
//         <Link to="/">
//           <img className="logo" src={logo} alt="YouTube Clone" />
//         </Link>
//       </div>

//       {/* Middle Section - Search Bar */}
//       <div className="nav-middle">
//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown}
//           />
//           <img src={search_icon} alt="Search" onClick={handleSearch} />
//         </div>
//       </div>

//       {/* Right Section - Icons */}
//       <div className="nav-right">
//         <img src={upload_icon} alt="Upload" className="hide-on-mobile" />
//         <img src={more_icon} alt="More" className="hide-on-mobile" />
//         <img src={notification_icon} alt="Notifications" className="hide-on-mobile" />

//         {/* Profile Icon and Menu */}
//         <div className="profile-menu-container">
//           <img
//             src={profile_icon}
//             className="user-icon"
//             alt="Profile"
//             onClick={toggleProfileMenu}
//             aria-label="Profile Menu"
//           />

//           {isProfileMenuOpen && (
//             <div className="profile-menu">
//               {isLoggedIn ? (
//                 <>
//                   <button onClick={handleSignOut}>Sign Out</button>
//                   <Link to="/switch-account"><button>Switch Account</button></Link>
//                   <Link to="/settings"><button>Settings</button></Link>
//                   <Link to="/help"><button>Help</button></Link>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login"><button>Login</button></Link>
//                   <Link to="/signup"><button>Sign Up</button></Link>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// correct code and updated notification section 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = ({ setSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume the user is logged in initially
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(prev => !prev);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
  };

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
        <Link to="/">
          <img className="logo" src={logo} alt="YouTube Clone" />
        </Link>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="nav-middle">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <img src={search_icon} alt="Search" onClick={handleSearch} />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="nav-right">
        <img src={upload_icon} alt="Upload" className="hide-on-mobile" />
        <img src={more_icon} alt="More" className="hide-on-mobile" />
        
        {/* UPDATED: Link added to navigate to Notifications page */}
        <Link to="/notifications">
          <img src={notification_icon} alt="Notifications" className="hide-on-mobile" />
        </Link>

        {/* Profile Icon and Menu */}
        <div className="profile-menu-container">
          <img
            src={profile_icon}
            className="user-icon"
            alt="Profile"
            onClick={toggleProfileMenu}
            aria-label="Profile Menu"
          />

          {isProfileMenuOpen && (
            <div className="profile-menu">
              {isLoggedIn ? (
                <>
                  <button onClick={handleSignOut}>Sign Out</button>
                  <Link to="/switch-account"><button>Switch Account</button></Link>
                  <Link to="/settings"><button>Settings</button></Link>
                  <Link to="/help"><button>Help</button></Link>
                </>
              ) : (
                <>
                  <Link to="/login"><button>Login</button></Link>
                  <Link to="/signup"><button>Sign Up</button></Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
