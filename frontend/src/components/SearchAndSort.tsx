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
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        className="p-2 rounded font-syke-medium bg-hoverbutton w-40 text-white focus:outline-none focus:ring-0 active:outline-none"
      />
      <button
        className="text-white bg-buttongreen w-20 h-10 rounded font-syke-medium active:bg-colorhover "
        onClick={handleSortToggle}
      >
        {isSorted ? "Default" : "Sort"}
      </button>
    </div>
  );
};

export default SearchAndSort;
