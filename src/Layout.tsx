import React, { ReactNode } from 'react';
import Sidebar from './Components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
