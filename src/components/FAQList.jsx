import { useState, useEffect } from "react";
import FAQItems from "./FAQItems";
import faqData from "../data/FAQData";

const FAQList = ({ toggleDarkMode, darkMode }) => {
  const [openId, setOpenId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const handleToggle = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const handleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  useEffect(() => {
    if (openId && typeof window !== "undefined") {
      setTimeout(() => {}, 100); // Ensures the component is mounted before accessing the DOM
      const element = document.getElementById(`faq-item-${openId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [openId]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8 sm:pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text w-full sm:w-auto">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-3 w-full sm:w-auto">
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300"
            onClick={handleExpandAll}
          >
            <i
              className={`bx bx-${
                expandAll ? "collapse-alt" : "expand-alt"
              } text-lg`}
            ></i>
            <span>{expandAll ? "Collapse All" : "Expand All"}</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200"
          >
            <i className={`bx bx-${darkMode ? "sun" : "moon"} text-lg`}></i>
          </button>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden transition-all duration-200 ease-out">
        {faqData.map((item) => (
          <FAQItems
            key={item.id}
            item={item}
            onClick={handleToggle}
            isOpen={expandAll || openId === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
