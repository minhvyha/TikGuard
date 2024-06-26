import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
const inter = Inter({ subsets: ['latin'] });
import AlertMessage from '@/components/AlertMessage';
import {ContextProviders} from '@/app/context/context';
import Loading from '@/components/Loading';
export const metadata: Metadata = {
  title: 'TikGuard',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
        <body className="text-text-100 inter">
      <ContextProviders>
        <Loading />
        <AlertMessage />
          <Nav />
          <div className='pt-16 dark:bg-black'>

          {children}
          </div>
      </ContextProviders>
        </body>
    </html>
  );
}
