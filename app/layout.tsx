import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import AlertMessage from '@/components/AlertMessage';
import { Footer } from '@/components/Footer';
import { ContextProviders } from '@/app/context/context';
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="text-text-100 inter">
        <ContextProviders>
          <Loading />
          <AlertMessage />
          <Nav />
          <div className=" dark:bg-black">{children}</div>
          <Footer />
        </ContextProviders>
      </body>
    </html>
  );
}
