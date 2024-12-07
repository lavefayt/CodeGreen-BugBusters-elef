import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";
import NotificationsList from "../components/NotificationsList";
import Loading from "../components/Loading";

const HomePage = () => {
  const navigate = useNavigate();
  const { data: data, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left">
        <Spinner size={50} color="#86C232" />
      </div>
    );
  }

  const handleRegisterButton = () => {
    navigate("/register-driver");
  };
  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <div className="flex flex-col items-center bg-homepage-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header />
      </div>

      <div className="flex space-x-2 p-5">
        <h1 className="text-3xl text-textgreen font-syke-bold">Welcome,</h1>
        <h1 className="text-3xl text-white font-syke-bold">
          {data?.user.first_name}
        </h1>
      </div>
      {!data?.hasRegistered && !data?.isDriver && (
        <div className="justify-center text-center text-white mt-5 font-syke p-5 space-y-7">
          <h1>Oops! It looks like you have not registered yet as a driver.</h1>
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
      )}
      {data?.hasRegistered && (
        <div className="justify-center text-center text-white mt-5 font-syke p-5 space-y-7">
          <div className="bg-secondgrey bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md mx-auto text-center space-y-6 animate-fadeInZoom">
            <h1 className="text-2xl font-syke-bold text-textgreen">
              🎉 Registration Submitted!
            </h1>

            {/* Typewriter animation */}
            <div className="relative text-white text-lg overflow-hidden h-12">
              <p className="inline-block whitespace-nowrap border-r-2 border-textgreen pr-2 animate-typewriter">
                Thank you for registering as a driver. Our team is reviewing
                your details to validate your registration.
              </p>
            </div>

            <p className="text-white leading-relaxed">
              Please allow <b className="text-buttongreen">3-5</b> working days
              for the validation process to complete. Once verified, you will
              receive a notification.
            </p>

            <div className="mt-4">
              <p className="text-sm text-gray-300">
                For inquiries or updates, feel free to contact our support team
                at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-buttongreen underline hover:text-textgreen transition duration-300"
                >
                  support@example.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
      {data?.isDriver && (
        <div className="justify-center text-center w-4/6 text-white mt-5 font-syke p-5 space-y-7">
          <NotificationsList />
        </div>
      )}
    </div>
  );
};

export default HomePage;
