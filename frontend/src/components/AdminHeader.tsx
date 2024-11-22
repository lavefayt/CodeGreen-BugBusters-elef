import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHomePage = () => {
    navigate("/admin");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleSignOut = async () => {
    // Replace with BACKEND APIs
    // try {
    //   const { error } = await supabase.auth.signOut();
    //   error ? alert(error) : navigate("/login");
    // } catch (error) {
    //   alert(error);
    // }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="flex space-x-40items-center justify-center w-full px-20 py-4">
      <div className="flex items-center w-full max-w-5xl justify-between">
        <div className="flex items-center">
          <button
            className="flex items-center gap-4 relative group overflow-hidden rounded-2x pr-20 py-2 text-white font-medium text-lg"
            onClick={handleHomePage}>
            <img
              src="../assets/5.png"
              alt="Logo"
              className="w-10 h-5 object-contain md:w-12 md:h-12 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-lg text-left font-syke-medium md:text-xl">
              CodeGreen Gateway
            </h1>
          </button>
        </div>

        {/* Right Section: Navigation */}
        <nav className="flex space-x-12 text-white font-syke-medium font-medium text-lg">
          <Link
            to="/encode"
            className="hover:text-textgreen transition-colors">
            Encode
          </Link>

          <Link
            to="/driverslist"
            className="hover:text-textgreen font-syke-medium transition-colors">
            Drivers
          </Link>

          <Link
            to="/violatorslist"
            className="hover:text-textgreen font-syke-medium transition-colors">
            Violators
          </Link>

          <div
            className="relative"
            ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-textgreen transition-colors">
              Account
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-hoverbutton text-white rounded-md shadow-lg">
                <span className="block font-syke-medium text-sm px-4 py-2 hover:bg-buttongreen rounded-md cursor-pointer">
                  Profile
                </span>

                <span
                  onClick={handleSignOut}
                  className="block font-syke-medium text-sm px-4 py-2 hover:bg-buttongreen rounded-md cursor-pointer">
                  Log Out
                </span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
