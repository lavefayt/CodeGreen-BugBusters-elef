import { useState } from "react";
import { useDeleteDriver } from "../hooks/useDeleteDriver";
import { useNavigate } from "react-router-dom";

interface DriverProps {
  id: string; // Add ID to uniquely identify each driver
  firstname: string;
  lastname: string;
  email: string;
  sex: string;
  driver_type: string;
  license_no: string;
  license_exp: string;
}

const DriverListCard = ({
  id,
  firstname,
  lastname,
  email,
  sex,
  driver_type,
  license_no,
  license_exp,
}: DriverProps) => {
  // Track whether the driver is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Store the updated driver details in state
  const [updatedDriver, setUpdatedDriver] = useState({
    firstname,
    lastname,
    email,
    sex,
    driver_type,
    license_no,
    license_exp,
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
      alert(`Failed to delete driver: ${deleteError?.message || "Unknown error"}`);
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
            className="bg-gray-100 p-1 rounded"
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
            className="bg-black p-1 rounded"
          />
        ) : (
          <span className="font-medium">{lastname}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={updatedDriver.email}
            onChange={handleInputChange}
            className="bg-black p-1 rounded"
          />
        ) : (
          <span className="font-medium">{email}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="sex"
            value={updatedDriver.sex}
            onChange={handleInputChange}
            className="bg-black p-1 rounded"
          />
        ) : (
          <span className="font-medium">{sex}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="driver_type"
            value={updatedDriver.driver_type}
            onChange={handleInputChange}
            className="bg-black p-1 rounded"
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
            className="bg-black p-1 rounded"
          />
        ) : (
          <span className="font-medium">{license_no}</span>
        )}
      </div>

      <div className="flex-1 text-center p-2">
        {isEditing ? (
          <input
            type="text"
            name="license_exp"
            value={updatedDriver.license_exp}
            onChange={handleInputChange}
            className="bg-gray-100 p-1 rounded"
          />
        ) : (
          <span className="font-medium">{license_exp}</span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 ml-4">
        {/* Toggle between Edit/Update */}
        {isEditing ? (
          <button
            className="text-white px-3 py-1 rounded-md hover:text-green-500"
          >
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

        {/* Delete Button */}
        <button
          className="text-white px-3 py-1 rounded-md hover:text-red-600"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DriverListCard;
