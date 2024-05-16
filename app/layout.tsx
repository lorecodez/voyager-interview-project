import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { lazy, Suspense } from "react";
import Spinner from '@/app/components/Spinner';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyager Interview Project",
  description: "Lorenzo's interview project for the Voyager Program",
};

const Foot = lazy(() => import('@/app/components/Foot').then( module => {
  return {default: module.default}
}))

const Head = lazy(() => import('@/app/components/Head').then( module => {
  return {default: module.default}
}))

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full h-full min-h-screen ${inter.className}`}>
        <header className="w-full p-2">
          <Suspense fallback={
            <Spinner/>
          }>
            <Head/>
          </Suspense>
        </header>
        {children}
        <footer>
          <Suspense fallback={
            <Spinner/>
          }>
            <Foot/>
          </Suspense>
        </footer>
      </body>
    </html>
  );
}
