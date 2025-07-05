'use client';

import React from 'react';
import { usePremiumStatus } from '@/hooks/usePremiumStatus';
import { useEffect, useState } from 'react';

export default function PremiumReveal({ children }: { children: React.ReactNode }) {
  const hasPremium = usePremiumStatus();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const check = async () => {
      if (!hasPremium) return;

      const res = await fetch('/api/get-purchase-date');
      const data = await res.json();
      const purchaseDate = new Date(data.purchaseDate);

      const now = new Date();
      const limit = new Date(purchaseDate);
      limit.setDate(limit.getDate() + 3);

      setIsUnlocked(now < limit);
    };

    check();
  }, [hasPremium]);

  if (!hasPremium || !isUnlocked) {
    return (
      <div className="space-y-4 text-sm text-white bg-white/10 p-6 rounded-xl border border-white/10">
        <div>
          <p className="text-base font-semibold mb-2 text-white/90">
            ⚠️ ここから先はプレミアム限定コンテンツ ⚠️
          </p>
          <p className="text-white/70 text-sm mb-2">
            ¥500でロック解除すると、下記の内容が3日間すべて閲覧できます👇
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/80">
            <li>恋愛傾向（恋のスタイルや愛し方）</li>
            <li>仕事傾向（働き方・適職・強み）</li>
            <li>相性の良いタイプ（相性◎なタイプ3選）</li>
            <li>親密になるまでのステップ（距離の縮め方）</li>
            <li>恋愛NGパターン（避けたほうがいい関係性）</li>
          </ul>
        </div>

        <div className="blur-md pointer-events-none select-none text-gray-400 bg-white/10 p-4 rounded-xl border border-white/10">
          🔒 この先はプレミアム会員限定コンテンツです！
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
