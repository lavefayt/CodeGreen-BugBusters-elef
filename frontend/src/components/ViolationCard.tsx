import { useState } from "react";
import { Violation } from "../types/datatypes";
import { useDeleteViolation } from "../hooks/useDeleteViolation";

const ViolationCard = ({ violation }: { violation: Violation }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { deleteViolation } = useDeleteViolation()

  const handleDeleteViolation = () => { 
    deleteViolation(violation.id!)
  }
  
  return (

    <div className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[10px] relative">
      <div className="ml-2 space-y-3 p-3">
        <div className="flex space-x-4">

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l"
            >
              Violation
            </h1>
            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {violation.violation_type}
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l"
            >
              Date of Violation
            </h1>
            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {violation.violation_date}
            </h1>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-white font-syke"
            >
              Description
            </h1>
            <h1 className="text-textgreen font-syke text-l w-[15rem]"
            >
              {violation.description}
            </h1>
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-m"
            >
              Status
              </h1>
            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {violation.paid_status ? "Paid" : "Unpaid"}
            </h1>
          </div>

        </div>

      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">⋮</span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-50">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Edit
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-500"
              onClick={ handleDeleteViolation }
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViolationCard;
