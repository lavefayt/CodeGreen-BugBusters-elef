import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Car } from "../types/datatypes";
import useAddCar from "../hooks/car-hooks/useAddCar";

const AddCar = ({
  driver_id,
  license_number,
  setVehicleModalActive,
}: {
  driver_id: string;
  license_number: string;
  setVehicleModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const { postCar } = useAddCar();

  const [formData, setFormData] = useState<Car>({
    driver_id: driver_id,
    brand: "",
    car_model: "",
    color: "",
    license_number: license_number,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await postCar(formData);
    setVehicleModalActive(false);
  };

  const handleCancelButton = () => {
    navigate("/encode");
  };

  const handleNextClick = async () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="absolute flex flex-col m-auto w-1/2 left-0 right-0 top-0 bottom-0 items-center justify-center h-1/2 px-6 py-5 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <h1 className="text-4xl font-syke-bold text-textgreen">Adding a Car</h1>
      {currentStep === 1 && (
        <>
          <p className="text-textgreen">Enter car details.</p>
          <div className="flex flex-col space-y-3 p-3">
            <div className="flex space-x-3">
              <div className="flex flex-col w-full">
                <h1 className="text-white font-syke-light text-xl">
                  License Plate
                </h1>
                <input
                  type="text"
                  className="bg-secondgrey font-syke-regular text-md w-full px-4 py-2 borderborder-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                  name="license_plate"
                  placeholder="Enter License Plate"
                  value={formData.license_plate}
                  onChange={handleChange}
                />
              </div>
            </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        Brand
                      </h1>
                      <input
                        type="text"
                        className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                        name="brand"
                        placeholder="Enter Brand"
                        required
                        value={formData.brand}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        Color
                      </h1>
                      <input
                        type="text"
                        className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                        name="color"
                        placeholder="Enter Color"
                        value={formData.color}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <h1 className="text-white font-syke-light text-xl">
                        Model
                      </h1>
                      <input
                        type="text"
                        className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
                        name="car_model"
                        placeholder="Enter Car Model"
                        required
                        value={formData.car_model}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <p className="text-textgreen">Confirm car details.</p>
          <div className="flex flex-col space-y-8 p-3 w-full">
            <div className="flex space-x-3 w-full">
              <div className="flex flex-col w-full">
                <h1 className="text-white font-syke-light text-xl">
                  License Plate
                </h1>
                <h1 className="text-textgreen font-syke-medium text-3xl">
                  {formData.license_plate}
                </h1>
              </div>
            </div>

            <div className="flex space-x-3">
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">Brand</h1>
                <h1 className="text-textgreen font-syke-medium text-3xl">
                  {formData.brand}
                </h1>
              </div>
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">Model</h1>
                <h1 className="text-textgreen font-syke-medium text-3xl">
                  {formData.car_model}
                </h1>
              </div>
              <div className="flex flex-col w-1/3">
                <h1 className="text-white font-syke-light text-xl">Color</h1>
                <h1 className="text-textgreen font-syke-medium text-3xl">
                  {formData.color}
                </h1>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-center items-center gap-5 p-5">
        {currentStep === 1 && (
          <>
            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleCancelButton}>
              Cancel
            </button>

            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleNextClick}>
              Next
            </button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleBackClick}>
              Back
            </button>

            <button
              type="button"
              className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm"
              onClick={handleSubmit}>
              Add Car
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddCar;
