'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useThemeContext } from '../app/context/context'; // Adjust the import path as needed
import logo from '@/assets/logo.png'; // Adjust the import path as needed

const Nav = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <nav className="flex items-center justify-between py-3 px-8 border-b-2 border-gray-600">
      <Link href='/' className="flex gap-1 items-center justify-center cursor-pointer">
        <Image src={logo} alt='logo' width={50} height={50} />
        <h1>TikGuard</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="https://github.com/minhvyha/TikGuard" className="px-4 py-2 rounded bg-background-400 text-white hover:bg-background-500 transition-all">
          GitHub Repo
        </Link>
        <button
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Nav;
