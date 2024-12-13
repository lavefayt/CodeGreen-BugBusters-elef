import CarListCard from "./CarListCard";
import { DriverWithVandC } from "../../types/datatypes";

const VehicleList = ({ driver }: { driver: DriverWithVandC }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[35rem] h-[20rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-y-auto scrollbar">
        {driver.cars!.map((car) => (
          <CarListCard
            key={car.license_number || "placeholder-license"}
            car={car}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleList;