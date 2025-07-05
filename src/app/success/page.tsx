'use client'

import { useEffect, useState } from 'react'

export default function SuccessPage() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const confirmPurchase = async () => {
      try {
        const res = await fetch('/api/confirm-purchase', { method: 'POST' })
        const data = await res.json()

        if (res.ok && data.success) {
          setDone(true)
        } else {
          console.error('❌ 購入確認失敗:', data?.error)
        }
      } catch (err) {
        console.error('❌ 通信エラー:', err)
      }
    }

    confirmPurchase()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-purple-50 text-center p-6">
      <div className="text-5xl mb-4">🎉</div>
      <h1 className="text-3xl font-bold text-purple-700 mb-2">決済完了！</h1>
      <p className="text-gray-700 mb-6">
        プレミアム特典が <span className="font-semibold">3日間</span> 解放されました✨
      </p>
      {done ? (
        <p className="text-green-600 font-medium">✅ データが保存されました</p>
      ) : (
        <p className="text-gray-500">データを保存中...</p>
      )}
    </div>
  )
}
