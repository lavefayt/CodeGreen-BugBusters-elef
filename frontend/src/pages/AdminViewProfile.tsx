import { useState } from "react";
import { useParams } from "react-router-dom"; 
import Violation from "../components/AdminViewProfileComponent/Violation";
import Vehicle from "../components/AdminViewProfileComponent/Vehicle";
import Profile from "../components/AdminViewProfileComponent/Profile";
import AdminHeader from "../components/AdminHeader";

const AdminViewProfile = () => {
  const { driverId } = useParams<{ driverId: string }>(); 
  const [activeSection, SetActiveSection] = useState("profile");

  console.log("Driver ID from URL:", driverId);

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
      <div>
        <AdminHeader />
      </div>

      <h1 className="text-4xl text-textgreen font-syke-bold mb-3 pb-3 ">
        My Gateway Account
      </h1>

      <div className="flex">
        <aside className="p-4 grid items-center">
          <nav>
            <ul className="space-y-[2rem]">
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
            </ul>
          </nav>
        </aside>

        {activeSection === "profile" && <Profile driverId={driverId} />}
        {activeSection === "vehicle" && <Vehicle />}
        {activeSection === "violation" && <Violation />}
      </div>
    </div>
  );
};

export default AdminViewProfile;
