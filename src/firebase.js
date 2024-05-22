import { initializeApp } from "firebase/app";

console.log(import.meta.env.VITE_apiKey)

const firebaseConfig = {

    apiKey: "AIzaSyDQvXrJesh1gSBFCjs0Y2b-fqU2DqftEYE",
    authDomain: "curso-react-valoskins.firebaseapp.com",
    projectId: "curso-react-valoskins",
    storageBucket: "curso-react-valoskins.appspot.com",
    messagingSenderId: "532577040633",
    appId: "1:532577040633:web:242b95f62e9cf3248d4a28"

};


export const app = initializeApp(firebaseConfig);