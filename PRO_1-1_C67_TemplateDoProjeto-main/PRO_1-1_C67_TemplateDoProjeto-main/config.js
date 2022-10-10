import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvzpbJyIQaMJFbxWtmWc4DkpIuR2L8sLA",
    authDomain: "projeto-67-e6478.firebaseapp.com",
    projectId: "projeto-67-e6478",
    storageBucket: "projeto-67-e6478.appspot.com",
    messagingSenderId: "402922024149",
    appId: "1:402922024149:web:bad2d8f31d8c3c8815065c"
  };


// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();