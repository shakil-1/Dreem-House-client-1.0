
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUNCCJSOSCROSOVrUd5ZTQyRcGR5WWiFs",
  authDomain: "dreem-house-1ed0d.firebaseapp.com",
  projectId: "dreem-house-1ed0d",
  storageBucket: "dreem-house-1ed0d.firebasestorage.app",
  messagingSenderId: "475118015581",
  appId: "1:475118015581:web:acbea5f3f68f3f4156a9b4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
