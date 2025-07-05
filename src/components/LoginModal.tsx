'use client';

import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth, app } from '@/lib/firebase';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isLogin: boolean;
};

export default function LoginModal({ isOpen, onClose, isLogin }: Props) {
  const [mode, setMode] = useState(isLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  useEffect(() => {
    setMode(isLogin);
    setEmail('');
    setPassword('');
    setError('');
  }, [isLogin, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode) {
        // ログイン
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // 新規登録
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;

        // Firestore にユーザー情報を保存
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          uid: user.uid,
          isPremium: false,
          createdAt: new Date(),
        });
      }
      onClose();
    } catch (err: unknown) {
      let msg = 'ログインに失敗しました。';

      if (
        err &&
        typeof err === 'object' &&
        'code' in err &&
        typeof (err as { code: unknown }).code === 'string'
      ) {
        const code = (err as { code: string }).code;

        msg =
          code === 'auth/email-already-in-use'
            ? 'このメールアドレスは既に使われています。'
            : code === 'auth/invalid-email'
            ? 'メールアドレスの形式が正しくありません。'
            : code === 'auth/weak-password'
            ? 'パスワードは6文字以上にしてください。'
            : 'ログインに失敗しました。';
      }

      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {mode ? 'ログイン' : '新規登録'}
        </h2>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="パスワード（6文字以上）"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading
              ? mode
                ? 'ログイン中...'
                : '登録中...'
              : mode
              ? 'ログイン'
              : '新規登録'}
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          {mode ? (
            <>
              アカウントをお持ちでない方は{' '}
              <button
                onClick={() => setMode(false)}
                className="text-blue-600 underline"
                disabled={loading}
              >
                新規登録
              </button>
            </>
          ) : (
            <>
              すでにアカウントをお持ちの方は{' '}
              <button
                onClick={() => setMode(true)}
                className="text-blue-600 underline"
                disabled={loading}
              >
                ログイン
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
