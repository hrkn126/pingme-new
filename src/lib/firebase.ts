import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 追加

const firebaseConfig = {
  apiKey: "AIzaSyCmMc4TaZLl2jeEiEuFnfnSu20mcwiDY1g",
  authDomain: "pingme-15821.firebaseapp.com",
  projectId: "pingme-15821",
  storageBucket: "pingme-15821.appspot.com",
  messagingSenderId: "853680652190",
  appId: "1:853680652190:web:0a3c88329e92cc0722608f",
  measurementId: "G-NQY3LNFF5B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // これが必要！

export { app, auth, db }; // db を忘れずに export！
