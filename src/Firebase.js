import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAbXLy4OH4AAbRTz9wyA6qYgY4Clyf6ryg",
    authDomain: "robinhood-25110.firebaseapp.com",
    projectId: "robinhood-25110",
    storageBucket: "robinhood-25110.appspot.com",
    messagingSenderId: "558855316071",
    appId: "1:558855316071:web:f248a6c3a4c3109ce7eac2",
    measurementId: "G-PX20SBNE6P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export { db };