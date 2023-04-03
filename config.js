const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCczYXwWcm4STjAhmSe32xZNlTpaEmWl94",
  authDomain: "seventh-ripsaw-370217.firebaseapp.com",
  projectId: "seventh-ripsaw-370217",
  storageBucket: "seventh-ripsaw-370217.appspot.com",
  messagingSenderId: "165167665435",
  appId: "1:165167665435:web:38ebae4135d8921a0543be",
  measurementId: "G-BFPWTN2M22"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
