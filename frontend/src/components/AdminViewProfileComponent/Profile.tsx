import { useState } from "react";
import { DriverWithVandC } from "../../types/datatypes";
import useEditDriver from "../../hooks/driver-hooks/useEditDriver";

const Profile = ({
  driver,
}: {
  driver: DriverWithVandC;
}) => {
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [formData, setFormData] = useState({
    last_name: driver?.last_name || "",
    first_name: driver?.first_name || "",
    middle_name: driver?.middle_name || "",
    sex: driver?.sex || "",
    date_of_birth: driver?.date_of_birth || "",
    driver_type: driver?.driver_type || "",
    email: driver?.email || "",
    license_number: driver?.license_number || "",
    license_expiration_date: driver?.license_expiration_date || "",
  });

  const { editDriver } = useEditDriver();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data
  };

  const handleEditToggle = async () => {
    if (isEditing) { // Toggle edit mode
      // Save the changes
      const success = await editDriver(driver.id, formData);
      if (success) {
        // exit editing mode
        setIsEditing(false);
      } else {
        // Handle save failure
        console.error("Failed to save changes.");
      }
    } else {
      // Enter edit mode
      setIsEditing(true);
    }
  };
  
  return (
    <div className="max-w-full max-h-full flex justify-center items-center">
      <div className="w-[35rem] h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="items-center p-4">
          <form className="space-y-[2rem]">
            <div className="flex space-x-1">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Last Name:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {formData.last_name}
                  </h1>
                )}
              </div>

              {/* FirstName */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  First Name:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {formData.first_name}
                  </h1>
                )}
              </div>
              {/* Middle Name */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Middle Name:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {formData.middle_name || "Unavailable"}
                  </h1>
                )}
              </div>
            </div>
            {/* Sex */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Sex:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {formData.sex}
                  </h1>
                )}
              </div>
              {/* Date of Birth */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Date of Birth:
                </h1>
                {isEditing ? (
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {formData.date_of_birth}
                  </h1>
                )}
              </div>
              {/* Driver Type */}
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Driver Type:
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    name="driver_type"
                    value={formData.driver_type}
                    onChange={handleChange}
                    className="w-full p-2 rounded-sm text-black"
                  />
                ) : (
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {formData.driver_type}
                  </h1>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="space-y-2">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-white font-syke-light text-l">
                    Email:
                  </h1>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 rounded-sm text-black"
                    />
                  ) : (
                    <h1 className="text-textgreen font-syke-medium text-xl">
                      {formData.email || "Unavailable"}
                    </h1>
                  )}
                </div>
              </div>
              {/* New Line */}
              <div className="flex space-x-4">
                {/* License Number */}
                <div className="flex-1">
                  <h1 className="text-white font-syke-light text-l">
                    License Number:
                  </h1>
                  {isEditing ? (
                    <input
                      type="text"
                      name="license_number"
                      value={formData.license_number}
                      onChange={handleChange}
                      className="w-full p-2 rounded-sm text-black"
                    />
                  ) : (
                    <h1 className="text-textgreen font-syke-medium text-xl">
                      {formData.license_number}
                    </h1>
                  )}
                </div>
                {/* License Expiration Date */}
                <div className="flex-1">
                  <h1 className="text-white font-syke-light text-l">
                    License Expiration Date:
                  </h1>
                  {isEditing ? (
                    <input
                      type="date"
                      name="license_expiration_date"
                      value={formData.license_expiration_date}
                      onChange={handleChange}
                      className="w-full p-2 rounded-sm text-black"
                    />
                  ) : (
                    <h1 className="text-textgreen font-syke-medium text-xl">
                      {formData.license_expiration_date}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </form>
          {/* Button inside backdrop */}
          <div className="flex justify-end mt-4">
            <button 
            onClick={handleEditToggle}
            className="p-2 px-4 m-2 bg-buttongreen hover:bg-lime-800 transition-colors rounded-sm text-white font-syke-bold">
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;