import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-login-bg bg-cover space-y-12">
      <div className="flex flex-col justify-center items-center">
        <p className="text-8xl text-textgreen font-syke-bold">UNAUTHORIZED</p>
        <p className="text-xl text-textgreen font-syke-light">
          You are currently not logged in. Please log in to access the website.
        </p>
      </div>

      <button
        className="flex bg-buttongreen font-syke-medium text-white py-2 px-10 hover:bg-[#33471a] transition-colors rounded-sm justify-center items-center text-2xl"
        onClick={handleBackToLogin}>
        BACK TO LOGIN
      </button>
    </div>
  );
};

export default UnauthorizedPage;
