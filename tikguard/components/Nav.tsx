'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { MainContext } from '../app/page'; // adjust the import path as needed
import logo from '../public/assets/blue-abstract-logo-vector.jpg'; // adjust the import path as needed
import Image from 'next/image';
const Nav = () => {
  const { account } = useContext(MainContext);

  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white text-black border-b-2 border-gray-300 ">
      <Link href='/' className="flex items-center cursor-pointer">
        <Image src={logo} alt='' width={50} height={50} />
        <h1 className="ml-2">Recipe Finder</h1>
      </Link>
      <Link href={account ? 'dashboard' : 'login'} className={`px-4 py-2 rounded bg-background-400 text-white hover:bg-background-500 transition-all`}>
        {account ? 'Dashboard' : 'Log In'}
      </Link>
    </nav>
  );
};

export default Nav;