// // // // // src/firebase.js
// // // // import { initializeApp } from 'firebase/app';
// // // // import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// // // // const firebaseConfig = {
// // // //   apiKey: 'YOUR_API_KEY',
// // // //   authDomain: 'YOUR_AUTH_DOMAIN',
// // // //   projectId: 'YOUR_PROJECT_ID',
// // // //   storageBucket: 'YOUR_STORAGE_BUCKET',
// // // //   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
// // // //   appId: 'YOUR_APP_ID'
// // // // };

// // // // const app = initializeApp(firebaseConfig);
// // // // const db = getFirestore(app);

// // // // export { db, addDoc, collection, serverTimestamp };


// // // // Import the functions you need from the SDKs you need
// // // import { initializeApp } from "firebase/app";
// // // import { getAnalytics } from "firebase/analytics";
// // // // TODO: Add SDKs for Firebase products that you want to use
// // // // https://firebase.google.com/docs/web/setup#available-libraries

// // // // Your web app's Firebase configuration
// // // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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






// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // import { getStorage } from "firebase/storage"; // Import the storage module

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA8jU0HcnkPQQ-z_FO7zcVK5BnBGB2op5k",
// //   authDomain: "clone-7ff9c.firebaseapp.com",
// //   projectId: "clone-7ff9c",
// //   storageBucket: "clone-7ff9c.appspot.com", // Fixed the storage bucket URL
// //   messagingSenderId: "214997213145",
// //   appId: "1:214997213145:web:64cc95d4d43abfaa6043c8",
// //   measurementId: "G-5GNV7TZXCS"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // // Initialize Firebase Storage
// // const storage = getStorage(app); // Initialize Firebase Storage

// // export { storage }; // Export storage for use in other files






// this is also correct
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";  // Import Firebase Authentication
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
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
// const analytics = getAnalytics(app);
// const storage = getStorage(app);
// const auth = getAuth(app);  // Initialize Firebase Auth

// // Export Firebase modules
// export { auth, storage };



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export Firebase modules
export { auth, storage };
