import React from "react";
import { Spinner } from "react-activity";

const Loading = () => {
  return (
    <div className="flex text-lg justify-self-center self-center font-semibold p-16">
      <Spinner
        size={50}
        color="#3A2D28"
      />
    </div>
  );
};

export default Loading;
