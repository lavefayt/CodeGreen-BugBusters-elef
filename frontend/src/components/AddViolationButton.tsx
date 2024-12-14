import React from "react";
import { DriverWithVandC } from "../types/datatypes";
import AddViolation from "./AddViolationComponent";

const AddViolationButton = ({
  activeSection,
  driver,
  violationModalActive,
  setViolationModalActive,
}: {
  activeSection: string;
  driver: DriverWithVandC;
  violationModalActive: boolean;
  setViolationModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAddViolationPressed = () => {
    setViolationModalActive(true);
  };

  return (
    <>
      {activeSection === "violation" && (
        <button
          onClick={handleAddViolationPressed}
          className="flex bg-buttongreen text-white py-3 px-5 hover:bg-[#33471a] font-syke-regular transition-colors rounded-md justify-center items-center font-bold lg:text-md md:text-sm text-xs mt-3 w-auto self-end">
          Add Violation
        </button>
      )}
      {violationModalActive && (
        <AddViolation
          driverId={driver.id!}
          setViolationModalActive={setViolationModalActive}
        />
      )}
    </>
  );
};

export default AddViolationButton;
