'use client';
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <button
        className="flex items-center justify-between w-full p-4 text-left text-gray-800 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:text-white dark:bg-gray-900 dark:border-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span>{title}</span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
    // <div className="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    //   <button
    //     className="flex items-center justify-between w-full p-4  text-gray-800 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:text-white dark:bg-gray-900 dark:border-gray-600"
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
        
    //     <svg
    //       className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    //     </svg>
    //     <span>{title}</span>
    //   </button>
    //   {isOpen && (
    //     <div className="p-4">
    //       {children}
    //     </div>
    //   )}
    // </div>
  );
};

export default Accordion;