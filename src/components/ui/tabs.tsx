import React, { useState } from 'react';
import { cn } from '@/utils/cn';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
  onTabChange?: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  className,
  variant = 'default',
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const getTabButtonClass = (tabId: string, disabled?: boolean) => {
    const baseClass = 'px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';
    
    if (disabled) {
      return cn(baseClass, 'text-gray-400 cursor-not-allowed');
    }

    switch (variant) {
      case 'pills':
        return cn(
          baseClass,
          'rounded-full',
          activeTab === tabId
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        );
      case 'underline':
        return cn(
          baseClass,
          'border-b-2 rounded-none',
          activeTab === tabId
            ? 'border-blue-600 text-blue-600'
            : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
        );
      default:
        return cn(
          baseClass,
          'rounded-t-lg border-t border-l border-r',
          activeTab === tabId
            ? 'bg-white text-blue-600 border-gray-300'
            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200'
        );
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={cn('w-full', className)}>
      <div className={cn(
        'flex',
        variant === 'underline' ? 'border-b border-gray-200' : 'mb-4'
      )}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && handleTabClick(tab.id)}
            className={getTabButtonClass(tab.id, tab.disabled)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {activeTabContent}
      </div>
    </div>
  );
};