import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { auth, db } from '@/lib/firebaseAdmin' // ✅ Firebase Admin SDKからauth, dbをimport

export async function POST() {
  // 🍪 cookie は await 必須！
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('__session')?.value

  // ❌ セッションなければ未認証
  if (!sessionCookie) {
    return NextResponse.json({ error: '未認証' }, { status: 401 })
  }

  try {
    // 🔐 クッキー検証して UID 取得
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true)
    const uid = decodedClaims.uid

    // 🔥 Firestore に purchaseDate を保存
    const userRef = db.collection('users').doc(uid)
    await userRef.set(
      {
        purchaseDate: new Date(),
      },
      { merge: true }
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('🔥 購入確認エラー:', err)
    return NextResponse.json({ error: 'サーバーエラー' }, { status: 500 })
  }
}
