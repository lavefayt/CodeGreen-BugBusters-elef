import { useNavigate } from "react-router-dom";
import { DriverWithVandC } from "../types/datatypes";

const PreviewProfile = ({
  selectedEntry,
}: {
  selectedEntry: DriverWithVandC;
}) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    if (!selectedEntry) return;
    navigate(`/view-profile/${selectedEntry.id}`);
  };

  return (
    <div className="items-center px-5">
      <div className="text-left font-syke-light text-white">
        <div className="text-textgreen py-2 mb-5">
          <h1 className="text-4xl font-syke-bold">Driver Details</h1>
          <div>Driver's key data.</div>
        </div>
      </div>
      <form className="space-y-[2rem]">
        <div className="flex space-x-1">
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l">Last Name</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {selectedEntry.last_name || ""}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l">First Name</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {selectedEntry.first_name || ""}
            </h1>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l">Sex</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {selectedEntry.sex || ""}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l">Date of Birth</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {selectedEntry.date_of_birth || "MM/DD/YY"}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l">Driver Type</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {selectedEntry.driver_type || ""}
            </h1>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex space-x-4">
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">
                License Number
              </h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                {selectedEntry.license_number || ""}
              </h1>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">
                License Expiration Date
              </h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                {selectedEntry.license_expiration_date || ""}
              </h1>
            </div>
            <div>
              <button
                onClick={handleViewProfile}
                className="p-2 px-4 m-2 bg-buttongreen active:bg-colorhover transition-colors rounded-sm text-white font-syke-bold">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PreviewProfile;
