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
    <header className="flex items-center justify-between w-full max-w-5xl mx-auto px-8 py-4">
      <div className="flex items-center space-x-2">
        <button
          className="relative group overflow-hidden rounded-2xl"
          onClick={handleHomePage}>
          <img
            src="../assets/5.png"
            alt="Logo"
            className="w-2/3 h-2/3 object-contain"
          />
        </button>
        <span className="text-white font-syke-bold">CodeGreen Gateway</span>
      </div>

      <nav className="flex space-x-20 text-white font-medium text-lg">
        <Link
          to="/home"
          className="hover:text-textgreen transition-colors">
          Home
        </Link>

        <Link
          to="/about"
          className="hover:text-textgreen transition-colors">
          About
        </Link>

        <Link
          to="/account"
          className="hover:text-textgreen transition-colors">
          Account
        </Link>

        <div
          className="relative"
          ref={dropdownRef}></div>
      </nav>
    </header>
  );
};

export default AdminHeader;
