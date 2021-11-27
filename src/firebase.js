// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDsQE1vo8EGYpmgUzGxUR97MfCW3ki_D88",
    authDomain: "netflix-clone-96b99.firebaseapp.com",
    projectId: "netflix-clone-96b99",
    storageBucket: "netflix-clone-96b99.appspot.com",
    messagingSenderId: "60495748201",
    appId: "1:60495748201:web:96e42e247adaf1570016f8",
    measurementId: "G-7TKKQG14MF"
  };
  const app=initializeApp(firebaseConfig);

  const db = getDatabase(app);
  
  const auth = getAuth(app);
  export{auth};
  export default db;