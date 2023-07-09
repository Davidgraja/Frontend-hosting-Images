import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBZICAf1tk5hthGfZsqkEH_e-XJRS5ah1A",
    authDomain: "hosting-web-e0ee7.firebaseapp.com",
    projectId: "hosting-web-e0ee7",
    storageBucket: "hosting-web-e0ee7.appspot.com",
    messagingSenderId: "709560214",
    appId: "1:709560214:web:c1e6fad074f5fb6d67ffb7"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);