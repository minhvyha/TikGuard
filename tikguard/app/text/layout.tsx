import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Add your layout components here */}
      {children}
    </div>
  );
};

export default Layout;