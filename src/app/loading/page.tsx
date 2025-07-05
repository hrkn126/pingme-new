'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const finalType = localStorage.getItem('finalType');
      if (finalType) {
        router.push(`/result/${finalType}`);
      } else {
        router.push('/');
      }
    }, 2000); // 2秒後に結果ページへ

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4"></div>
        <p className="text-gray-700 text-sm">診断結果を集計中です...</p>
      </div>
    </div>
  );
}
