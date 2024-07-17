import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBI6ztoDI1X1w6LQAkFA06urNlWvLI3co8",
    authDomain: "travel-planner-1dc74.firebaseapp.com",
    projectId: "travel-planner-1dc74",
    storageBucket: "travel-planner-1dc74.appspot.com",
    messagingSenderId: "894914145852",
    appId: "1:894914145852:web:1e7d565572fb044f6f5d39",
    measurementId: "G-MSGPP9PTZQ"
  };




const app = initializeApp(firebaseConfig);
const database = getFirestore(app);



  export default database;