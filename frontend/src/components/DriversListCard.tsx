// import { useState } from "react";
//import { useDeleteDriver } from "../hooks/driver-hooks/useDeleteDriver";
import { DriverWithVandC } from "../types/datatypes";

// interface DriverProps {
//   id: string; // Add ID to uniquely identify each driver
//   firstname: string;
//   lastname: string;
//   driver_type: string;
//   license_no: string;
// }

const DriverListCard = ({
  first_name,
  last_name,
  driver_type,
  license_number,
}: DriverWithVandC) => {
  // Track whether the driver is in edit mode
  // const [isEditing, setIsEditing] = useState(false);

  // // Track menu visibility
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Store the updated driver details in state
  // const [updatedDriver, setUpdatedDriver] = useState({
  //   firstname,
  //   lastname,
  //   driver_type,
  //   license_no,
  // });

  // // Hooks for update and delete
  // const { deleteDriver, error: deleteError } = useDeleteDriver();

  // Handle deleting a driver
  // const handleDeleteClick = async () => {
  //   const success = await deleteDriver(id);
  //   if (success) {
  //     alert(`Driver ${lastname}, ${firstname} deleted successfully!`);
  //     // Optionally, trigger a re-fetch or remove the card from the UI
  //   } else {
  //     alert(
  //       `Failed to delete driver: ${deleteError?.message || "Unknown error"}`
  //     );
  //   }


  // Handle the input field changes for editing
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setUpdatedDriver((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  return (
      <div
        className="border-b-2 flex-col flex-1 border-t-transparent w-full border-b-inputfield space-y-[20px]"
        id="row">
        <div className="flex p-2 items-right overflow-y-auto">
          <div className="flex-2 min-w-[45%]">
            <h1 className="text-white font-syke-light text-sm">Name</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
              {first_name} {last_name}
            </h1>
          </div>
          <div className="flex-2 text-left min-w-[25%]">
            <h1 className="text-white font-syke-light text-sm">Driver Type</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
              {driver_type}
            </h1>
          </div>
          <div className="flex-2  text-left">
            <h1 className="text-white font-syke-light text-sm">License Number</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
              {license_number}
            </h1>
          </div>
        </div>
      </div>
    );

      {/* Buttons */}
      {/* <div className="flex space-x-2 ml-4">
        {/* Toggle between Edit/Update *
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
        {/* Meatball Menu *
        <div className="relative ml-4">
          <button
            className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl">⋮</span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-10">
              {/* Edit Option *
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                onClick={() => {
                  setIsEditing(true); // Enter edit mode
                  setIsMenuOpen(false); // Close menu
                }}
              >
                Edit
              </button>

              {/* Delete Option *
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
      </div> */}
};

export default DriverListCard;
