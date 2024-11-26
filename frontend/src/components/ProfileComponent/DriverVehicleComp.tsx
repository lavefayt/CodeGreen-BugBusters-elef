import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DriverVehicleComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-full max-h-full justify-center">
        <div className="w-[35rem] h-[20rem] bg-hoverbutton overflow-y-auto rounded-md scrollbar">
          <ul className="border-b-2 border-t-2 border-t-transparent  border-b-inputfield space-y-[10px]">
            <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Plate Number
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  123-KVA
                </h1>
              </div>
              <div className="flex-[5rem] ">
                <h1 className="text-white font-syke-light text-l">
                  Car Registration Expiration Date
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  November 24, 2024
                </h1>
              </div>
            </div>

            <div className="flex-[2px] space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Car Model</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  2022 Mitsubishi Montero Sport
                </h1>
              </div>
            </div>
            </div>
          </ul>
          <ul className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[10px]">
            <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Plate Number
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  349-KIW
                </h1>
              </div>
              <div className="flex-[5rem] ">
                <h1 className="text-white font-syke-light text-l">
                  Car Registration Expiration Date
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  July 13, 2044
                </h1>
              </div>
            </div>

            <div className="flex-[2px] space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Car Model</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  2019 Honda Civic
                </h1>
              </div>
            </div>
            </div>
          </ul>
          <ul className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[10px]">
            <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  Plate Number
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  123-KVA
                </h1>
              </div>
              <div className="flex-[5rem] ">
                <h1 className="text-white font-syke-light text-l">
                  Car Registration Expiration Date
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  November 24, 2024
                </h1>
              </div>
            </div>

            <div className="flex-[2px] space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Car Model</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  2022 Mitsubishi Montero Sport
                </h1>
              </div>
            </div>
            </div>
          </ul>
      </div>
    </div>
  );
};

export default DriverVehicleComponent;
