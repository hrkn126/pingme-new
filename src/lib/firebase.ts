// src/lib/firebase.ts

// Firebase SDK の初期化
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebaseプロジェクトの設定
const firebaseConfig = {
  apiKey: "AIzaSyCmMc4TaZLl2jeEiEuFnfnSu20mcwiDY1g",
  authDomain: "pingme-15821.firebaseapp.com",
  projectId: "pingme-15821",
  storageBucket: "pingme-15821.appspot.com",
  messagingSenderId: "853680652190",
  appId: "1:853680652190:web:0a3c88329e92cc0722608f",
  measurementId: "G-NQY3LNFF5B"
};

// アプリ初期化
const app = initializeApp(firebaseConfig);

// 各種サービスのインスタンス取得
const auth = getAuth(app);
const db = getFirestore(app);

// 明示的に export（Vercelが読み込めるように）
export { app, auth, db };
