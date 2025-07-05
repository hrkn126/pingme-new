'use client';

import { useEffect, useState } from 'react';
import { usePremiumStatus } from '@/hooks/usePremiumStatus';
import { getPurchaseDate } from '@/utils/getPurchaseDate'; // 🔑 Firestoreから取得する関数
import Link from 'next/link';

export default function PremiumSection() {
  const hasPremium = usePremiumStatus();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const check = async () => {
      if (!hasPremium) return;

      const purchaseDate = await getPurchaseDate();
      if (!purchaseDate) return;

      const now = new Date();
      const limit = new Date(purchaseDate);
      limit.setDate(limit.getDate() + 3); // 購入日＋3日

      setIsUnlocked(now < limit);
    };

    check();
  }, [hasPremium]);

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
      });

      const data = await res.json();
      console.log('🚀 Stripe checkout data:', data);

      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert('決済ページの取得に失敗しました。');
        console.error('💥 Stripe URLが取得できませんでした:', data);
      }
    } catch (e) {
      alert('通信エラーが発生しました。');
      console.error('💥 fetchエラー:', e);
    }
  };

  if (hasPremium === null) return null; // ロード中

  return (
    <div className="relative mt-12 p-6 bg-purple-50 text-gray-900 rounded-xl shadow-lg">
      {/* 🔓 表示コンテンツ（ぼかし制御） */}
      <div className={isUnlocked ? '' : 'blur-sm pointer-events-none select-none'}>
        <h2 className="text-lg font-bold text-purple-700 mb-2">【ここから先はプレミアム限定】</h2>
        <p>
          あなたがなぜこのタイプなのか？どんな価値観に支配されやすいか？<br />
          他者との相性・人間関係の癖・恋愛傾向…すべて、ここで読み解けます。
        </p>
      </div>

      {/* 🔒 ロック表示・購入ボタン */}
      {!isUnlocked && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl">
          <span className="text-4xl mb-2">🔒</span>
          <p className="mb-4 text-gray-700">この先はプレミアム会員限定です</p>
          <button
            onClick={handleCheckout}
            className="bg-purple-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-purple-700 transition"
          >
            ¥500でロック解除（3日間閲覧）
          </button>
        </div>
      )}
    </div>
  );
}
