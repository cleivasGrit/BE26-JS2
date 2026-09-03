import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {

    apiKey: "AIzaSyDMyGEyR_r-b3-G68OtkGXXjMIQIuq4cpc",
    authDomain: "be26-demo.firebaseapp.com",
    databaseURL: "https://be26-demo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "be26-demo",
    storageBucket: "be26-demo.firebasestorage.app",
    messagingSenderId: "492979691308",
    appId: "1:492979691308:web:39ae6afd759ec1e1075689"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
