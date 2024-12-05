import { Violators } from "../types/datatypes";

const ViolatorsListCard = ({
  first_name,
  last_name,
  driver_type,
  license_number,
  violations ,
}: Violators) => {

  return (
    <div
        className="border-b-2 flex-col flex-1 border-t-transparent w-full border-b-inputfield space-y-[20px]"
        id="row">
        <div className="flex p-2 items-right overflow-y-auto">
            
        <div className="flex-2 min-w-[20%]">
            <h1 className="text-white font-syke-light text-sm">Violations</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
            {violations ? violations.length : 0}
            </h1>
          </div>
          <div className="flex-2 min-w-[32%]">
            <h1 className="text-white font-syke-light text-sm">Name</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
              {first_name} {last_name}
            </h1>
          </div>
          <div className="flex-2 text-left min-w-[23%]">
            <h1 className="text-white font-syke-light text-sm">Driver Type</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
              {driver_type}
            </h1>
          </div>
          <div className="flex-2  text-left">
            <h1 className="text-white font-syke-light text-sm">License Number</h1>
            <h1 className="text-textgreen font-syke-medium text-md">
              {license_number}
            </h1>
          </div>
        </div>
      </div>
  );
};

export default ViolatorsListCard;
