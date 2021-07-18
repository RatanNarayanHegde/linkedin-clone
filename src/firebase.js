import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxRdcaPa3BJAb5MLVZnV-Nz00jVo0FbLU",
  authDomain: "linkedin-clone-34982.firebaseapp.com",
  projectId: "linkedin-clone-34982",
  storageBucket: "linkedin-clone-34982.appspot.com",
  messagingSenderId: "638413563621",
  appId: "1:638413563621:web:4402c7efe1425266ba160c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
