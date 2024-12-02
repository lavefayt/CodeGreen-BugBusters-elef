// const ViolatorList = () => {
//     return (
//         <p>Violator List Page!</p>
//     )
// }

// export default ViolatorList;

import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
// import { ViolatorsTable } from "../types/datatypes";
import { useEffect, useState } from "react";
import useGetViolators from "../hooks/useGetViolators";
import Loading from "../components/Loading";

const ViolatorList = () => {
  const navigate = useNavigate();

  // to get the violators
  const { violators, loading } = useGetViolators();

  console.log(violators);

  if (loading) return <Loading loading={loading} />;

  return (
    <div className="flex flex-col items-center bg-login-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <AdminHeader />
      </div>

      {/* Table Container */}
      <div className="w-full max-w-3xl overflow-x-auto bg-zinc-600 text-white">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-zinc-700 text-white border-b">
              <th className="py-3 px-4 text-left font-semibold">Last Name</th>
              <th className="py-3 px-4 text-left font-semibold">First Name</th>
              <th className="py-3 px-4 text-left font-semibold">Driver Type</th>
              <th className="py-3 px-4 text-left font-semibold">
                License Number
              </th>
              <th className="py-3 px-4 text-left font-semibold">
                Violation Count
              </th>
            </tr>
          </thead>
          <tbody>
            {violators.map(
              ({
                id,
                first_name,
                last_name,
                driver_type,
                license_number,
                violations,
              }) => (
                <tr
                  key={id}
                  className="border-b hover:bg-zinc-500">
                  <td className="py-3 px-4">{last_name}</td>
                  <td className="py-3 px-4">{first_name}</td>
                  <td className="py-3 px-4">{driver_type}</td>
                  <td className="py-3 px-4">{license_number}</td>
                  <td className="py-3 px-4">{violations!.length}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViolatorList;
