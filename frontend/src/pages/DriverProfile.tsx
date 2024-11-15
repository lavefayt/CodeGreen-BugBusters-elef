import Header from "../components/Header";
import { Link } from "react-router-dom";

const DriverProfile = () => {
  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-2 mt-3">
        <Header />
      </div>
      <h1 className="text-textgreen text-4xl mt-1 font-syke-bold">Driver Name</h1>
      <p className="text-white text-lg font-syke-light mt-1 mb-10">Driver Information</p>
      <div className="">
        <nav className="flex space-x-28 text-white font-medium text-lg">
          <Link
            to="/encode"
            className="hover:text-textgreen transition-colors">
            Profile
          </Link>

          <Link
            to="/driverslist"
            className="hover:text-textgreen transition-colors">
            Vehicles
          </Link>

          <Link
            to="/violatorslist"
            className="hover:text-textgreen transition-colors">
            Violations
          </Link>
          <Link
            to="/driverprofile"
            className="hover:text-textgreen transition-colors">
            License
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DriverProfile;
