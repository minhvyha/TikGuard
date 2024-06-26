'use client';
import React, { ReactNode, useEffect } from 'react';
import { useStore } from '../context/context';
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { setData } = useStore();
  useEffect(() => {
    return () => {
      setData(null);
    };
  }, []);
  return (
    <div>
      {/* Add your layout components here */}
      {children}
    </div>
  );
};

export default Layout;
