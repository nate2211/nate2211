import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {createContext} from "react";

const fb = firebase.initializeApp({
    apiKey: "AIzaSyAs1zGhCygNwv192f7sDGb2WrhwWr9x-CA",
    authDomain: "berzerk.firebaseapp.com",
    databaseURL: "https://berzerk.firebaseio.com",
    projectId: "berzerk",
    storageBucket: "berzerk.appspot.com",
    messagingSenderId: "1069046999873",
    appId: "1:1069046999873:web:678d29137861fdc136cfc0",
    measurementId: "G-N6FBMEX3TN"
});
const auth = fb.auth()
const database = fb.database()
const provider = new firebase.auth.GoogleAuthProvider();
export const fbContext = createContext({fb, auth, database, provider});
