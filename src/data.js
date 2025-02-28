export const API_KEY ='AIzaSyD1hVKWHsn3t4-2OhjAo8gMIdLpmvK8YLg'
// 'AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU';
// 'AIzaSyAyXrd0YtYdmEozNz09DQMp-mZ9tujTXiA' ;


export const value_conveter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}














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
