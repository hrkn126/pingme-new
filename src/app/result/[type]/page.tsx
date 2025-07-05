'use client'

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function ResultPage() {
  const router = useRouter()
  const { type } = useParams()

  useEffect(() => {
    if (typeof type === 'string') {
      router.replace(`/result/${type}/page`)
    }
  }, [type, router])

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black text-xl">
      読み込み中...
    </div>
  )
}
