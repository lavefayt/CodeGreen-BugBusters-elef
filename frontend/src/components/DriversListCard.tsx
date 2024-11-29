interface DriverProps {
  firstname: string;
  lastname: string;
  driver_type: string;
  license_no: string;
}

const DriverListCard = ({
  firstname,
  lastname,
  driver_type,
  license_no,
}: DriverProps) => {
  const handleCardClick = () => {
    // navigate(`/detail/${id}`);
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center active:bg-zinc-600 bg-color5 border transition-all hover:bg-[#4d7c0f] border-black p-4 rounded-lg shadow-md cursor-pointer my-1 w-full lg:text-base md:text-sm sm:text-xs text-xxs relative"
      onClick={handleCardClick}
    >
      <div className="flex-1 text-center p-2">
        <span className="font-medium">{firstname}</span>
      </div>
      <div className="flex-1 text-center p-2">
        <span className="font-medium">{lastname}</span>
      </div>
      
      <div className="flex-1 text-center p-2">
        <span className="font-medium">{driver_type}</span>
      </div>
      <div className="flex-1 text-center p-2">
        <span className="font-medium">{license_no}</span>
      </div>
      {/* Buttons */}
      <div className="flex space-x-2 ml-4">
        {/* Edit Button */}
        <button className="text-white px-3 py-1 rounded-md hover:text-green-500">
          Edit
        </button>

        {/* Delete Button */}
        <button className="text-white px-3 py-1 rounded-md hover:text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DriverListCard;
