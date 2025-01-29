import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-8">
          {/* Логотип */}
          <h1 className="font-stencil text-logo-color text-6xl">BOZDAQTAR</h1>

          {/* Блок центрирования (Поиск) */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Введите любые сведения для поиска, например ФИО"
                className="w-[423px] h-[48px] px-[19px] pr-[45px] py-[10px] 
                          bg-backgr rounded-xl text-roboto text-xs"
              />
              {/* Лупа внутри инпута */}
              <img
                src="/search.png"
                alt="Search"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 opacity-100"
              />
            </div>
          </div>

          {/* Навигация и язык */}
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-logo-color hover:text-white hover:underline hover:decoration-logo-color 
                                font-roboto text-2xl">
              Главная
            </Link>
            <Link href="/editions" className="text-logo-color hover:text-white hover:underline hover:decoration-logo-color 
                                font-roboto text-2xl">
              Издания
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-logo-color font-roboto text-2xl">РУС</span>
              <img src="/down.png" alt="Down" className="w-[21px] h-[13px]" />
            </div>
          </nav>
        </header>
        {/* Header */}

        {/* Footer */}
        <footer>
        </footer>
        {/* Footer */}

        {children}
      </body>
    </html>
  );
}

