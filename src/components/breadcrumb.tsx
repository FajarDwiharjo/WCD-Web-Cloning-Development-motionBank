import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a 
              href="/" 
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </a>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {item.active ? (
                <span className="text-blue-600 font-medium">{item.label}</span>
              ) : (
                <a 
                  href={item.href}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;