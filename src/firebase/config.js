// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getStorage, uploadBytes, ref, getDownloadURL} from "firebase/storage";
import {v4} from "uuid"; //generador de id

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQ9fXkALrsyfKAOkxEqSR9SzoHXvPx7o",
  authDomain: "proyecto-de-prueba-video-games.firebaseapp.com",
  projectId: "proyecto-de-prueba-video-games",
  storageBucket: "proyecto-de-prueba-video-games.appspot.com",
  messagingSenderId: "51668014420",
  appId: "1:51668014420:web:8b6e080408685536a324c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const storage = getStorage(app);

 export const uploadFile= async (file)  =>{
    const storageRef = ref(storage, v4())
    await uploadBytes(storageRef, file)
    const urlImagen = await getDownloadURL(storageRef)
    return urlImagen
 }