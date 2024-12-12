import Header from "../components/Header";
import DriverProfileComponents from "../components/ProfileComponent/DriverProfileComp";
import DriverVehicleComponent from "../components/ProfileComponent/DriverVehicleComp";
import DriverViolationComponent from "../components/ProfileComponent/DriverViolationComp";

import { useState } from "react";
// import useEditViolation from "../hooks/useEditViolation";
import { useParams } from "react-router-dom";

const DriverProfile = () => {

  // const { id } = useParams()

  // if may params kamo tdi then use it. 
  // if wala, implemetn other way to fetch the id for useEditViolation hook

  

  const [activeSection, SetActiveSection] = useState("profile");
  // const { loading, violation } = useEditViolation(id!) // commented para di mag error


  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
      <div>
        <Header />
      </div>

      <h1 className="text-4xl text-textgreen font-syke-bold mb-3 pb-3 ">
        My Gateway Account
      </h1>

      <div className="flex">
        <aside className="p-4 grid items-center">
          <nav>
            <div className="space-y-[2rem]">
              <button
                onClick={() => SetActiveSection("profile")}
                className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                  activeSection === "profile"
                    ? "text-textgreen"
                    : "text-white hover:text-textgreen"
                }`}
              >
                Profile
              </button>

              <button
                onClick={() => SetActiveSection("vehicle")}
                className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                  activeSection === "vehicle"
                    ? "text-textgreen"
                    : "text-white hover:text-textgreen"
                }`}
              >
                Vehicles
              </button>

              <button
                onClick={() => SetActiveSection("violation")}
                className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                  activeSection === "violation"
                    ? "text-textgreen"
                    : "text-white hover:text-textgreen"
                }`}
              >
                Violations
              </button>
            </div>
          </nav>
        </aside>

        {activeSection === "profile" && <DriverProfileComponents />}

        {activeSection === "vehicle" && <DriverVehicleComponent />}

        {activeSection === "violation" && <DriverViolationComponent />}
      </div>
    </div>
  );
};

export default DriverProfile;
