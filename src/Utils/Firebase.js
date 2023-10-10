import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4J7wZAVpS_6LtMX0yWKnWzAqZIkSXCMA",
    authDomain: "fir-70ae6.firebaseapp.com",
    projectId: "fir-70ae6",
    storageBucket: "fir-70ae6.appspot.com",
    messagingSenderId: "1094917266554",
    appId: "1:1094917266554:web:a3decdbdd215fa1dbc6fc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

const storage = getStorage(app)

export { database, app, storage }