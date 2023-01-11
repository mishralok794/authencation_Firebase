
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  databaseURL:process.env.REACT_APP_DATABASEURL,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_APPID,
  measurementId:process.env.REACT_APP_MEASUREMENTID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD0EkLR_BcvNmp9OQkcNW1TPXx-qS0yfJw", 
//   // apiKey:process.env.REACT_APP_APIKEY,
//   authDomain: "auth-learn-b43d2.firebaseapp.com",
//   databaseURL: "https://auth-learn-b43d2-default-rtdb.firebaseio.com",
//   projectId: "auth-learn-b43d2",
//   storageBucket: "auth-learn-b43d2.appspot.com",
//   messagingSenderId: "558326672048",
//   appId: "1:558326672048:web:68686992781d9baac8e975",
//   measurementId: "G-T57ZB81998"
// }
// Initialize Firebase
console.log(process.env.REACT_APP_RANDOMDATA,"apikey")
const app = initializeApp(firebaseConfig);
 export let auth=getAuth(app);
