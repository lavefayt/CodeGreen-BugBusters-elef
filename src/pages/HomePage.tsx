import Header from "../components/Header";


const HomePage = () => { 
    return (
        <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div className="w-full max-w-3xl mb-8 mt-5">
            <Header />
        </div>

        <div 
        className="text-left text-white justify-center items-left">

            <h1 
            className="text-4xl text-semibold text-textgreen">
            Welcome,
            </h1>

            <h1 
            className="text-2xl text-semibold">
            Siaotong, John
            </h1>

        </div>

        <div 
        className="text-left text-white mt-5">

            <h1>Oops!, it looks like you haven't registered yet.</h1>

            <button 
            type="submit" 
            className="bg-buttongreen">
                Register
            </button>
            
        </div>
        
        </div>
    )

}

export default HomePage;