// import { useEffect, useState } from "react";
// import { DriverWithViolations } from "../types/datatypes";
// import { PostgrestError } from "@supabase/supabase-js";
// import supabase from "../utils/supabase";

// export const useDrivers = () => {
//   const [driversList, setDriversList] = useState<
//     DriverWithViolations[] | undefined
//   >([]);
//   const [error, setError] = useState<PostgrestError | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDrivers = async () => {
//       const { data, error } = await supabase
//         .from("Drivers")
//         .select(`*, Violations (*)`);
//       setLoading(false);
//       console.log(data);

//       if (error) {
//         setError(error);
//       } else if (data) {
//         setDriversList(data);
//       }
//     };

//     fetchDrivers();
//   }, []);

//   return { driversList, setDriversList, loading, error };
// };

import { useEffect, useState } from "react";
import { Driver, DriverWithViolations } from "../../types/datatypes.ts";
import { BackendError } from "../../types/error.types.ts";
import useFetch from "../useFetch.ts";

const useDrivers = () => {
  const [data, setData] = useState<DriverWithViolations[] | null>(null); // Store fetched drivers
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState(false); // Track loading state

  const { fetchWithAuth } = useFetch();

  const fetchDrivers = async () => {
    setLoading(true);
    try {
      // for fetching with auth
      const response = await fetchWithAuth("/driver/get", "get");

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
      } else {
        const drivers: DriverWithViolations[] = await response.json();
        setData(drivers);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError({ message: "An unexpected error occurred" } as BackendError);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch drivers when the hook is first used
  useEffect(() => {
    fetchDrivers();
  }, []);

  return { data, error, loading, fetchDrivers };
};

export default useDrivers;
