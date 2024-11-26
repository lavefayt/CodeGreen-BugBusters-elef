import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

const DriversList = () => {
  const navigate = useNavigate();
  return (
    // <p>Driver List Page!</p>
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
        <div className="relative  bg-[rgba(34,38,41,0.66)] opacity-99 w-3/6 h-5/6">
          <h1 className="text-xl text-center text-textgreen font-syke-bold">
            Drivers List
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque felis sit amet odio ultricies, in tristique metus
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriversList;
