import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

export const getPurchaseDate = async (): Promise<Date | null> => {
  const user = auth.currentUser
  if (!user) return null

  const userDoc = await getDoc(doc(db, 'users', user.uid))
  const data = userDoc.data()
  const ts = data?.purchaseDate?.toDate?.()
  return ts ?? null
}
