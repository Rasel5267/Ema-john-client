import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB5zYgDSr1t03Md5JsNdzvcEbs4dV8mbGI",
  authDomain: "clone-project-aeb62.firebaseapp.com",
  databaseURL: "https://clone-project-aeb62.firebaseio.com",
  projectId: "clone-project-aeb62",
  storageBucket: "clone-project-aeb62.appspot.com",
  messagingSenderId: "885940292561",
  appId: "1:885940292561:web:71f6ba11e2c4cb5badeef0",
  measurementId: "G-NG6J4HJGNQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};