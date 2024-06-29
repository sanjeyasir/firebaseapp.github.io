// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdg6FRZ1O26YwxzRkrxisVLMTaW9ja7v8",
  authDomain: "fir-crudapp-ba4ce.firebaseapp.com",
  projectId: "fir-crudapp-ba4ce",
  storageBucket: "fir-crudapp-ba4ce.appspot.com",
  messagingSenderId: "393389879389",
  appId: "1:393389879389:web:c5ef8421e03e42ee701db4",
  measurementId: "G-EQBH5TSDC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

