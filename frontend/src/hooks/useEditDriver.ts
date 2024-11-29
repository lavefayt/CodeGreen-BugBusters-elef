// import { useState } from 'react';
// import useFetch from './useFetch';

// interface Driver {
//   email: string;
//   first_name: string;
//   last_name: string;
//   middle_name: string;
//   date_of_birth: string;
//   sex: string;
//   driver_type: string;
//   license_number: string;
//   license_expiration_date: string;
// }

// export const useEditDriver = () => {
    
//   const [error, setError] = useState<{ title: string, message: string } | null>(null);
//   const { fetchWithAuth } = useFetch()
//   const editDriver = async (id: string, updatedDriver: Driver): Promise<boolean> => {

//     try {
    
//         const response = await fetchWithAuth("/driver/update", "patch", { id, ...updatedDriver })
    

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError({
//           title: errorData.title || 'Error',
//           message: errorData.message || 'Unknown error occurred',
//         });
//         return false;
//       }

//       const data = await response.json();
//       console.log('Driver updated:', data.driver);
//       setError(null); // Clear any previous errors
//       return true;
//     } catch (err: any) {
//       console.error('Error updating driver:', err);
//       setError({
//         title: "Network Error",
//         message: err.message || 'Failed to connect to the server',
//       });
//       return false;
//     }
//   };

//   return { editDriver, error };
// };
