import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARL3hSOFyMgbhBJeMgvx20up27HRlUTQ0",
  authDomain: "app-dehustle-institute.firebaseapp.com",
  projectId: "app-dehustle-institute",
  storageBucket: "app-dehustle-institute.appspot.com",
  messagingSenderId: "1028316191027",
  appId: "1:1028316191027:web:75f6e80ccef78181078646",
  measurementId: "G-NZ4Z1RWP71",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
