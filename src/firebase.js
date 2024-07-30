// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from " firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxd53e068mWg2Z4r2HBfJ62vkvWKkcUjo",
  authDomain: "quora-af633.firebaseapp.com",
  projectId: "quora-af633",
  storageBucket: "quora-af633.appspot.com",
  messagingSenderId: "195998665962",
  appId: "1:195998665962:web:a75971e1cafcaa968a1b93",
  measurementId: "G-4Z4SVSPJ67"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export{serverTimestamp};
export default app;

