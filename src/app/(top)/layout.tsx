// src/app/(top)/layout.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function TopLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex justify-center gap-4 p-4 border-b">
        <Link
          href="/"
          className={`text-sm font-medium ${pathname === '/' ? 'underline' : 'text-gray-500'}`}
        >
          性格診断
        </Link>
        <Link
          href="/types"
          className={`text-sm font-medium ${pathname === '/types' ? 'underline' : 'text-gray-500'}`}
        >
          性格タイプ一覧
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
