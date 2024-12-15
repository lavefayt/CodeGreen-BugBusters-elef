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
import AddCarButton from "../components/AddCarButton";
import AddViolationButton from "../components/AddViolationButton";

const ViewProfile = () => {
  const { driverId } = useParams<{ driverId: string }>();
  const [activeSection, SetActiveSection] = useState("profile");
  const { loading, driver } = useGetDriver(driverId!);
  const { auth }: AuthContextType = useAuth();
  const [vehicleModalActive, setVehicleModalActive] = useState<boolean>(false);
  const [violationModalActive, setViolationModalActive] =
    useState<boolean>(false);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="flex flex-col items-center bg-homepage-bg md:bg-cover bg-no-repeat sm:bg-bottom md:bg-inherit lg:bg-left bg-center w-full h-screen">
      <div>{auth!.isAdmin ? <AdminHeader /> : <Header />}</div>

     
      <div className="flex flex-col">
        <div className="flex">
          <aside className=" grid items-center p-20">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-textgreen font-syke-bold mb-3 pb-3 w-20">
        My Gateway Account
      </h1>
            <nav>
              <div className="space-y-[2rem]">
                <button
                  onClick={() => SetActiveSection("profile")}
                  className={`block cursor-pointer transition-colors md:text-2xl sm:text-xl text-lg font-syke-medium ${
                    activeSection === "profile"
                      ? "text-textgreen"
                      : "text-white hover:text-textgreen"
                  }`}>
                  Profile
                </button>

                <button
                  onClick={() => SetActiveSection("vehicle")}
                  className={`block cursor-pointer transition-colors md:text-2xl sm:text-xl text-lg font-syke-medium ${
                    activeSection === "vehicle"
                      ? "text-textgreen"
                      : "text-white hover:text-textgreen"
                  }`}>
                  Vehicles
                </button>

                <button
                  onClick={() => SetActiveSection("violation")}
                  className={`block cursor-pointer transition-colors md:text-2xl sm:text-xl text-lg font-syke-medium ${
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
        <AddCarButton
          activeSection={activeSection}
          driver={driver}
          vehicleModalActive={vehicleModalActive}
          setVehicleModalActive={setVehicleModalActive}
        />
        <AddViolationButton
          activeSection={activeSection}
          driver={driver}
          violationModalActive={violationModalActive}
          setViolationModalActive={setViolationModalActive}
        />
      </div>
    </div>
  );
};

export default ViewProfile;
