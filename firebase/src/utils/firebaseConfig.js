// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJ-mkeDA6-tQVUptxKx_mj16cDqLAUys",
  authDomain: "amrutam-chat-new.firebaseapp.com",
  databaseURL: "https://amrutam-chat-new-default-rtdb.firebaseio.com",
  projectId: "amrutam-chat-new",
  storageBucket: "amrutam-chat-new.appspot.com",
  messagingSenderId: "528788399855",
  appId: "1:528788399855:web:5780790ac8f42ce108dd1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database