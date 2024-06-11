'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { MainContext } from '@/app/page'; // adjust the import path as needed
import logo from '@/assets/logo.png'; // adjust the import path as needed
import Image from 'next/image';

const Nav = () => {
  const { account } = useContext(MainContext);

  return (
    <nav className="flex items-center justify-between py-4 px-8   border-b-2 border-gray-600 ">
      <Link href='/' className="flex items-center cursor-pointer">
        <Image src={logo} alt='' width={50} height={50} />
        <h1 className="ml-2">TikGuard</h1>
      </Link>
      <Link href="https://github.com/minhvyha/TikGuard" className={`px-4 py-2 rounded bg-background-400 text-white hover:bg-background-500 transition-all`}>
        GitHub Repo
      </Link>
    </nav>
  );
};

export default Nav;