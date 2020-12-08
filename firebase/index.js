import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC_F8neAnm11RqOZgBuRdVdydsFgVXrsEs",
  authDomain: "screenshot-app-23ead.firebaseapp.com",
  projectId: "screenshot-app-23ead",
  storageBucket: "screenshot-app-23ead.appspot.com",
  messagingSenderId: "485259391202",
  appId: "1:485259391202:web:846163af0d41dad8036ebb",
  measurementId: "G-YW94WM9R4N",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
