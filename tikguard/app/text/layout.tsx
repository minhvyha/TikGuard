'use client';
import React, { ReactNode, useEffect } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className='pt-20'>
      {/* Add your layout components here */}
      {children}
    </div>
  );
};

export default Layout;
