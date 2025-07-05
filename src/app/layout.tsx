// src/app/layout.tsx
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import ClientLayout from '../components/ClientLayout'; // 👈 これ正しく

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PingMe',
  description: 'Z世代の性格診断アプリ',
  other: {
    'google-site-verification': 'Dpi69ZFoy23BM41YX4mWrSwYUFC_BXW3SoW6Q3IqCUs',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
