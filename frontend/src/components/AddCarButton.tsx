import React from "react";
import AddCar from "./AddCar";
import { DriverWithVandC } from "../types/datatypes";

const AddCarButton = ({
  activeSection,
  driver,
  vehicleModalActive,
  setVehicleModalActive,
}: {
  activeSection: string;
  driver: DriverWithVandC;
  vehicleModalActive: boolean;
  setVehicleModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAddVehiclePressed = () => {
    setVehicleModalActive(true);
  };
  return (
    <>
      {activeSection === "vehicle" && (
        <button
          onClick={handleAddVehiclePressed}
          className="flex bg-buttongreen text-white py-3 px-5 hover:bg-[#33471a] font-syke-regular transition-colors rounded-md justify-center items-center font-bold text-md mt-3 w-auto self-end">
          Add Vehicle
        </button>
      )}
      {vehicleModalActive && (
        <AddCar
          driverId={driver.id!}
          licenseNumber={driver.license_number!}
          setVehicleModalActive={setVehicleModalActive}
        />
      )}
    </>
  );
};

export default AddCarButton;
