import { useState } from "react";
import { useDeleteDriver } from "../hooks/driver-hooks/useDeleteDriver";

interface DriverProps {
  id: string; // Add ID to uniquely identify each driver
  firstname: string;
  lastname: string;
  driver_type: string;
  license_no: string;
}

const DriverListCard = ({
  id,
  firstname,
  lastname,
  driver_type,
  license_no,
}: DriverProps) => {
  // Track whether the driver is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Store the updated driver details in state
  const [updatedDriver, setUpdatedDriver] = useState({
    firstname,
    lastname,
    driver_type,
    license_no,
  });

  // Hooks for update and delete
  const { deleteDriver, error: deleteError } = useDeleteDriver();

  // Handle deleting a driver
  const handleDeleteClick = async () => {
    const success = await deleteDriver(id);
    if (success) {
      alert(`Driver ${lastname}, ${firstname} deleted successfully!`);
      // Optionally, trigger a re-fetch or remove the card from the UI
    } else {
      alert(
        `Failed to delete driver: ${deleteError?.message || "Unknown error"}`
      );
    }
  };

  // Handle the input field changes for editing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedDriver((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-color5 border transition-all hover:bg-[#4d7c0f] border-black p-4 rounded-lg shadow-md cursor-pointer my-1 w-full">
      {/* Editable fields */}
      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="firstname"
            value={updatedDriver.firstname}
            onChange={handleInputChange}
            className="bg-neutral-500 p-1 rounded border border-gray-700"
          />
        ) : (
          <span className="font-medium">{firstname}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="lastname"
            value={updatedDriver.lastname}
            onChange={handleInputChange}
            className="bg-neutral-500 p-1 rounded border border-gray-700"
          />
        ) : (
          <span className="font-medium">{lastname}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="driver_type"
            value={updatedDriver.driver_type}
            onChange={handleInputChange}
            className="bg-neutral-500 p-1 rounded border border-gray-700"
          />
        ) : (
          <span className="font-medium">{driver_type}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="license_no"
            value={updatedDriver.license_no}
            onChange={handleInputChange}
            className="bg-neutral-500 p-1 rounded border border-gray-700"
          />
        ) : (
          <span className="font-medium">{license_no}</span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 ml-4">
        {/* Toggle between Edit/Update */}
        {isEditing ? (
          <button className="text-white px-3 py-1 rounded-md hover:text-green-500">
            Update
          </button>
        ) : (
          <button
            className="text-white px-3 py-1 rounded-md hover:text-green-500"
            onClick={() => setIsEditing(true)} // Enter edit mode
          >
            Edit
          </button>
        )}
        {/* Meatball Menu */}
        <div className="relative ml-4">
          <button
            className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl">⋮</span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-10">
              {/* Edit Option */}
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                onClick={() => {
                  setIsEditing(true); // Enter edit mode
                  setIsMenuOpen(false); // Close menu
                }}
              >
                Edit
              </button>

              {/* Delete Option */}
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-500"
                onClick={() => {
                  handleDeleteClick(); // Handle delete
                  setIsMenuOpen(false); // Close menu
                }}
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
