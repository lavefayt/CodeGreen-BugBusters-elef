import Header from "../components/Header";

const NotificationList = () => {
  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat h-screen">
      <div>
        <Header />
      </div>

      <div className="flex space-x-2 p-5">
        <h1 className="text-3xl text-textgreen font-syke-bold">Welcome,</h1>
        <h1 className="text-3xl text-white font-syke-bold">Shawn Patrick</h1>
      </div>

      <div className="flex w-11/12 md:w-2/3 lg:w-1/2 mt-8 bg-gray-800 rounded-md shadow-lg">
        <div className="w-2/3 p-4">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Notices</h2>
          </div>

          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            <div className="bg-gray-700 p-3 rounded-md shadow flex items-center">
              <img
                src="../assets/cpuLogo.png"
                alt="Logo"
                className="w-8 h-8 mr-3"
              />
              <div>
                <h3 className="text-sm font-bold text-white">CPU Admin</h3>
                <p className="text-sm mt-1 text-white">
                  Notice of Parking Violation in Paid Parking Lot.
                </p>
                <span className="text-xs text-white mt-2 block">4:55 PM</span>
              </div>
            </div>

            <div className="bg-gray-700 p-3 rounded-md shadow flex items-center">
              <img
                src="../assets/cpuLogo.png"
                alt="Logo"
                className="w-8 h-8 mr-3"
              />
              <div>
                <h3 className="text-sm font-bold text-white">CPU Admin</h3>
                <p className="text-sm mt-1 text-white">
                  Notice of Parking Violation in Paid Parking Lot.
                </p>
                <span className="text-xs text-white mt-2 block">4:55 PM</span>
              </div>
            </div>

            <div className="bg-gray-700 p-3 rounded-md shadow flex items-center">
              <img
                src="../assets/cpuLogo.png"
                alt="Logo"
                className="w-8 h-8 mr-3"
              />
              <div>
                <h3 className="text-sm font-bold text-white">CPU Admin</h3>
                <p className="text-sm mt-1 text-white">
                  Notice of Parking Violation in Paid Parking Lot.
                </p>
                <span className="text-xs text-white mt-2 block">4:55 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 p-4 bg-gray-700 rounded-l-md text-right">
          <p className="text-sm text-gray-300 mt-6">
            To rectify your violations, please proceed to:
          </p>
          <p className="text-sm text-gray-300 mt-6">
            <strong>CPU Administration Building</strong>
          </p>
          <div className="mt-4 text-xs text-gray-300">
            <p>
              <span className="text-textgreen">8:00 AM - 5:00 PM</span> on Weekdays
            </p>
            <p>
              <span className="text-textgreen">8:00 AM - 12:00 PM</span> on Saturdays
            </p>
          </div>
          <p className="text-sm text-gray-300 mt-6">For more information:</p>
          <div className="text-gray-300 mt-4">
            <div className="flex justify-end items-center">
              <span className="text-xs mr-2">(033) 3291971</span>
              <img
                src="../assets/phoneNumber.png"
                alt="Phone Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex justify-end items-center text-gray-300 mt-3">
              <span className="text-xs mr-2">businessdept@cpu.edu.ph</span>
              <img
                src="../assets/bussinessAdLogo.png"
                alt="Email Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex justify-end items-center text-gray-300 mt-3">
              <span className="text-xs mr-2">cpu.edu.ph</span>
              <img
                src="../assets/cpuEmailLogo.png"
                alt="Website Icon"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default NotificationList;
