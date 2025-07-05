'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import NavBar from '@/components/Navbar';
import LoginModal from '@/components/LoginModal';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <title>PingMe - 性格診断</title>
      </Head>

      {/* ナビゲーションバー */}
      <NavBar
        onLoginClick={() => {
          setIsLoginMode(true);
          setShowLogin(true);
        }}
        onRegisterClick={() => {
          setIsLoginMode(false);
          setShowLogin(true);
        }}
      />

      {/* ログインモーダル */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        isLogin={isLoginMode}
      />

      {/* 全体背景グラデーション */}
      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 via-green-100 to-blue-200 text-gray-800">

        {/* タイトル・キャッチ */}
        <section className="py-16 text-center px-4 mt-[64px]">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-blue-600 drop-shadow">
            人間関係特化型！
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 drop-shadow">
            無料精密性格診断テスト
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 drop-shadow">
            PingMe タイプエクスプローラー™
          </p>
        </section>

        {/* 説明まとめカード（縦型1枚に凝縮） */}
        <section className="px-4 sm:px-8 py-8 sm:py-12">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 space-y-5 sm:space-y-6 text-gray-800 max-w-2xl mx-auto">
            {[
              { emoji: "🧠", text: "嘘偽りなく、正直に答えてください。" },
              { emoji: "🌍", text: "性格タイプが生活にどう影響しているのか。" },
              { emoji: "📈", text: "さらに深く知りたい人には、精密診断結果も用意しています。" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="text-2xl sm:text-3xl">{item.emoji}</div>
                <p className="text-sm sm:text-base leading-relaxed text-blue-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✨ 導入メッセージ */}
        <section className="px-4 sm:px-8 py-10 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">自分を知ることから、すべてが変わる。</h3>
          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-800">
            私たちは日々、<strong>「ちゃんとしなきゃ」「人に迷惑をかけないように」</strong>と、<br />
            <strong>“外側の正解”に合わせて</strong>自分をつくってしまいがちです。<br />
            でも本当は、<strong>どんな自分でも、自分だけは味方でいてあげる</strong>ことが、<br />
            <strong>生きやすさのはじまり</strong>になります。<br /><br />
            まずは、<strong>自分のことを知ること</strong>。<br />
            どんなときに嬉しくて、何がしんどくて、どう感じるのか。<br />
            あなたの中にある<strong>“思考・感情・反応のクセ”</strong>を知ることで、<br />
            <strong>「自分らしさ」の設計図</strong>が見えてきます。<br /><br />
            この診断は、<strong>あなたが“自分と仲良くなる”ための第一歩</strong>です。<br />
            <strong>比べるためではなく、受け入れるために</strong>。<br />
            軽やかに、<strong>自分らしい人生</strong>を歩いていくために。<br /><br />
            さあ、<strong>直感のままに答えてみてください</strong>。<br />
            正解のない世界で、<strong>自分の輪郭を確かめにいきましょう</strong>。
          </p>
        </section>

        {/* 診断開始ボタン */}
        <section id="start" className="py-12 text-center px-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">準備はできましたか？</h3>
          <Link href="/questions">
            <button className="px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition text-base font-medium">
              診断をはじめる
            </button>
          </Link>
        </section>

        {/* ✅ isLoggedIn を使っていることを明示（開発環境でのみ表示） */}
        {process.env.NODE_ENV === 'development' && (
          <p className="text-center text-xs text-gray-500 mt-2">
            isLoggedIn: {isLoggedIn ? '✅ ログイン中' : '❌ 未ログイン'}
          </p>
        )}

        {/* フッター */}
        <footer className="bg-white/50 backdrop-blur-sm py-6 text-center text-xs sm:text-sm text-gray-600">
          &copy; 2025 PingMe. 全ての権利を保有しています。
        </footer>
      </main>
    </>
  );
}
