import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import AdminHeader from "../components/AdminHeader";
import DriverListCard from "../components/DriversListCard";
import useDrivers from "../hooks/driver-hooks/useDrivers";
import Loading from "../components/Loading";
import { DriverWithVandC } from "../types/datatypes.ts";

const DriversList = () => {
  const { data: Drivers, loading } = useDrivers();
  const [selectedDriver, setSelectedDriver] = useState<DriverWithVandC>();
  const [sortedDrivers, setSortedDrivers] = useState<DriverWithVandC[]>([]);
  const [isSorted, setIsSorted] = useState(false); // Tracks toggle state
  const [originalDrivers, setOriginalDrivers] = useState<DriverWithVandC[]>([]); // Stores the original list
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the search input

  const navigate = useNavigate();

  // Handle driver click to show more details
  const handleDriverClick = (driver: DriverWithVandC) => {
    setSelectedDriver(driver);
    console.log(driver.id);
  };

  const handleViewProfile = () => {
    if (!selectedDriver) return;
    navigate(`/view-profile/${selectedDriver.id}`);
  };

  // Toggle sorting between alphabetical and default
  const handleSortToggle = () => {
    if (!Drivers) return;

    if (isSorted) {
      setSortedDrivers(originalDrivers); // Reset to original order
    } else {
      const sorted = [...Drivers].sort((a, b) => {
        const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
        const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      setSortedDrivers(sorted);
    }
    setIsSorted(!isSorted); // Toggle the sort state
  };

  // Filter drivers based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setSortedDrivers(isSorted ? sortedDrivers : originalDrivers); // Reset to original or sorted list
      return;
    }

    const filtered = Drivers?.filter((driver) => {
      const fullName = `${driver.first_name} ${driver.last_name}`.toLowerCase();
      return fullName.includes(query.toLowerCase());
    });
    setSortedDrivers(filtered || []);
  };

  // Initialize drivers and store the original list
  useEffect(() => {
    if (Drivers) {
      setOriginalDrivers(Drivers);
      setSortedDrivers(Drivers); // Default display
    }
  }, [Drivers]);

  if (loading) return <Loading loading={loading} />;

  return (
    <div className="flex flex-col items-center bg-adminlanding-bg min-h-screen">
      <div>
        <AdminHeader />
      </div>

      <div className="w-[75rem] h-auto bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="max-w-full max-h-full flex justify-center items-center">
          <div className="w-[35rem] p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            {selectedDriver ? (
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
                      <h1 className="text-white font-syke-light text-l">
                        Last Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedDriver.last_name || ""}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        First Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedDriver.first_name || ""}
                      </h1>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">Sex</h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedDriver.sex || ""}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Date of Birth
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedDriver.date_of_birth || "MM/DD/YY"}
                      </h1>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-l">
                        Driver Type
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        {selectedDriver.driver_type || ""}
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
                          {selectedDriver.license_number || ""}
                        </h1>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-1">
                        <h1 className="text-white font-syke-light text-l">
                          License Expiration Date
                        </h1>
                        <h1 className="text-textgreen font-syke-medium text-xl">
                          {selectedDriver.license_expiration_date || ""}
                        </h1>
                      </div>
                      <div>
                        <button
                          onClick={handleViewProfile}
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
                Select a driver to see details.
              </div>
            )}
          </div>

          <div className="w-[50%] h-full p-6 rounded-md">
            <div className="text-left rounded-xl bg-clip-padding">
              <div className="text-left font-syke-light text-white">
                <div className="text-textgreen py-3 flex justify-between items-center">
                  <div>
                    <h1 className="text-4xl font-syke-bold">Driver's List</h1>
                    <div>List of Drivers within the university.</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="p-2 rounded-md bg-white text-black"
                    />
                    <button
                      className="text-white bg-textgreen w-20 h-8 rounded-md"
                      onClick={handleSortToggle}
                    >
                      {isSorted ? "Default" : "Sort"}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-[20rem] overflow-y-auto"
                id="listcontainer"
              >
                <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar text-white">
                  {sortedDrivers && sortedDrivers.length > 0 ? (
                    sortedDrivers.map((driver) => (
                      <div
                        key={driver.id}
                        className="cursor-pointer hover:bg-secondgrey"
                        onClick={() => handleDriverClick(driver)} // Show more details on click
                      >
                        <DriverListCard
                          key={driver.id}
                          id={driver.id!}
                          first_name={driver.first_name!}
                          last_name={driver.last_name!}
                          driver_type={driver.driver_type!}
                          license_number={driver.license_number!}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-white text-center">No drivers found.</p>
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

export default DriversList;
