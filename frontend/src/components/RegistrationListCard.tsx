import React, { useState, useRef, useEffect } from "react";

interface RegistrationProps {
  firstName: string;
  lastName: string;
  email: string;
  sex: string;
  driverType: string;
  licenseNo: string;
  licenseExp: string;
}

const RegistrationListCard = ({
  firstName,
  lastName,
  email,
  sex,
  driverType,
  licenseNo,
  licenseExp,
}: RegistrationProps) => {

};
const RegistrationDetailsComp = () => {
  return (
    <div className="justify-items-start">
      <div
        alt="container"
        className="w-[35rem] h- flex-2 bg-gray-400 rounded-l-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <div className="max-w-full max-h-full flex justify-center items-center">
      <div
        alt="container"
        className="w-[35rem] h-[20rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <div className="items-center p-4">
        <form className="space-y-[2rem]">
          <div className="flex space-x-1">
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Last Name</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Alcorin
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">First Name</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Shawn Patrick
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Middle Name</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Surilla
              </h1>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Sex</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Female
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">
                Date of Birth
              </h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                02/29/2004
              </h1>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-syke-light text-l">Driver Type</h1>
              <h1 className="text-textgreen font-syke-medium text-xl">
                Student
              </h1>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Email</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  shawnpatrick.alcorin-23@cpu.edu.ph
                </h1>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  License Number
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  NO3-12-123456
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">
                  License Expiration Date
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  03/10/2026
                </h1>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default RegistrationDetailsComp;
