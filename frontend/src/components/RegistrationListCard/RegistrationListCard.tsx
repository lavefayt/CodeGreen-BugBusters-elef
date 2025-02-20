import { Registration } from "../../types/datatypes";

const RegistrationListCard = ({
  driver_type,
  first_name,
  last_name,
}: Registration) => {
  return (
    <div
      className="border-b-2 flex-col flex-2 border-t-transparent w-full border-b-inputfield space-y-[20px]"
      id="row">
      <div className="flex p-2 items-right overflow-y-auto">
        <div className="flex-2 min-w-[70%]">
          <h1 className="text-white font-syke-light text-md">Name</h1>
          <h1 className="text-textgreen font-syke-medium text-xl">
            {first_name} {last_name} 
          </h1>
        </div>
        <div className="flex-2 text-left">
          <h1 className="text-white font-syke-light text-md">Driver Type</h1>
          <h1 className="text-textgreen font-syke-medium text-xl">
            {driver_type}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegistrationListCard;
