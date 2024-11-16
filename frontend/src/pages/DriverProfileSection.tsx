import Header from "../components/Header";
import { Link } from "react-router-dom";
import DriverProfileComponents from "../components/DriverProfileComp";

const DriverProfile = () => {

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-2 mt-5">
        <Header />
      </div>
      <h1 className="text-textgreen text-4xl mt-1 font-syke-bold">Driver Name</h1>
      <p className="text-white text-lg font-syke-light mt-1 mb-5">Driver Information</p>
      
    </div>
  );
};

export default DriverProfile;
