import AdminHeader from "../components/AdminHeader";
// import { ViolatorsTable } from "../types/datatypes";
import useGetViolators from "../hooks/useGetViolators";
import Loading from "../components/Loading";
import { Violators } from "../types/datatypes";
import ViolatorsListCard from "../components/ViolatorsListCard";
import { useState } from "react";

const ViolatorList = () => {
  // to get the violators
  const { violators: violators, loading } = useGetViolators();
  const [selectedViolator, setSelectedViolator] = useState<Violators>();

  const handleViolatorsClick = (violator: Violators) => {
    setSelectedViolator(violator);
    console.log(violator.id);
  };

  console.log(violators);

  if (loading) return <Loading loading={loading} />;

  return (
    <div className="flex flex-col items-center bg-adminlanding-bg min-h-screen">
      <div>
        <AdminHeader />
      </div>
      <div className="w-[75rem] h-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="max-w-full max-h-full flex justify-center items-center">
          <div className="w-[35rem] p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            {selectedViolator ? (
              <div className="items-center px-5">
                <div className="text-left font-syke-light text-white">
                  <div className="text-textgreen py-2 mb-5">
                    <h1 className="text-4xl font-syke-bold">
                      Violator Details
                    </h1>
                    <div>Violator's key data.</div>
                  </div>
                </div>
                <form className="space-y-[2rem]">
                  <div className="flex space-x-1">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Last Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedViolator.last_name || ""}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        First Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedViolator.first_name || ""}
                      </h1>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">Sex</h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedViolator.sex || ""}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Date of Birth
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedViolator.date_of_birth || "MM/DD/YY"}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Driver Type
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedViolator.driver_type || ""}
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
                          {selectedViolator.license_number || ""}
                        </h1>
                      </div>
                      <div className="flex-1">
                        <h1 className="text-white font-syke-light text-xl">
                          Violations
                        </h1>
                        <h1 className="text-textgreen font-syke-medium text-xl">
                          {selectedViolator.violations!.length || ""}
                        </h1>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-1">
                        <h1 className="text-white font-syke-light text-l">
                          License Expiration Date
                        </h1>
                        <h1 className="text-textgreen font-syke-medium text-xl">
                          {selectedViolator.license_expiration_date || ""}
                        </h1>
                      </div>
                      <div>
                        <button
                          // onClick={handleViolatorClick}
                          className="p-2 px-4 m-2 bg-buttongreen active:bg-colorhover transition-colors rounded-sm text-white font-syke-bold"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-white text-center font-syke p-2">
                Select a violator to see details.
              </div>
            )}
          </div>

          <div className="w-[50%] h-full p-6 rounded-md">
            <div className="text-left rounded-xl bg-clip-padding">
              <div className="text-left font-syke-light text-white">
                <div className="text-textgreen py-3">
                  <h1 className="text-4xl font-syke-bold">Violator's List</h1>
                  <div>List of Violators within the university.</div>
                </div>
              </div>
              <div
                className="w-full h-[20rem] overflow-y-auto"
                id="listcontainer"
              >
                <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar text-white">
                  {violators && violators.length > 0 ? (
                    violators.map((violator) => (
                      <div
                        key={violator.id}
                        className="cursor-pointer hover:bg-secondgrey"
                        onClick={() => handleViolatorsClick(violator)} // Show more details on click
                      >
                        <ViolatorsListCard
                          id={violator.id!}
                          violations={violator.violations!}
                          first_name={violator.first_name!}
                          last_name={violator.last_name!}
                          driver_type={violator.driver_type!}
                          license_number={violator.license_number!}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-white text-center">
                      No violators found.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViolatorList;
