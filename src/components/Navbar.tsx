'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

type Props = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
};

export default function NavBar({ onLoginClick, onRegisterClick }: Props) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // ← nullで未チェック状態を管理
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="w-full bg-white border-b px-6 py-3 flex justify-between items-center shadow-sm fixed top-0 z-50">
      {/* 左：ロゴ */}
      <div className="text-blue-600 font-bold text-lg">PingMe</div>

      {/* 中央：PCリンク */}
      <div className="hidden md:flex gap-6">
        <Link
          href="/"
          className={`text-sm font-medium ${pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
        >
          性格診断
        </Link>
        <Link
          href="/types"
          className={`text-sm font-medium ${pathname === '/types' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
        >
          性格タイプ一覧
        </Link>
      </div>

      {/* モバイルハンバーガー */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-600 hover:text-blue-600 z-[100]"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* モバイルメニュー */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-4 mt-16">
          {/* ログイン/登録表示（認証状態チェック後 & 未ログイン時のみ） */}
          {isLoggedIn === false && (
            <>
              <button
                onClick={() => {
                  onRegisterClick();
                  setMenuOpen(false);
                }}
                className="text-blue-600 text-left"
              >
                新規登録
              </button>
              <button
                onClick={() => {
                  onLoginClick();
                  setMenuOpen(false);
                }}
                className="text-blue-600 text-left"
              >
                ログイン
              </button>
            </>
          )}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            性格診断
          </Link>
          <Link
            href="/types"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            性格タイプ一覧
          </Link>
        </div>
      </div>
    </nav>
  );
}
