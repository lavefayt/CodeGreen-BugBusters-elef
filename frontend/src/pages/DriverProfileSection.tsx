import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import DriverProfileComponents from "../components/DriverProfileComp";

const DriverProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover sm:bg-top md:bg-right lg:bg-left bg-no-repeat h-screen">
    <div> <Header/> </div>
      <div class="min-h-screen flex">

      <aside class="w-[10rem] bg-white shadow-lg">
      <nav class="mt-4">
        <ul>
          <li>
            <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-blue-100">Account Details</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-blue-100">Shipping Address</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-blue-100">Payment Methods</a>
          </li>
        </ul>
      </nav>
    </aside>
    <div>
      <DriverProfileComponents/>
    </div>
    </div>
    </div>

  );
};

export default DriverProfile;
