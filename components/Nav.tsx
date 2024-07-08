// Nav.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '../app/context/context';
import logo from '@/assets/logo.png';
import { navLink } from '@/constant';
import Brightness4Icon from '@mui/icons-material/Brightness4';
const Nav = () => {
  const { toggleTheme } = useStore();
  const navLinks = navLink.map((link) => (
    <Link key={link.name} href={link.href} className="text-lg font-semibold hover:underline">
      {link.name}
    </Link>
  ));

  return (
    <nav className="flex  items-center justify-between py-3 px-8 fixed w-full z-20 dark:text-white text-black dark:bg-black bg-white ">
      
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-2xl font-bold ">TikGuard</h1>
      </Link>


      <div className="flex items-center gap-6">
      {navLinks}

        <Brightness4Icon onClick={toggleTheme} className='cursor-pointer'>
        </Brightness4Icon>
      </div>
    </nav>
  );
};

export default Nav;
