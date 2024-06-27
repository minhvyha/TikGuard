// Nav.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '../app/context/context';
import logo from '@/assets/logo.png';

const Nav = () => {
  const { toggleTheme } = useStore();

  return (
    <nav className="flex  items-center justify-between py-3 px-8 fixed w-full z-20 dark:text-white text-black dark:bg-black bg-white ">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-2xl font-bold ">TikGuard</h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="https://github.com/minhvyha/TikGuard"
          className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-300"
        >
          GitHub Repo
        </Link>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Nav;
