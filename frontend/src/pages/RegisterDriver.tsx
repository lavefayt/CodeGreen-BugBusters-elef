import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const RegisterDriver = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleRegisterClick = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleConfirmClick = () => {
    navigate("/homepage");
  };

  return (
    <div className="flex flex-col items-center bg-hoverbutton bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="w-full max-w-3xl mb-8 mt-5">
        <Header />
      </div>

      {currentStep === 1 && (
        <div className="text-center font-syke-light text-white justify-center items-center">
          <div className="text-textgreen text-2xl text-left font-syke-medium">
            <h1>Registration Form</h1>

            <div className="bg- w-[40rem] h-[25rem] mt-4">
              <form className="space-y-2">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Last Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="last_name"
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      First Name
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="first_name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">Sex</h1>
                    <select
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="sex"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>{" "}
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Date of Birth
                    </h1>
                    <input
                      type="date"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="birthday"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      Driver Type
                    </h1>
                    <select
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="drivertype"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Student">Male</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Guest">Guest</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Number:
                    </h1>
                    <input
                      type="text"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="first_name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-white font-syke-light text-xl">
                      License Expiration Date
                    </h1>
                    <input
                      type="date"
                      className="bg-secondgrey font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 border h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                      name="birthday"
                      required
                    />
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="w-[10rem] py-2 mt-[30px] bg-buttongreen text-white hover:bg-colorhover font-syke-regular transition-colors rounded-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(34,38,41,0.66)] opacity-95 w-[804px] h-[451px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <button
            className="absolute top-0 right-0 w-[23px] h-[25px] p-2"
            onClick={handleBackClick}
          >
            <img src="/assets/X.png" alt="Close" />
          </button>
          <div>
            <p className="text-white">are you sure you want to continue?</p>
          </div>
          <button
            type="button"
            className="w-32 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm mt-4"
            onClick={handleConfirmClick}
          >
            confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterDriver;
