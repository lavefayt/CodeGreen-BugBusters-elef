import Header from "../components/Header";
import DriverProfileComponents from "../components/DriverProfileComp";
import { useState } from "react";
const DriverProfile = () => {

  const[activeSection, SetActiveSection] = useState("profile")

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
    <div> 
      <Header/> 
      </div>
      
    <h1 className="text-4xl text-textgreen font-syke-bold mr-[10rem] pb-3">My Gateway Account</h1>

      <div className="mi flex">
      <aside className="w-auto h-auto shadow-lg pr-2 mr-4 mb-5">
      <nav className="mt-4 ">
        <ul className="space-y-8">

          <li>
            <a 
            className="block cursor-pointer transition-colors text-white text-2xl font-syke-medium hover:text-textgreen"
            onClick={() => SetActiveSection("profile")}>
              
              Profile
              </a>
          </li>

          <li>
            <a 
            className="block cursor-pointer transition-colors text-white text-2xl font-syke-medium hover:text-textgreen"
            onClick={() => SetActiveSection("vehicle")}>
              Vehicles
              </a>
          </li>

          <li>
            <a 
            className="block cursor-pointer transition-colors text-white text-2xl font-syke-medium hover:text-textgreen"
            onClick={() => SetActiveSection("violation")}>
              Violations
              </a>
          </li>

        </ul>

      </nav>
    </aside>
    { activeSection === "profile" && (
      <DriverProfileComponents />
    )}

    { activeSection === "vehicles" && (
      <h1>component here</h1>
  )}

    { activeSection === "violation" && ( 
      <h1>component here</h1>
  )}
    </div>
    </div>

  );
};

export default DriverProfile;
