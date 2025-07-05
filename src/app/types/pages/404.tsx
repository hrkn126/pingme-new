// pages/404.tsx
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50 text-center px-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">404 - 迷子です。</h1>
      <p className="text-lg text-gray-700 mb-6">
        このページは存在しません。<br />
        リンクが間違ってるか、宇宙の彼方に飛ばされたかも。
      </p>
      <Link href="/">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
          ホームに戻る
        </button>
      </Link>
    </div>
  )
}
