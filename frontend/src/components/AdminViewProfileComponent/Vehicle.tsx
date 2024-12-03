
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarListCard from "./CarListCard"; 
import { Cars } from "../../types/datatypes"; 
import useCars from "../../hooks/car-hooks/useCars";

interface VehicleProps {
  driverId?: string; 
}

const Vehicle = ({ driverId }: VehicleProps) => {
  const { driverId: paramDriverId } = useParams<{ driverId: string }>();
  const driverIdToUse = driverId || paramDriverId; 

  const { data: cars, error, loading } = useCars(driverIdToUse || ""); 

  useEffect(() => {
    if (driverIdToUse) {
      console.log("Driver ID in Vehicle:", driverIdToUse);
    }
  }, [driverIdToUse]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error.message}</div>;
  }

  if (!cars || cars.length === 0) {
    return <div className="text-white">No vehicles found for this driver.</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl text-textgreen font-syke-bold mb-4">
      </h2>
      <div className="w-[35rem] h-[20rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-y-auto scrollbar">
        {cars.map((car) => (
          <CarListCard
            key={car.license_number || "placeholder-license"} 
            license_number={car.license_number || ""} 
            license_plate={car.license_plate || ""} 
            brand={car.brand || ""} 
            car_model={car.car_model || ""} 
            color={car.color || ""} 
          />
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
