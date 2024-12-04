import { useNavigate } from "react-router-dom";
import { useState } from "react";

import AdminHeader from "../components/AdminHeader";
import DriverListCard from "../components/DriversListCard";
import useDrivers from "../hooks/driver-hooks/useDrivers";
import Loading from "../components/Loading";
import { DriverWithVandC } from "../types/datatypes.ts";

const DriversList = () => {
  const { data: Drivers, loading } = useDrivers();
  const [selectedDriver, setSelectedDriver] = useState<DriverWithVandC>();

  const navigate = useNavigate();
  // Handle driver click to show more details
  const handleDriverClick = (driver: DriverWithVandC) => {
    setSelectedDriver(driver);
    console.log(driver.id);
  };

  const handleViewProfile = () => {
    if (!selectedDriver) return;
    navigate(`/view-profile/${selectedDriver.id}`);
    // navigate(`/view-profile`);
  };

  if (loading) return <Loading loading={loading} />;

  return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <AdminHeader />
      </div>

      {/* Main Content */}
      {/* drivers info left side */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 w-full px-5">
        <div className="bg-zinc-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-full lg:w-2/5 p-6 rounded-lg shadow-md mb-5 lg:mb-0">
          <h1 className="text-2xl text-center text-textgreen font-syke-bold mb-4">
            Driver's Information
          </h1>
          {/* <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque felis sit amet odio ultricies, in tristique metus
          </p> */}
          {selectedDriver ? (
            <div>
              <h1 className="text-xl text-center text-textgreen font-syke-bold mb-2">
                Personal Details :
              </h1>

              <p className="text-white">
                <strong className="text-textgreen">Last Name : </strong>{" "}
                {selectedDriver.last_name}
              </p>

              <p className="text-white">
                <strong className="text-textgreen">First Name : </strong>{" "}
                {selectedDriver.first_name}
              </p>

              <p className="text-white">
                <strong className="text-textgreen">Middle Name : </strong>{" "}
                {selectedDriver.middle_name}
              </p>

              <p className="text-white">
                <strong className="text-textgreen">Email : </strong>{" "}
                {selectedDriver.email}
              </p>

              <h1 className="text-xl text-center text-textgreen font-syke-bold mb-2">
                More Details :
              </h1>

              <p className="text-white">
                <strong className="text-textgreen">Sex : </strong>{" "}
                {selectedDriver.sex}
              </p>

              <p className="text-white">
                <strong className="text-textgreen">Date of Birth : </strong>{" "}
                {selectedDriver.date_of_birth}
              </p>

              <h1 className="text-xl text-center text-textgreen font-syke-bold mb-2">
                License Details :
              </h1>

              <p className="text-white">
                <strong className="text-textgreen">License Number : </strong>{" "}
                {selectedDriver.license_number}
              </p>

              <p className="text-white">
                <strong className="text-textgreen">
                  License Expiration :{" "}
                </strong>{" "}
                {selectedDriver.license_expiration_date}
              </p>

              <div className="flex justify-center mt-6">
                <div className="flex justify-center w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm">
                  <button onClick={() => handleViewProfile()}>
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white">Click a driver to see more details.</p>
          )}
        </div>

        {/* Move the Drivers List container to the left by 20px */}
        {/* Drivers List Section */}
        <div className="w-[50%] h-full p-6 rounded-r-md  bg-gray-400 rounded-l-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <div className="text-left rounded-xl bg-clip-padding">
            <div className="text-left font-syke-light text-white">
              <div className="text-textgreen py-3">
                <h1 className="text-4xl font-syke-bold">Driver's List</h1>
                <div>List of Registered Drivers.</div>
              </div>
            </div>
            <div
              className="w-full h-[23rem] overflow-y-auto rounded-md scrollbar"
              id="listcontainer"
            >
              {/* drivers list header */}
              <div className="flex justify-between font-syke-medium items-center border-b-2 pb-2 mb-2 border-white text-white text-xl">
                <div className="flex-1 text-center">First Name</div>
                <div className="flex-1 text-center">Last Name</div>
                <div className="flex-1 text-center">License No.</div>
              </div>

              {/* Scrollable Driver List */}
              <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar text-white">
                {Drivers && Drivers.length > 0 ? (
                  Drivers.map((driver) => (
                    <div
                      key={driver.id}
                      className="cursor-pointer hover:bg-gray-700"
                      onClick={() => handleDriverClick(driver)} // Show more details on click
                    >
                      <DriverListCard
                        key={driver.id}
                        id={driver.id!}
                        firstname={driver.first_name!}
                        lastname={driver.last_name!}
                        driver_type={driver.driver_type!}
                        license_no={driver.license_number!}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center">No drivers found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriversList;

// import { useState } from "react";
// import { Spinner } from "react-activity";
// import AdminHeader from "../components/AdminHeader";
// import DriverListCard from "../components/DriversListCard";
// import useDrivers from "../hooks/useDrivers";

// const DriversList = () => {
//   const { data: Drivers, loading } = useDrivers();
//   const [selectedDriver, setSelectedDriver] = useState<any>(null);

//   // Handle driver click to show more details
//   const handleDriverClick = (driver: any) => {
//     setSelectedDriver(driver);
//   };

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Spinner size={50} color="#008000" animating={loading} />
//       </div>
//     );

//   return (
//     <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
//       <div>
//         <AdminHeader />
//       </div>

//       {/* Main Content */}
//       {/* drivers info left side */}
//       <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 w-full px-5">
//         <div className="bg-[rgba(34,38,41,0.66)] opacity-99 w-full lg:w-2/5 p-6 rounded-lg shadow-md mb-5 lg:mb-0">
//           <h1 className="text-xl text-center text-textgreen font-syke-bold mb-4">
//             Drivers Info
//           </h1>
//           {selectedDriver ? (
//             <div>
//               <p className="text-white">
//                 <strong>Email:</strong> {selectedDriver.email}
//               </p>
//               <p className="text-white">
//                 <strong>Sex:</strong> {selectedDriver.sex}
//               </p>
//               <p className="text-white">
//                 <strong>License Expiration:</strong> {selectedDriver.license_expiration_date}
//               </p>
//             </div>
//           ) : (
//             <p className="text-white">Click a driver to see more details.</p>
//           )}
//         </div>

//         {/* Drivers List Section */}
//         <div className="bg-[rgba(34,38,41,0.66)] opacity-99 w-full lg:w-3/5 p-4 rounded-lg shadow-md overflow-hidden">
//           <h1 className="text-xl text-center text-textgreen font-syke-bold">
//             Drivers List
//           </h1>

//           {/* drivers list header */}
//           <div className="flex justify-between items-center border-b-2 pb-2 mb-2 border-gray-400 text-white text-sm">
//             <div className="flex-1 text-center font-bold">First Name</div>
//             <div className="flex-1 text-center font-bold">Last Name</div>
//             <div className="flex-1 text-center font-bold">Driver Type</div>
//             <div className="flex-1 text-center font-bold">License No.</div>
//           </div>

//           {/* Scrollable Driver List */}
//           <div className="flex flex-col overflow-y-auto h-80 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 text-white">
//             {Drivers && Drivers.length > 0 ? (
//               Drivers.map((driver) => (
//                 <div
//                   key={driver.license_number}
//                   className="cursor-pointer hover:bg-gray-700 p-2"
//                   onClick={() => handleDriverClick(driver)} // Show more details on click
//                 >
//                   <DriverListCard
//                     firstname={driver.first_name!}
//                     lastname={driver.last_name!}
//                     driver_type={driver.driver_type!}
//                     license_no={driver.license_number!}
//                   />
//                 </div>
//               ))
//             ) : (
//               <p className="text-white text-center">No drivers found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriversList;
