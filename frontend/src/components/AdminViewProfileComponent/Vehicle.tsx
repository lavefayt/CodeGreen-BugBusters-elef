const Vehicle = () => {
  return (
    <div className="max-w-full max-h-full justify-center">
      <div className="w-[35rem] h-[20rem] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-y-auto scrollbar">
        <ul className="border-b-2 border-t-2 border-t-transparent  border-b-inputfield space-y-[10px]">
          <div className="ml-2 space-y-3 p-3">
            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-xl">
                  License Number :
                </h1>

                <h1 className="text-textgreen font-syke-medium text-xl">
                  123-KVA
                </h1>
              </div>

              <div className="flex-1 ">
                <h1 className="text-white font-syke-light text-xl">
                  Plate Number :
                </h1>

                <h1 className="text-textgreen font-syke-medium text-xl">
                  FAG-2121
                </h1>
              </div>
            </div>

            <div className="flex space-x-4 ">
              <div className="flex-1">
                <h1 className="text-white font-syke-light text-xl">Brand :</h1>

                <h1 className="text-textgreen font-syke-medium text-xl">
                  Honda
                </h1>
              </div>

              <div className="flex-1">
                <h1 className="text-white font-syke-light text-xl">Model :</h1>

                <h1 className="text-textgreen font-syke-medium text-xl">
                  Civic
                </h1>
              </div>

              <div className="flex-1">
                <h1 className="text-white font-syke-light text-xl">Color :</h1>

                <h1 className="text-textgreen font-syke-medium text-xl">Red</h1>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Vehicle;
