import React from "react";
import { Spinner } from "react-activity";

const Success = () => {
  return (
    <div
      id="success-overlay"
      className="fixed mt-2 inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60"
    >
      <div className="flex">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29 29"
        fill="#86C232"
        className="size-12"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clip-rule="evenodd"
        />
      </svg>

      <span className="text-white text-3xl font-syke-medium">Driver Added Successfully</span>
      </div>

    </div>
  );
};

export default Success;
