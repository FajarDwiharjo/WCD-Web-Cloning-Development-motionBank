import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface DropdownItem {
  label: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
  align?: 'left' | 'right' | 'center';
  onItemClick?: (item: DropdownItem) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  className,
  align = 'left',
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: DropdownItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
    setIsOpen(false);
  };

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2',
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
      >
        {trigger}
        <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
      </button>
      
      {isOpen && (
        <div className={cn(
          'absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]',
          alignmentClasses[align]
        )}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center gap-3"
            >
              {item.icon && <span className="text-gray-500">{item.icon}</span>}
              <span className="text-gray-700">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};