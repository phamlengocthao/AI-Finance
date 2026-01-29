import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAoY2t3N8zi-TnRUbo0uutV8b3Bz0QkHE",
  authDomain: "ai-finance-116dc.firebaseapp.com",
  projectId: "ai-finance-116dc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
