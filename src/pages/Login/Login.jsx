// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Login.css';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Basic validation
// //     if (!email || !password) {
// //       setError('Both fields are required!');
// //       return;
// //     }

// //     // Your login logic here (authentication, API call, etc.)
// //     // Example:
// //     // if (email === 'user@example.com' && password === 'password123') {
// //     //   navigate('/');
// //     // } else {
// //     //   setError('Invalid email or password.');
// //     // }
    
// //     // Assuming login is successful:
// //     navigate('/Home');
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-box">
// //         <h2 className="auth-heading">Login</h2>
// //         {error && <p className="error-message">{error}</p>}
// //         <form onSubmit={handleLogin} className="auth-form">
// //           <div className="input-group">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="auth-input"
// //             />
// //           </div>
// //           <div className="input-group">
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="auth-input"
// //             />
// //           </div>
// //           <button type="submit" className="auth-button">Login</button>
// //         </form>
// //         <div className="auth-footer">
// //           <p>Don't have an account? <a href="/signup">Sign Up</a></p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;







// // updated code s1
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase"; // Import Firebase authentication
// import { auth } from "../../firebase";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Both fields are required!");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/Home"); // Redirect after successful login
//     } catch (err) {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2 className="auth-heading">Login</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleLogin} className="auth-form">
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="auth-input"
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="auth-input"
//             />
//           </div>
//           <button type="submit" className="auth-button">Login</button>
//         </form>
//         <div className="auth-footer">
//           <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [channelId, setChannelId] = useState(null);
  const navigate = useNavigate();

  // Google login
  const loginWithGoogle = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/youtube.readonly",
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      setAccessToken(token);

      // Fetch YouTube channel ID
      const res = await fetch(
        "https://www.googleapis.com/youtube/v3/channels?part=id&mine=true",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setChannelId(data.items[0].id); // Set the channelId after fetching
    },
    onError: () => console.log("Google Login Failed"),
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home"); // Redirect after successful login
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="auth-container">
        <div className="auth-box">
          <h2 className="auth-heading">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin} className="auth-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="auth-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="auth-input"
              />
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>

          
          {/* <button onClick={() => loginWithGoogle()} className="auth-button">
            Login with Google
          </button> */}

          {/* If login successful and accessToken + channelId is available, redirect to notifications page */}
          {accessToken && channelId && navigate("/notifications")}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
