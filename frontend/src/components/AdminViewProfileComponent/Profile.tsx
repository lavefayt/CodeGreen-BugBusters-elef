import { DriverWithVandC } from "../../types/datatypes";

const Profile = ({
  driver,
}: {
  driver: DriverWithVandC;
}) => {
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[35rem] h-[20rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="items-center p-4">
          <form className="space-y-[2rem]">
            <div className="flex space-x-1">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Last Name:
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  {driver?.last_name}
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  First Name:
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  {driver?.first_name}
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Middle Name:
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  {driver?.middle_name || "Unavailable"}
                </h1>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Sex:</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  {driver?.sex}
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Date of Birth:
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  {driver?.date_of_birth}
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Driver Type:
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  {driver?.driver_type}
                </h1>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-white font-syke-light text-l">Email:</h1>
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {driver?.email || "Unavailable"}
                  </h1>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-white font-syke-light text-l">
                    License Number:
                  </h1>
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {driver?.license_number}
                  </h1>
                </div>
                <div className="flex-1">
                  <h1 className="text-white font-syke-light text-l">
                    License Expiration Date:
                  </h1>
                  <h1 className="text-textgreen font-syke-medium text-xl">
                    {driver?.license_expiration_date}
                  </h1>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
