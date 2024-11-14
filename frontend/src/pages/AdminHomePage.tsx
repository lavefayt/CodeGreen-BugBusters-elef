import AdminHeader from "../components/AdminHeader";

const AdminLandingPage = () => {
    return (
        <div className="flex flex-col items-center bg-admin-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div className="w-full max-w-3xl mb-8 mt-5">
            <AdminHeader />
        </div>
        <div className="flex space-x-2"> 
                <h1 className="text-3xl text-textgreen font-syke-bold">Welcome,</h1>
                <h1 className="text-3xl text-white font-syke-bold">Admin Rofer!</h1>
            </div>  
            <p className="text-xl text-white font-syke-regular text-center mt-8">CodeGreen Gateaway is designed to monitor and manage 
                parking violations within the university</p>

            <div className="flex space-x-4 ... gap-x-20 gap-y-4 grid-cols-3">
                <button className="text-white px-8 py-4 rounded-lg bg-lime-700 font-syke-medium my-36">Violators</button>
                <button className="text-white px-8 py-4 rounded-lg bg-lime-700 font-syke-medium my-36">Encode</button>
                <button className="text-white px-8 py-4 rounded-lg bg-lime-700 font-syke-medium my-36 ">Drivers</button>
            </div>
            
        </div>
)}

export default AdminLandingPage;
