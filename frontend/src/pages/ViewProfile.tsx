import { useState } from "react";
import { useParams } from "react-router-dom";
import ViolationList from "../components/AdminViewProfileComponent/ViolationList";
import VehicleList from "../components/AdminViewProfileComponent/VehicleList";
import Profile from "../components/AdminViewProfileComponent/Profile";
import AdminHeader from "../components/AdminHeader";
import Header from "../components/Header";
import useGetDriver from "../hooks/driver-hooks/useGetDriver";
import { AuthContextType } from "../types/user.types";
import useAuth from "../hooks/context-hooks/useAuth";
import Loading from "../components/Loading";
import AddCar from "./AddCar";

const ViewProfile = () => {
  const { driverId } = useParams<{ driverId: string }>();
  const [activeSection, SetActiveSection] = useState("profile");
  const { loading, driver } = useGetDriver(driverId!);
  const { auth }: AuthContextType = useAuth();
  const [vehicleModalActive, setVehicleModalActive] = useState<boolean>(false);

  const handleAddVehicle = () => {
    setVehicleModalActive(true);
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="relative flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
      <div>{auth!.isAdmin ? <AdminHeader /> : <Header />}</div>

      <h1 className="text-4xl text-textgreen font-syke-bold mb-3 pb-3 ">
        My Gateway Account
      </h1>
      <div className="flex flex-col">
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
                  }`}>
                  Profile
                </button>

                <button
                  onClick={() => SetActiveSection("vehicle")}
                  className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                    activeSection === "vehicle"
                      ? "text-textgreen"
                      : "text-white hover:text-textgreen"
                  }`}>
                  Vehicles
                </button>

                <button
                  onClick={() => SetActiveSection("violation")}
                  className={`block cursor-pointer transition-colors text-2xl font-syke-medium ${
                    activeSection === "violation"
                      ? "text-textgreen"
                      : "text-white hover:text-textgreen"
                  }`}>
                  Violations
                </button>
              </div>
            </nav>
          </aside>
          {activeSection === "profile" && <Profile driver={driver} />}
          {activeSection === "vehicle" && <VehicleList driver={driver} />}
          {activeSection === "violation" && (
            <ViolationList violations={driver.violations!} />
          )}
        </div>
        {activeSection === "vehicle" && (
          <button
            onClick={handleAddVehicle}
            className="flex bg-buttongreen text-white py-3 px-5 hover:bg-[#33471a] font-syke-regular transition-colors rounded-md justify-center items-center font-bold text-md mt-3 w-auto self-end">
            Add Vehicle
          </button>
        )}
        {activeSection === "violation" && (
          <button className="flex bg-buttongreen text-white py-3 px-5 hover:bg-[#33471a] font-syke-regular transition-colors rounded-md justify-center items-center font-bold text-md mt-3 w-auto self-end">
            Add Violation
          </button>
        )}
      </div>
      {vehicleModalActive && (
        <AddCar
          driver_id={driverId!}
          license_number={driver.license_number!}
          setVehicleModalActive={setVehicleModalActive}
        />
      )}
    </div>
  );
};

export default ViewProfile;
