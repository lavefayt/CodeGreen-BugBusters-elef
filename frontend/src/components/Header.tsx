import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHomePage = () => {
    navigate("/homepage");
  };

  const handleDriverProfile = () => {
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
    <header className="flex items-center justify-between w-full max-w-5xl mx-auto px-6 py-4">
      <div className="flex items-center">
        <button
          className="relative group overflow-hidden rounded-2xl"
          onClick={handleHomePage}
        >
          <img
            src="../assets/5.png"
            alt="Logo"
            className="w-30 h-30 object-contain md:w-28 md:h-28 transition-transform duration-300 hover:scale-105"
          />
        </button>
      </div>

      <nav className="flex ml-12 space-x-28 text-white font-medium text-lg">
        <Link to="/about" className="hover:text-textgreen transition-colors">
          About
        </Link>

        <Link to="/policies" className="hover:text-textgreen transition-colors">
          Policies
        </Link>

        <Link to="/contacts" className="hover:text-textgreen transition-colors">
          Contact
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
                onClick={handleDriverProfile}
                className="block font-syke-medium text-sm px-4 py-2 hover:bg-buttongreen rounded-md cursor-pointer"
              >
                Profile
              </span>

              <span
                onClick={handleSignOut}
                className="block font-syke-medium text-sm px-4 py-2 hover:bg-buttongreen rounded-md cursor-pointer"
              >
                Log Out
              </span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
