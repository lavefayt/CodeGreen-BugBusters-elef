import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

const DriversList = () => {
    const navigate = useNavigate();
    return (
        // <p>Driver List Page!</p>
        <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div className="w-full max-w-3xl mb-8 mt-5">
            <AdminHeader />
        </div>
    </div>
    )
}

export default DriversList;