import { Violation } from "../types/datatypes";
import { useDeleteViolation } from "../hooks/useDeleteViolation";
import { useState, useRef, useEffect } from "react";

const ViolationCard = ({ violation }: { violation: Violation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { deleteViolation } = useDeleteViolation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const date = new Date(violation.violation_date!);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const handleDeleteViolation = () => {
    deleteViolation(violation.id!);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[10px] relative">
      <div className="ml-2 space-y-3 p-3">
        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-md text-sm">
              Violation
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg text-md">
              {violation.violation_type}
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-md text-sm">
              Date of Violation
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg text-md">
              {year}/{month}/{day}
            </h1>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-white font-syke">Description</h1>
            <h1 className="text-textgreen font-syke lg:text-lg md:text-md text-sm lg:w-lg md:w-md w-sm break-normal">
              {violation.description}
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-md text-sm">
              Status
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-lg text-md">
              {violation.paid_status ? "Paid" : "Unpaid"}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
        ref={dropdownRef}>
        <button
          className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="lg:text-2xl md:text-lg text-md">⋮</span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-50">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              onClick={() => {
                setIsMenuOpen(false);
              }}>
              Edit
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-500"
              onClick={handleDeleteViolation}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViolationCard;
