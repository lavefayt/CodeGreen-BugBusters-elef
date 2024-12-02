import AdminHeader from "../components/AdminHeader";
interface RegistrationProps {
  user_id: string;
  school_email: string;
  license_number: string;
  sex: "Male" | "Female";
  driver_type: "Student" | "Faculty" | "Staff" | null;
  first_name: string;
  last_name: string;
}

const RegistrationListCard = ({
  driver_type,
  first_name,
  last_name,
}: RegistrationProps) => {
  return (
    <div
      className="border-b-2 flex-col flex-2 border-t-transparent w-full border-b-inputfield space-y-[20px]"
      id="row">
      <div className="flex p-2 items-right overflow-y-auto">
        <div className="flex-2 min-w-[70%]">
          <h1 className="text-white font-syke-light text-md">Name</h1>
          <h1 className="text-textgreen font-syke-medium text-xl">
            {last_name} {first_name}
          </h1>
        </div>
        <div className="flex-2 text-left">
          <h1 className="text-white font-syke-light text-l">Driver Type</h1>
          <h1 className="text-textgreen font-syke-medium text-xl">
            {driver_type}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegistrationListCard;
