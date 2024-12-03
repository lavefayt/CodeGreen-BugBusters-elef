import { Violation } from "../types/datatypes";

const ViolationCard = ({ violation }: { violation: Violation }) => {
  return (
    <div className="border-b-2 border-t-2 border-t-transparent  border-b-inputfield space-y-[10px]">
      <div className="ml-2 space-y-3 p-3">
        <div className="flex space-x-4 ">
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-l">Violation</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {violation.violation_type}
            </h1>
          </div>
          <div className="flex-1 ">
            <h1 className="text-white font-syke-light text-l">
              Date of Violation
            </h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {violation.violation_date}
            </h1>
          </div>
        </div>
        <div className="flex space-x-4 ">
          <div className="flex-1">
            <h1 className="text-white font-syke">Description</h1>
            <h1 className="text-textgreen font-syke text-l w-[15rem]">
              {violation.description}
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-m">Status</h1>
            <h1 className="text-textgreen font-syke-medium text-xl">
              {violation.paid_status ? "Paid" : "Unpaid"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViolationCard;
