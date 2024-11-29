import React from "react";
import { Spinner } from "react-activity";

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <Spinner
        size={50}
        color="#008000"
        animating={loading}
      />
    </div>
  );
};

export default Loading;
