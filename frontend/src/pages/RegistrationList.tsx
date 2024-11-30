import AdminHeader from "../components/AdminHeader";
import RegistrationDetailsComp from "../components/RegistrationListCard";
import useGetRegistration from "../hooks/useGetRegistration";


const RegistrationList = () => {
  return (
    <div className="flex flex-col items-center bg-adminlanding-bg min-h-screen">
      <div>
        <AdminHeader />
      </div>
      <div className="flex flex-row justify-between w-[70rem] h-[30rem] bg-gray-400 rounded-md backdrop-filter bg-clip-padding backdrop-blur-sm bg-opacity-10 border-hoverbutton">
        <div className="w-[50%]">
          <RegistrationDetailsComp />
        </div>

        <div className="w-[50%] h-full p-6 rounded-r-md">
          <div className="text-left rounded-xl bg-clip-padding">
            <div className="text-left font-syke-light text-white">
              <div className="text-textgreen py-3">
                <h1 className="text-4xl font-syke-bold">Registration List</h1>
                <div>Approve or Reject User's Registration.</div>
              </div>
            </div>
            <div
              className="w-full h-[23rem] overflow-y-auto rounded-md scrollbar"
              alt="listcontainer"
            >
              <ul className="border-b-2 border-t-2 border-t-transparent border-b-inputfield space-y-[20px]" oncli>
                <div className="space-y-[2]">
                  <div className="flex justify-between items-center">
                    <div className="flex-1 min-w-[60%]">
                      <h1 className="text-white font-syke-light text-md">
                        Name
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        SEVERINO, SHAWN YSABEL GALLO
                      </h1>
                    </div>
                    <div className="flex-1 text-left">
                      <h1 className="text-white font-syke-light text-l">
                        Date Registered
                      </h1>
                      <h1 className="text-textgreen font-syke-medium text-xl">
                        11/24/2024
                      </h1>
                    </div>
                    
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationList;
