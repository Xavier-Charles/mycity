import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEG4Ldq_jm3Q-wxqdbvYFXuUHUYIVcCIw",
  authDomain: "my-city-app01.firebaseapp.com",
  databaseURL:
    "https://my-city-app01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-city-app01",
  storageBucket: "my-city-app01.appspot.com",
  messagingSenderId: "294974943858",
  appId: "1:294974943858:web:b589561668d5da486fc8eb",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
