import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomepageDriver = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-8 mt-5">
        <Header />
      </div>

      <div className="text-center text-white justify-center items-center">
        <h1 className="text-4xl font-syke-bold text-textgreen">
          Welcome, Shawn Patrick
        </h1>
      </div>

      <div className="mt-8 px-6 py-3 w-[45rem] bg-[#222629] h-[23rem] rounded flex">
        {/* Upcoming Events Section */}
        <div className="w-3/4 pr-2">
          <h1 className="text-xl font-syke-medium text-white">Notices</h1>
          <div className="mt-2 h-[18.5rem] bg-[#474B4F] overflow-y-auto rounded scrollbar">
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

        <div className="w-1/2 pl-2">
          <div className="mt-2 h-[18.5rem] rounded">
            <p className="text-white p-2 text-xl mt-[2rem] text-right font-syke-light">
              To rectify your violations,
              <br />
              please proceed to
            </p>
            <p className="text-textgreen mt-[10px] font-syke-medium text-xl text-right">CPU Administration Building</p>
            <p className="text-white text-right font-syke-regular"> 8:00 AM - 5:00 PM on Weekdays
           <br /> 8:00 AM - 12:00 PM on Saturdays</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageDriver;
