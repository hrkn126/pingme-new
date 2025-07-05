'use client';

import { useState } from 'react';
import NavBar from './Navbar';
import LoginModal from './LoginModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <NavBar
        onLoginClick={() => setLoginOpen(true)}
        onRegisterClick={() => setRegisterOpen(true)}
      />

      <LoginModal
        isOpen={loginOpen || registerOpen}
        onClose={() => {
          setLoginOpen(false); // ← タイプミス修正済み
          setRegisterOpen(false);
        }}
        isLogin={loginOpen}
      />

      <main className="pt-16">{children}</main>
    </>
  );
}
