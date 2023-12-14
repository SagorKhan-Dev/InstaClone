import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBN3gvLlpoWWpwocKxzYl2IeQIe-tode24",
  authDomain: "insta-clone-892b2.firebaseapp.com",
  projectId: "insta-clone-892b2",
  storageBucket: "insta-clone-892b2.appspot.com",
  messagingSenderId: "246281033468",
  appId: "1:246281033468:web:fc7b249a8fa1352844e979",
  measurementId: "G-8HEEHVEV4K",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
