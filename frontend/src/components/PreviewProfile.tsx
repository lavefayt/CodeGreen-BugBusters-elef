import { DriverWithVandC } from "../types/datatypes";
import { useNavigate } from "react-router-dom";

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

  const handleSendNotification = () => {
    if (!selectedEntry) return;
    navigate(`/send-notif/${selectedEntry.id}`);
  };

  return (
    <div className="items-center p-6">
      <div className="text-left font-syke-light text-textgreen mb-5">
        <h1 className="text-4xl font-syke-bold">Driver Details</h1>
        <div>Driver's key data.</div>
      </div>
      <form className="space-y-[2rem]">
        <div className="flex w-full">
          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
              Last Name
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
              {selectedEntry.last_name || ""}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
              First Name
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
              {selectedEntry.first_name || ""}
            </h1>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
              Sex
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
              {selectedEntry.sex || ""}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
              Date of Birth
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
              {selectedEntry.date_of_birth || "MM/DD/YY"}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
              Driver Type
            </h1>
            <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
              {selectedEntry.driver_type || ""}
            </h1>
          </div>
        </div>

        <div className="w-full">
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
                License Number
              </h1>
              <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
                {selectedEntry.license_number || ""}
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light lg:text-lg md:text-xs sm:text-md text-sm">
                License Expiration Date
              </h1>
              <h1 className="text-textgreen font-syke-medium lg:text-xl md:text-xs sm:text-lg text-md">
                {selectedEntry.license_expiration_date || ""}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row-reverse ">
          <button
            onClick={handleSendNotification}
            className="p-2 px-4 w-2/6 ml-4  bg-buttongreen active:bg-colorhover transition-colors rounded-sm text-white font-syke-bold">
            Send Notification
          </button>
          <button
            onClick={handleViewProfile}
            className="p-2 px-4 w-2/6 bg-buttongreen active:bg-colorhover transition-colors rounded-sm text-white font-syke-bold">
            View Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreviewProfile;
