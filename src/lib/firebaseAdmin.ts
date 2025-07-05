// src/lib/firebaseAdmin.ts

import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';

// JSONファイルを読み込む
const serviceAccount = JSON.parse(
  readFileSync(
    path.join(process.cwd(), 'pingme-15821-firebase-adminsdk-fbsvc-89aa8e53fc.json'),
    'utf8'
  )
);

// Firebase Admin 初期化
const app = getApps().length === 0
  ? initializeApp({ credential: cert(serviceAccount) })
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
