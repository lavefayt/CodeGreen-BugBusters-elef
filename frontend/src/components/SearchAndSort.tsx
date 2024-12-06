import React, { SetStateAction, useState } from "react";
import { DriverWithVandC } from "../types/datatypes";

interface SearchAndSortProps {
  entries: DriverWithVandC[];
  setFilteredEntries: React.Dispatch<SetStateAction<DriverWithVandC[]>>;
  handleSortToggle: () => void;
  isSorted: boolean;
}

const SearchAndSort = ({
  entries,
  setFilteredEntries,
  handleSortToggle,
  isSorted,
}: SearchAndSortProps) => {
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm);

    const filteredItems = entries!.filter(
      (entry) =>
        entry!.first_name!.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry!.last_name!.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry!.license_number!.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchQuery != null || "") setFilteredEntries(filteredItems);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="text-white bg-textgreen w-20 h-8 rounded-md"
        onClick={handleSortToggle}>
        {isSorted ? "Default" : "Sort"}
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="p-2 rounded-md bg-white text-black"
      />
    </div>
  );
};

export default SearchAndSort;
