"use client";

import Image from 'next/image';

import { ReactNode, useEffect } from 'react';

import icon from "@/assets/images/icon.png";

import '@/assets/css/main.css';
import '@/assets/css/header.css';
import '@/assets/css/footer.css';

const url = "https://piennu777.jp/";
const favicon = "/favicon.png";
const ogpIcon = "/ogp.webp";
const siteName = "Rion";
const description = "I am a student working as an engineer, doing web development and app development.";
const metadata = {
  title: "Blog / Rion",
  description: "I am a student working as an engineer, doing web development and app development.",
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja-JP",
    type: "website",
    images: ogpIcon
  },
  icons: favicon,
  verification: {
    google: ""
  },
  publisher: `@piennu_777`,
  robots: "index, follow",
  creator: `@piennu_777`,
  keywords: ['PIENNU', 'piennu', 'ぴえんぬ', 'ピエンヌ', 'piennu777', 'piennu777.jp', 'Rion', 'ri0n.dev', 'RION'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
