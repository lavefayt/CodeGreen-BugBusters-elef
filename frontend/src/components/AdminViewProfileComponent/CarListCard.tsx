import React, { useState } from "react";
import { useDeleteCar } from "../../hooks/car-hooks/useDeleteCar";


interface CarProps {
  id: string
  license_number: string;
  license_plate: string;
  brand: string;
  car_model: string;
  color: string;
}

const CarListCard: React.FC<CarProps> = ({
  id,
  license_number,
  license_plate,
  brand,
  car_model,
  color,
}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {deleteCar} = useDeleteCar()

  const handleDeleteCar = () => { 
    deleteCar(id)
  }

  return (
    <ul className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[10px] relative">
      <div className="ml-2 space-y-3 p-3">
        <div className="flex space-x-4">

          <div className="flex-1">

            <h1 className="text-white font-syke-light text-xl"
            >
              License Number:
            </h1>

            <h1 className="text-textgreen font-syke-medium text-xl">
              {license_number}
            </h1>

          </div>

          <div className="flex-1">

            <h1 className="text-white font-syke-light text-xl"
            >
              Plate Number:
              </h1>

            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {license_plate}
            </h1>

          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">

            <h1 className="text-white font-syke-light text-xl"
            >
              Brand:
              </h1>
            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {brand}
              </h1>

          </div>

          <div className="flex-1">

            <h1 className="text-white font-syke-light text-xl"
            >
              Model:
              </h1>
            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {car_model}
            </h1>

          </div>

          <div className="flex-1">

            <h1 className="text-white font-syke-light text-xl"
            >
              Color:
              </h1>
            <h1 className="text-textgreen font-syke-medium text-xl"
            >
              {color}
              </h1>

          </div>
        </div>
      </div>



      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-50">
        <button
          className="text-white px-2 py-1 rounded-full hover:bg-lime-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-2xl">
            ⋮
            </span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-10">

            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Edit
            </button>

            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 text-red-500"
              onClick={ handleDeleteCar }
            >
              Delete
            </button>

          </div>

        )}
      </div>
    </ul>
  );
};

export default CarListCard;
