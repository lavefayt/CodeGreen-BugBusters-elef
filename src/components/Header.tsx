import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); 

    const handleHomePage = () => { 
        navigate("/homepage");
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
            <div className="flex items-center">
                <button 
                    className="relative group overflow-hidden rounded-2xl"
                    onClick={ handleHomePage }>   
                    <img
                        src="../assets/image.png"
                        alt="Logo"
                        className="w-2/3 h-2/3 object-contain"
                    />
                    <span 
                        className="absolute translate-x-[50%] group-hover:-translate-x-[75%] top-0 left-0 w-[65%] h-[30%] bg-gradient-to-r from-transparent via-buttongreen to-transparent transform rotate-45 transition duration-[1500ms] ease-in-out">
                    </span>
                </button>
            </div>

            <nav className="flex space-x-20 text-white font-medium text-lg">

                <Link 
                    to="/about"
                    className="hover:text-textgreen transition-colors">
                    About
                </Link>

                <Link 
                    to="/policies" 
                    className="hover:text-textgreen transition-colors">
                    Policies
                </Link>

                <Link 
                    to="/contact" 
                    className="hover:text-textgreen transition-colors">
                    Contact
                </Link>

                <div className="relative" 
                    ref={dropdownRef}> 

                    <button 
                    onClick={toggleDropdown} 
                    className="text-white">
                        Account
                    </button>

                    {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-sm shadow-lg text-center">

                        <Link 
                        to="/profile" 
                        className="block px-4 py-2 hover:bg-buttongreen rounded-sm">
                            Edit Profile
                        </Link>

                        <Link 
                        to="/login" 
                        className="block px-4 py-2 hover:bg-buttongreen rounded-sm">
                            Log Out
                        </Link>
                    </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;