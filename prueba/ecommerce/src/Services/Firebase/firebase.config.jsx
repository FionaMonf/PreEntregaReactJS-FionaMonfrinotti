import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvhxKpXZh9Lldxz0aFCG1A_Eh4JE-Lu7o",
  authDomain: "monfris-e3082.firebaseapp.com",
  projectId: "monfris-e3082",
  storageBucket: "monfris-e3082.appspot.com",
  messagingSenderId: "747979239500",
  appId: "1:747979239500:web:d0d4aad84bddcb6833c4e9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
