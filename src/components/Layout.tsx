import { ReactNode } from 'react';

import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-row justify-start bg-black">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white">{children}</div>
    </div>
  );
};

export default Layout;
