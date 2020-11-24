import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBHhOX8rtp2vahVcATkhTD_7CwARw6arrk",
    authDomain: "fire-auth2.firebaseapp.com",
    databaseURL: "https://fire-auth2.firebaseio.com",
    projectId: "fire-auth2",
    storageBucket: "fire-auth2.appspot.com",
    messagingSenderId: "587131087182",
    appId: "1:587131087182:web:f7e53e9007fe7760d7561f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};