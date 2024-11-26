import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DriverViolationComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-full max-h-full justify-center">
      <div className="w-[35rem] h-[20rem] bg-hoverbutton overflow-y-auto rounded-md scrollbar">
        <ul className="border-b-2 border-t-2 border-t-transparent  border-b-inputfield space-y-[10px]">
          <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Violation</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  Expired Registration
                </h1>
              </div>
              <div className="flex-1 ">
                <h1 className="text-white font-syke-light text-l">
                  Date of Violation
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  November 24, 2024
                </h1>
              </div>
            </div>
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-thin text-m">Description</h1>
                <h1 className="text-textgreen font-syke text-l w-[15rem]">
                Operating with expired vehicle registration inside the campus.
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-m">
                  Status
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  Paid
                </h1>
              </div>
            </div>
          </div>
        </ul>
        <ul className="border-b-2 border-t-2 border-t-transparent  border-b-inputfield space-y-[10px]">
          <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Violation</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  Expired Registration
                </h1>
              </div>
              <div className="flex-1 ">
                <h1 className="text-white font-syke-light text-l">
                  Date of Violation
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  November 24, 2024
                </h1>
              </div>
            </div>
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-thin text-m">Description</h1>
                <h1 className="text-textgreen font-syke text-l w-[15rem]">
                Operating with expired vehicle registration inside the campus.
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-m">
                  Status
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  Paid
                </h1>
              </div>
            </div>
          </div>
        </ul>
        <ul className="border-b-2 border-t-2 border-t-transparent  border-b-inputfield space-y-[10px]">
          <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-l">Violation</h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  Expired Registration
                </h1>
              </div>
              <div className="flex-1 ">
                <h1 className="text-white font-syke-light text-l">
                  Date of Violation
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  November 24, 2024
                </h1>
              </div>
            </div>
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-thin text-m">Description</h1>
                <h1 className="text-textgreen font-syke text-l w-[15rem]">
                Operating with expired vehicle registration inside the campus.
                </h1>
              </div>
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-m">
                  Status
                </h1>
                <h1 className="text-textgreen font-syke-medium text-xl">
                  Paid
                </h1>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DriverViolationComponent;
