'use client'

import { useEffect, useState } from 'react'

export const usePremiumStatus = () => {
  const [isPremium, setIsPremium] = useState<boolean | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/get-purchase-date')
        const data = await res.json()

        if (!data.purchaseDate) {
          setIsPremium(false)
          return
        }

        const purchaseDate = new Date(data.purchaseDate)
        const now = new Date()
        const limit = new Date(purchaseDate)
        limit.setDate(limit.getDate() + 3) // 購入日 + 3日

        setIsPremium(now < limit)
      } catch (err) {
        console.error('💥 usePremiumStatus error:', err)
        setIsPremium(false)
      }
    }

    fetchStatus()
  }, [])

  return isPremium
}
