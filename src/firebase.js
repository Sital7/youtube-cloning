

// // // // // Import the functions you need from the SDKs you need
// // // // import { initializeApp } from "firebase/app";
// // // // import { getAnalytics } from "firebase/analytics";
// // // // import { getStorage } from "firebase/storage"; // Import Firebase Storage

// // // // // Your web app's Firebase configuration
// // // // const firebaseConfig = {
// // // //   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
// // // //   authDomain: "clone-7ff9c.firebaseapp.com",
// // // //   projectId: "clone-7ff9c",
// // // //   storageBucket: "clone-7ff9c.firebasestorage.app",
// // // //   messagingSenderId: "214997213145",
// // // //   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
// // // //   measurementId: "G-5GNV7TZXCS"
// // // // };

// // // // // Initialize Firebase
// // // // const app = initializeApp(firebaseConfig);
// // // // const analytics = getAnalytics(app);

// // // // // Initialize Firebase Storage
// // // // const storage = getStorage(app);

// // // // // Export the necessary objects
// // // // export { storage, analytics }; 



// // // // correct
// // // import { initializeApp } from "firebase/app";
// // // import { getAnalytics } from "firebase/analytics";
// // // import { getStorage } from "firebase/storage"; // Import Firebase Storage
// // // import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// // // // Your web app's Firebase configuration
// // // const firebaseConfig = {
// // //   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
// // //   authDomain: "clone-7ff9c.firebaseapp.com",
// // //   projectId: "clone-7ff9c",
// // //   storageBucket: "clone-7ff9c.firebasestorage.app",
// // //   messagingSenderId: "214997213145",
// // //   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
// // //   measurementId: "G-5GNV7TZXCS"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // // const analytics = getAnalytics(app);

// // // // Initialize Firebase Storage
// // // const storage = getStorage(app);

// // // // Initialize Firebase Authentication
// // // const auth = getAuth(app);

// // // // Export the necessary objects
// // // export { auth, storage, analytics };






// // import { initializeApp } from "firebase/app";
// // import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// // import { getStorage } from "firebase/storage";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
// //   authDomain: "clone-7ff9c.firebaseapp.com",
// //   projectId: "clone-7ff9c",
// //   storageBucket: "clone-7ff9c.appspot.com",
// //   messagingSenderId: "214997213145",
// //   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
// //   measurementId: "G-5GNV7TZXCS"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// // const provider = new GoogleAuthProvider(); // Define provider before using it
// // provider.addScope("https://www.googleapis.com/auth/youtube.readonly");

// // export { auth, provider, signInWithPopup };





// import { initializeApp } from "firebase/app";
// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   signInWithPopup, 
//   updateProfile 
// } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
//   authDomain: "clone-7ff9c.firebaseapp.com",
//   projectId: "clone-7ff9c",
//   storageBucket: "clone-7ff9c.appspot.com",
//   messagingSenderId: "214997213145",
//   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
//   measurementId: "G-5GNV7TZXCS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const provider = new GoogleAuthProvider();

// provider.addScope("https://www.googleapis.com/auth/youtube.readonly");

// // ✅ Export updateProfile so it can be used in ProfileDetails.jsx
// export { auth, storage, provider, signInWithPopup, updateProfile };






// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
//   authDomain: "clone-7ff9c.firebaseapp.com",
//   projectId: "clone-7ff9c",
//   storageBucket: "clone-7ff9c.appspot.com",
//   messagingSenderId: "214997213145",
//   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
//   measurementId: "G-5GNV7TZXCS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app); 
// const provider = new GoogleAuthProvider();

// provider.addScope("https://www.googleapis.com/auth/youtube.readonly");

// export { auth, storage, provider, signInWithPopup }; 




// correct 
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
//   authDomain: "clone-7ff9c.firebaseapp.com",
//   projectId: "clone-7ff9c",
//   storageBucket: "clone-7ff9c.appspot.com",
//   messagingSenderId: "214997213145",
//   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
//   measurementId: "G-5GNV7TZXCS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app); 
// const provider = new GoogleAuthProvider();

// // Add scope for YouTube access
// provider.addScope("https://www.googleapis.com/auth/youtube.readonly");

// // Sign in and get token
// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const token = await result.user.getIdToken();
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;
//     return accessToken; // Use this to call YouTube API
//   } catch (error) {
//     console.error("Error signing in:", error);
//     return null;
//   }
// };

// export { auth, storage, provider, signInWithPopup, signInWithGoogle };




import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
  authDomain: "clone-7ff9c.firebaseapp.com",
  projectId: "clone-7ff9c",
  storageBucket: "clone-7ff9c.appspot.com",
  messagingSenderId: "214997213145",
  appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
  measurementId: "G-5GNV7TZXCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Add scope for YouTube access
provider.addScope("https://www.googleapis.com/auth/youtube.readonly");

// Sign in and get token
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    return accessToken;
  } catch (error) {
    console.error("Error signing in:", error);
    return null;
  }
};

export { auth, storage, provider, signInWithPopup, signInWithGoogle, db };
