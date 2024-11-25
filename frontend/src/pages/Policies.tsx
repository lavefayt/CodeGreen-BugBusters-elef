import Header from "../components/Header";

const Policies = () => { 
    return (
        <div className="flex flex-col items-center bg-hoverbutton bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header/>
      </div>
      <h1 className="text-textgreen text-2xl font-bold">Policies</h1>

      <div className="text-white space-y-4 mt-8">

        <h1>1. All vehicle owner/drivers are required to open their windows for visual inspection and identification when going in and out of the CPU campus.</h1>
        <h1>2. The speed limit inside the campus is 15KPH. OVERTAKING is not allowed.</h1>
        <h1>3. All vehicles/motorcycles must park properly at designated parking areas. Illegal parking and Blocking of Driveway are not allowed. Observe No Loading/Unloading signs on designated areas.</h1>
        <h1>4. Blowing horns, loud noise, and blaring sounds of all vehicles/motorcycles are not allowed.</h1>
        <h1>5. All vehicles/motorcycles must follow all implementing traffic routes and road signs on campus.</h1>

        <h1>6. The following are not allowed inside the campus:
            <div className="ml-12 mt-2 space-y-2">
                <h1> a. Smoking belching vehicles.</h1>
                <h1>b. Vehicles suspected of carrying bombs, dangerous chemicals or contaminated by hazardous elements.</h1>
                <h1> C. Vehicle suspected of being used by criminal elements or used for Kidnap for Ransom (KFR).</h1>
                <h1>d. Tricycles, pedicabs or tri-sikads and similar types of transportation (except when the owner is issued a special permit by the CPU Administration).</h1>
            </div>
        </h1>

        <h1>7. Vehicles involved in accidents inside the campus will be held by the CPU guards for inspection and upon verification from the proper authorities.</h1>
        <h1>8. Any vehicle suspected or found bringing illegal drugs, fireams, deadly weapons, alcoholic drinks, or prographic materials inside the campus will be </h1>
        <h1 className="ml-4">held by the CPU guards for inspection and proper disposition of the CPU Administration and PNP or any related Law Enforcement Agencies.</h1>    

        <h1>9. The CPU Administration through the Campus Traffic, Security and Safety Office has the discretion to allow or prevent any vehicle or motorcycle entry to the </h1>
        <h1 className="ml-4">CPU campus if it compromises the safety and security of the University.</h1>  

        <h1>10. All drivers should follow CPU administrative policies, especially those concerning health and safety protocols.</h1>

      </div>
    </div>
    )
}

export default Policies;