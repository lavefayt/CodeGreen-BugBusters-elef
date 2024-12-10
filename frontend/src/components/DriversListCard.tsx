import { useState, useRef, useEffect } from "react";
import { DriverWithVandC } from "../types/datatypes";
import { useDeleteDriver } from "../hooks/driver-hooks/useDeleteDriver";
const DriverListCard = ({
  id,
  first_name,
  last_name,
  driver_type,
  license_number,
}: DriverWithVandC) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { deleteDriver } = useDeleteDriver()

  const handleDeleteDriver = () => { 
    deleteDriver(id!)
    setIsMenuOpen(false);
  }
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="border-b-2 flex-col flex-1 border-t-transparent w-full border-b-inputfield space-y-[20px] relative"
      id="row"
    >
      <div className="flex p-2 items-center overflow-y-auto">
        <div className="flex-2 min-w-[45%]">
          <h1 className="text-white font-syke-light text-sm"
          >
            Name
            </h1>
          <h1 className="text-textgreen font-syke-medium text-md"
          >
            {first_name} {last_name}
          </h1>
        </div>

        <div className="flex-2 text-left min-w-[25%]">
          <h1 className="text-white font-syke-light text-sm"
          >Driver Type
          </h1>
          <h1 className="text-textgreen font-syke-medium text-md"
          >
            {driver_type}
          </h1>
        </div>

        <div className="flex-2 text-left">
          <h1 className="text-white font-syke-light text-sm"
          >
            License Number
            </h1>
          <h1 className="text-textgreen font-syke-medium text-md"
          >
            {license_number}
          </h1>
        </div>

        <div className="relative flex items-center ml-auto" 
        ref={dropdownRef}>

          <button
            className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">⋮</span>
          </button>

          {isMenuOpen && (
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-[9999]"
            >
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-500"
                onClick={handleDeleteDriver}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverListCard;
