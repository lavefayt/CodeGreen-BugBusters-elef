import { Violation } from "../../types/datatypes";
import ViolationCard from "../ViolationCard";

const ViolationList = ({ violations }: { violations: Violation[] }) => {

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[35rem] h-[20rem] bg-gray-400 bg-clip-padding rounded-md backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-y-auto scrollbar">
        {violations.map((violation) => (
          <ViolationCard violation={violation} />
        ))}
      </div>
    </div>
  );
};

export default ViolationList;
