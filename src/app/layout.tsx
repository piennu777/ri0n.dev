import Image from 'next/image';

import { ReactNode } from 'react';

import icon from "@/assets/images/icon.png";

import '@/assets/css/main.css';
import '@/assets/css/header.css';
import '@/assets/css/footer.css';

export const metadata = {
  title: {
    default: 'Rion',
    template: '%s / Rion'
  },
  description: 'I am a student working as an engineer, doing web development and app development.',
  metadataBase: new URL('https://ri0n.dev'),
  openGraph: {
    title: 'Rion',
    description: 'I am a student working as an engineer, doing web development and app development.',
    url: 'https://ri0n.dev',
    siteName: 'ri0n.dev',
    images: [
      {
        url: '/ogp.webp',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

          <div className="container">
            <div className="icon">
              <a href="/">
                <Image
                  src={icon}
                  width={35}
                  height={35}
                  alt="My icon"
                />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href="/#Profile">Profile</a></li>
                <li><a href="/blog/">Blog</a></li>
                <li><a href="/#Projects">Projects</a></li>
                <li><a href="https://zisty.net/" target="_blank">Team</a></li>
              </ul>
            </nav>
            <div className="sns-accounts">
              <a href="https://x.com/piennu_777" aria-label="X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://github.com/piennu777" aria-label="Github" target="_blank"><i className="fa-brands fa-github"></i></a>
              <a href="https://discord.com/users/851357394976899116" aria-label="Discord" target="_blank"><i
                className="fa-brands fa-discord"></i></a>
            </div>
          </div>
        </header>

        {children}

        <footer>
          <div className="footers">
            <div className="logo">
              <Image
                src={icon}
                width={50}
                height={50}
                alt="My icon"
              />
              <a className="status" href="https://piennu.instatus.com/">〇 Unknown Status</a>
            </div>
            <div className="nav">
              <div className="nav-category">
                <p>Main</p>
                <ul>
                  <li><a href="https://www.ri0n.dev/#Hello">Hello</a></li>
                  <li><a href="https://www.ri0n.dev/#Profile">Profile</a></li>
                  <li><a href="https://www.ri0n.dev/blog">Blog</a></li>
                  <li><a href="https://www.ri0n.dev/#Projects">Projects</a></li>
                </ul>
              </div>
              <div className="nav-category">
                <p>Redirect</p>
                <ul>
                  <li><a href="https://zisty.net/" target="_blank">Team</a></li>
                  <li><a href="https://www.ri0n.dev/blog" target="_blank">Blog</a></li>
                  <li><a href="https://docs.ri0n.dev/" target="_blank">Documents</a></li>
                  <li><a href="mailto:pien@piennu777.jp" target="_blank">Contact Us</a></li>
                </ul>
              </div>
              <div className="nav-category">
                <p>Special thanks</p>
                <ul>
                  <li><a href="https://cloudflare.com/" target="_blank">Cloudflare</a></li>
                  <li><a href="https://github.com/" target="_blank">Github</a></li>
                  <li><a href="https://vercel.com/home" target="_blank">Vercel</a></li>
                  <li><a href="https://fontawesome.com/" target="_blank">Fontawesome</a></li>
                  <li><a href="https://icons.getbootstrap.jp/" target="_blank">Bootstrap Icons</a></li>
                </ul>
              </div>
              <div className="nav-category">
                <p>Social</p>
                <ul>
                  <li><a href="https://github.com/piennu777" target="_blank"><i className="fa-brands fa-github"></i> Github</a></li>
                  <li><a href="https://x.com/piennu_777" target="_blank"><i className="fa-brands fa-x-twitter"></i> X</a></li>
                  <li><a href="https://www.youtube.com/@piennu_777" target="_blank"><i className="fa-brands fa-youtube"></i> YouTube</a></li>
                  <li><a href="https://discord.com/users/851357394976899116" target="_blank"><i className="fa-brands fa-discord"></i> Discord</a>
                  </li>
                  <li><a href="https://discord.gg/9CYKjrR8vU" target="_blank"><i className="fa-brands fa-discord"></i> Community</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
