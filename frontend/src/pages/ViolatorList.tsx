import AdminHeader from "../components/AdminHeader";
// import { ViolatorsTable } from "../types/datatypes";
import useGetViolators from "../hooks/useGetViolators";
import Loading from "../components/Loading";
import { DriverWithVandC, Violators } from "../types/datatypes";
import ViolatorsListCard from "../components/ViolatorsListCard";
import { useEffect, useState } from "react";
import SearchAndSort from "../components/SearchAndSort";
import PreviewProfile from "../components/PreviewProfile";

const ViolatorList = () => {
  // to get the violators
  const { violators: violators, loading } = useGetViolators();
  const [selectedViolator, setSelectedViolator] = useState<DriverWithVandC>();
  const [sortedViolators, setSortedViolators] = useState<DriverWithVandC[]>([]);
  const [isSorted, setIsSorted] = useState(false); // Tracks toggle state
  const [originalViolators, setOriginalViolators] = useState<DriverWithVandC[]>(
    []
  ); // Stores the original list
  console.log(sortedViolators);

  const handleViolatorsClick = (violator: Violators) => {
    setSelectedViolator(violator);
    console.log(violator.id);
  };

  // Toggle sorting between alphabetical and default
  const handleSortToggle = () => {
    if (!violators) return;

    if (isSorted) {
      setSortedViolators(originalViolators); // Reset to original order
    } else {
      const sorted = [...violators].sort((a, b) => {
        const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
        const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      setSortedViolators(sorted);
    }
    setIsSorted(!isSorted); // Toggle the sort state
  };

  useEffect(() => {
    if (violators) {
      setOriginalViolators(violators);
      setSortedViolators(violators); // Default display
    }
  }, [violators]);

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
              <PreviewProfile selectedEntry={selectedViolator} />
            ) : (
              <div className="text-white text-center font-syke p-2">
                Select a violator to see details.
              </div>
            )}
          </div>

          <div className="w-[50%] h-full p-6 rounded-md">
            <div className="text-left rounded-xl bg-clip-padding">
              <div className="text-left font-syke-light text-white">
                <div className="text-textgreen py-3 flex justify-between items-center">
                  <div>
                    <h1 className="text-4xl font-syke-bold">Violator's List</h1>
                    <div>List of Violators within the university.</div>
                  </div>
                  <SearchAndSort
                    entries={violators}
                    setFilteredEntries={setSortedViolators}
                    handleSortToggle={handleSortToggle}
                    isSorted={isSorted}
                  />
                </div>
              </div>
              <div
                className="w-full h-[20rem] overflow-y-auto"
                id="listcontainer">
                <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar text-white">
                  {sortedViolators && sortedViolators.length > 0 ? (
                    sortedViolators.map((violator) => (
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
