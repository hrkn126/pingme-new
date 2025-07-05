import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth, db } from '@/lib/firebaseAdmin'; // ← Firebase Admin SDK（auth と db）を import

export async function GET() {
  // 🍪 cookies() は async！ await を忘れずに！
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('__session')?.value;

  // 未認証の場合は 401 を返す
  if (!sessionCookie) {
    return NextResponse.json({ error: '未認証' }, { status: 401 });
  }

  try {
    // 🔐 クッキーを検証して UID 取得
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
    const uid = decodedClaims.uid;

    // 🔥 Firestore から purchaseDate を取得
    const userDocRef = db.collection('users').doc(uid);
    const userDoc = await userDocRef.get();
    const purchaseDate = userDoc.data()?.purchaseDate?.toDate?.();

    // ⏱️ 購入日を返す（なければ null）
    return NextResponse.json({ purchaseDate: purchaseDate ?? null });
  } catch (err) {
    console.error('🔥 サーバーエラー:', err);
    return NextResponse.json({ error: 'サーバーエラー' }, { status: 500 });
  }
}
