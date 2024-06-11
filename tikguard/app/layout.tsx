import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TikGuard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/29e5850037.js"
        crossOrigin="anonymous"
      />
      <body className="bg-background text-text inter">
        <Nav />
        {children}
        </body>
    </html>
  );
}
