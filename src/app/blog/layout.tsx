"use client";

import { ReactNode } from 'react';

import '@/assets/css/main.css';
import '@/assets/css/header.css';
import '@/assets/css/footer.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
