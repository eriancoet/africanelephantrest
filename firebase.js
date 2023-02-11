import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';
import "firebase/firestore";
import "firebase/auth";



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider, db };





