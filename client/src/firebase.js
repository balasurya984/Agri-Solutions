import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx8wW1JhgSezfl0eKJ9ON0Efv6GthPh7U",
  authDomain: "industrial-visit-e282f.firebaseapp.com",
  projectId: "industrial-visit-e282f",
  storageBucket: "industrial-visit-e282f.appspot.com",
  messagingSenderId: "328744138125",
  appId: "1:328744138125:web:8d82f30e5ae869fec9b9c4",
  measurementId: "G-X7LZH2H2E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
