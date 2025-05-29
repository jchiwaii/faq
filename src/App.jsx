import React from "react";
import FAQList from "./components/FAQList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
            FAQ Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some common questions and answers about using our website
            builder, designed to help you get started, customize your site, and
            make the most out of our platform.
          </p>
        </header>
      </div>
      <FAQList />
    </div>
  );
};

export default App;
