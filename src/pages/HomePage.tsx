import Header from "../components/Header";


const HomePage = () => { 
    return (
        <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
        <div className="w-full max-w-3xl mb-8 mt-5">
            <Header />
        </div>
        </div>
    )

}

export default HomePage;