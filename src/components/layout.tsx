import React from 'react';
import Header from './header';
import Footer from './footer';
import Breadcrumb from './breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
  breadcrumb?: BreadcrumbItem[];
  showBreadcrumb?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  breadcrumb = [], 
  showBreadcrumb = false 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showBreadcrumb && breadcrumb.length > 0 && (
        <Breadcrumb items={breadcrumb} />
      )}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;