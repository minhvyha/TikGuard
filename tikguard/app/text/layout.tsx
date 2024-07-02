'use client';
import React, { ReactNode, useEffect } from 'react';
import { useStore } from '../context/context';
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { setData, setAnalysedText } = useStore();
  useEffect(() => {
    return () => {
      setData(null);
      setAnalysedText('')
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
