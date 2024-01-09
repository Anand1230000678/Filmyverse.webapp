import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Analytics } from "@mui/icons-material";

const firebaseConfig = {
  apiKey: "AIzaSyB-57X_G4gD2cBDg-XmJVBSqcI06DAO-IQ",
  authDomain: "filmyverse-68ecb.firebaseapp.com",
  projectId: "filmyverse-68ecb",
  storageBucket: "filmyverse-68ecb.appspot.com",
  messagingSenderId: "60815817305",
  appId: "1:60815817305:web:5aa3e2e3c20c0c9d200f48",
  measurementId: "G-3LBJKGP417"
};
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(App)
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;