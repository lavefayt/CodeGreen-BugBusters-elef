import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

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
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        alert(error.message);
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert("An error occurred while signing out.");
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
  }, []);

  return (
    <header className="flex justify-center items-center w-full px-4 py-4">
      <div className="flex items-center justify-between w-[55rem]">
        {/* Logo and Title Section */}
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2"
            onClick={handleHomePage}
          >
            <img
              src="../assets/5.png"
              alt="Logo"
              className="w-10 h-5 object-contain md:w-12 md:h-12 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-white text-lg font-syke-medium hover:text-buttongreen">
              Admin Gateway
            </h1>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-20 text-white text-lg font-syke-medium">
          <Link
            to="/encode"
            className="hover:text-buttongreen transition-colors"
          >
            Encode
          </Link>
          <Link
            to="/driverslist"
            className="hover:text-buttongreen transition-colors"
          >
            Drivers
          </Link>
          <Link
            to="/violatorslist"
            className="hover:text-buttongreen transition-colors"
          >
            Violators
          </Link>

          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:tb-buttongreen hover:text-buttongreen transition-colors"
            >
              Account
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-hoverbutton text-white rounded-md shadow-lg">
                <span
                  className="block rounded-t-lg text-sm px-4 py-2 hover:bg-buttongreen cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </span>
                <span
                  className="block text-sm px-4 py-2 hover:bg-buttongreen cursor-pointer"
                  onClick={() => alert("Reset Password functionality")}
                >
                  Reset Password
                </span>
                <span
                  className="block rounded-b-lg text-sm px-4 py-2 hover:bg-buttongreen cursor-pointer"
                  onClick={handleSignOut}
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
