'use client'

import React from 'react'
import Link from 'next/link' // ← これを追加！

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-100 to-red-200 text-center p-6">
      <div className="text-6xl mb-4 animate-bounce">🥲</div>
      <h1 className="text-3xl font-bold text-red-800 mb-2">
        決済キャンセルされました
      </h1>
      <p className="text-gray-700 mb-6">
        ご購入が完了しなかったため、<br />
        プレミアム特典はまだ付与されていません。
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-3 rounded-lg bg-white text-red-700 border border-red-300 hover:bg-red-50 transition font-semibold shadow-md"
      >
        トップに戻る
      </Link>
    </div>
  )
}
