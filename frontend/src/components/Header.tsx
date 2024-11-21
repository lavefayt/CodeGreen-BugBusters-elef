import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHomePage = () => {
    navigate("/homepage");
  };

  const handleProfile = () => {
    navigate("/driverprofile");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      error ? alert(error) : navigate("/login");
    } catch (error) {
      alert(error);
    }
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
    <header className="flex justify-center items-center w-full px-4 py-4">
      <div className="flex items-center w-full max-w-6xl justify-between mx-auto">
        {/* Logo Section */}
        <div className="flex items-center w-[11rem]">
          <button
            className="flex items-center gap-4 relative group overflow-hidden rounded-2x text-white font-medium text-lg"
            onClick={handleHomePage}
          >
            <img
              src="../assets/5.png"
              alt="Logo"
              className="w-10 h-5 object-contain md:w-[4rem] md:h-[4rem] transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-lg text-left font-syke-medium md:text-xl">
              CodeGreen Gateway
            </h1>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-20 text-white font-syke-medium font-medium text-lg">
          <Link to="/about" className="hover:text-textgreen transition-colors">
            About
          </Link>
          <Link
            to="/policies"
            className="hover:text-textgreen font-syke-medium transition-colors"
          >
            Policies
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-textgreen transition-colors"
            >
              Account
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-hoverbutton text-white rounded-md shadow-lg">
                <span
                  onClick={handleProfile}
                  className="block font-syke-medium rounded-t-lg text-sm px-4 py-2 hover:bg-buttongreen cursor-pointer"
                >
                  Profile
                </span>
                <span
                  onClick={handleSignOut}
                  className="block font-syke-medium text-sm px-4 py-2 hover:bg-buttongreen cursor-pointer"
                >
                  Reset Password
                </span>
                <span
                  onClick={handleSignOut}
                  className="block font-syke-medium text-sm rounded-b-lg px-4 py-2 hover:bg-buttongreen cursor-pointer"
                >
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
