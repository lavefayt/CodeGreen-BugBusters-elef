import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const HomePage = () => {
  const navigate = useNavigate();
  const { data: user } = useUser();

  const handleRegisterButton = () => {
    navigate("/register-driver");
  };

  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat h-screen">
      <div>
        <Header />
      </div>

      <div className="flex space-x-2 p-5">
        <h1 className="text-3xl text-textgreen font-syke-bold">Welcome,</h1>
        {user?.map((user) => (
          <h1 key={user.id} className="text-3xl text-white font-syke-bold">
            {user.first_name}
          </h1>
        ))}
      </div>

      <div className="justify-center text-center text-white mt-5 font-syke p-5 space-y-7">
        <h1>Oops! It looks like you have not registered yet as a driver.</h1>
      </div>
      <div>
        <button
          type="button"
          className="p-2 rounded-sm w-[10rem] font-syke-medium text-white bg-buttongreen hover:bg-colorhover transition-colors duration-300"
          onClick={handleRegisterButton}
        >
          Register Now!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
