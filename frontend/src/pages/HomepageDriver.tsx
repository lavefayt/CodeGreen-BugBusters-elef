import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomepageDriver = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header/>
      </div>
      
      <div className="mt-3 px-5 py-3 w-auto bg-[#222629] h-auto rounded flex">
        <div className="w-full">
          <h1 className="text-xl font-syke-medium text-white">Notices</h1>
          <div className="mt-2 h-auto bg-[#474B4F] py-3 px-3 overflow-y-scroll rounded scrollbar">
            <p className="text-white p-2">
              Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-white p-2">
              Event 2: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 2: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 2: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 2: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">
              Event 2: Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="text-white p-2">mamamo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageDriver;
