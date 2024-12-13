import { useState } from "react";

const ErrorAlert = () => {
  const [isVisible, setIsVisible] = useState(true); 

  const handleClose = () => {
    setIsVisible(false); 
  };

  if (!isVisible) return null; 

  return (
    <div className="fixed top-30 right-5 max-w-xs w-full bg-red-500 text-white shadow-lg rounded-lg p-4 flex items-center space-x-3 transition-transform transition-opacity transform hover:scale-105 hover:opacity-90 duration-300 ease-in-out">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.366-.446.976-.446 1.342 0l6 7.5a1 1 0 01-.671 1.601H3.07a1 1 0 01-.671-1.601l6-7.5zM10 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex-1">
        <p className="font-bold">Invalid Input Field</p>
        <p className="text-sm">Please fill out missing fields.</p>
      </div>
      <button
        title="button"
        className="text-white hover:text-gray-300 focus:outline-none"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ErrorAlert;
