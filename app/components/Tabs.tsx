'use client'

import { useState } from 'react';

interface Tab {
  title: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-full">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              index === activeTab
                ? 'border-custom-yellow-100 text-custom-yellow-100'
                : 'border-transparent text-white hover:text-custom-yellow-100 hover:border-custom-yellow-100'
            } pr-6 py-2 border-b-2 font-medium text-sm focus:outline-none`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-6">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;