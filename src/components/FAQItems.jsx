import React, { useRef } from "react";

const FAQItems = ({ item, onClick, isOpen }) => {
  const answerRef = useRef(null);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700 last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
      id={`faq-item-${item.id}`}
    >
      <button
        className={`w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none rounded-lg transition-all duration-200 cursor-pointer ${
          isOpen
            ? "bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 text-purple-700 dark:text-white font-medium"
            : "text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400"
        }`}
        onClick={() => onClick(item.id)}
      >
        <span className="text-[16px] md:text-lg font-medium pr-6">
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 flex items-center justify-center w-8 min-w-8 aspect-square rounded-full ${
            isOpen
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 dark:bg-gray-700"
              : "bg-gray-200 dark:bg-gray-700"
          }  `}
        >
          <i
            className={`bx bx-chevron-${
              isOpen ? "up text-white" : "down"
            } text-lg text-gray-600 dark:text-gray-300`}
          ></i>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id={`answer-${item.id}`}
        ref={answerRef}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItems;
