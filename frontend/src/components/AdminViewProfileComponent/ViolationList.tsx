import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Violation } from "../../types/datatypes";
import ViolationCard from "../ViolationCard";

const ViolationList = ({ violations }: { violations: Violation[] }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-full max-h-full justify-center">
      <div className="w-[35rem] h-[20rem] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-y-auto rounded-md scrollbar">
        {violations.map((violation) => (
          <ViolationCard violation={violation} />
        ))}
      </div>
    </div>
  );
};

export default ViolationList;
