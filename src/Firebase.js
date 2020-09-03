import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBVI2sme8Xk54cK1AoCdnx0V1TXSndwSYM",
  authDomain: "reactjsauth-e345b.firebaseapp.com",
  databaseURL: "https://reactjsauth-e345b.firebaseio.com",
  projectId: "reactjsauth-e345b",
  storageBucket: "reactjsauth-e345b.appspot.com",
  messagingSenderId: "531156824575",
  appId: "1:531156824575:web:d40960007c7ad0c25137ca",
  measurementId: "G-GMZRQLCNPR"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };