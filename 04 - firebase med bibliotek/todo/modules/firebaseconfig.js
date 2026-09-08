import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {

    //kopiera infon för din databas från firebase
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
