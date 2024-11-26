import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import DriverListCard from "../components/DriversListCard";
import useDrivers from "../hooks/useDrivers";

const DriversList = () => {
  const navigate = useNavigate();
  const { data: Drivers, loading, error } = useDrivers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-8 mt-5">
        <AdminHeader />
      </div>
      <div className="flex items-center space-x-80">
        <div className="relative space-x-20 bg-[rgba(34,38,41,0.66)] opacity-99 w-3/6 h-5/6">
          <h1 className="text-xl text-center text-textgreen font-syke-bold">
            Drivers info
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque felis sit amet odio ultricies, in tristique metus
          </p>
        </div>
        {/* Move the Drivers List container to the left by 20px */}
        <div className="relative bg-[rgba(34,38,41,0.66)] opacity-99 w-3/6 h-5/6 overflow-hidden transform translate-x-[-40px]">
          <h1 className="text-xl text-center text-textgreen font-syke-bold">
            Drivers List
          </h1>
          <div className="flex flex-col items-center overflow-y-auto h-full">
            <div className="flex justify-between items-center border-2 mb-3 border-black bg-color3 p-3 rounded-t-lg shadow-md w-full lg:text-base md:text-sm sm:text-xs text-xxs">
              <div className="flex-1 text-center">
                <span className="font-bold">First Name</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-bold">Last Name</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-bold">E-mail</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-bold">Sex</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-bold">Driver Type</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-bold">License No.</span>
              </div>
              <div className="flex-1 text-center">
                <span className="font-bold">License Exp.</span>
              </div>
            </div>
            <div className="relative w-full flex flex-col items-center">
              {Drivers && Drivers.length > 0 ? (
                Drivers.map((driver) => (
                  <DriverListCard
                    key={driver.license_number}
                    firstname={driver.first_name}
                    lastname={driver.last_name}
                    email={driver.email}
                    sex={driver.sex}
                    driver_type={driver.driver_type}
                    license_no={driver.license_number}
                    license_exp={driver.license_expiration_date}
                  />
                ))
              ) : (
                <p className="text-white text-center">No drivers found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriversList;
