import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
    const navigate = useNavigate()

    const handleCancelButton = () => { 
        navigate("/homepage")
    }

    const handleSubmitButton = () => { 
        //pass
    }

  return (
    <div className="flex flex-col items-center bg-policies-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">

      <div>
        <Header />
      </div>

      <div className="space-y-5 w-full max-w-md mt-8">

        <div className="flex flex-col space-y-4">

          <div className="flex-1">
            <h1 
            className="text-white font-syke-light text-xl">
                Current Password
                </h1>
            <input
              type="password"
              className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
              name="current_password"
              required
            />
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">
                New Password
                </h1>
            <input
              type="password"
              className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
              name="new_password"
              required
            />
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">
                Confirm Password
                </h1>
            <input
              type="password"
              className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
              name="confirm_password"
              required
            />
          </div>

        </div>

      </div>
      
        <div className="flex justify-between w-full max-w-sm p-5">

            <button
                type="button"
                onClick={ handleCancelButton }
                className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm">
                Cancel
            </button>

            <button
                type="button"
                onClick={ handleSubmitButton }
                className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm">
                Confirm
            </button>

        </div>

    </div>
  );
};

export default ChangePassword;
