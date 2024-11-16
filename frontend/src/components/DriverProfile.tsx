import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const DriverProfile = () => {
    const navigate = useNavigate();

    <div className="">
        <nav className="flex space-x-28 text-white font-medium text-lg">
          <Link
            to=""
            className="hover:text-textgreen transition-colors">
            Profile
          </Link>

          <Link
            to="/driverslist"
            className="hover:text-textgreen transition-colors">
            Vehicles
          </Link>

          <Link
            to="/violatorslist"
            className="hover:text-textgreen transition-colors">
            Violations
          </Link>
          <Link
            to="/driverprofile"
            className="hover:text-textgreen transition-colors">
            License
          </Link>
        </nav>
      </div>
};

export default DriverProfile;