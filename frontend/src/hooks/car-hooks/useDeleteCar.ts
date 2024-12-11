import { fetchWithAuth } from "../../utils/fetch";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";
import useLoading from "../context-hooks/useLoading";
import { LoadingContextType } from "../../types/loading.types";
import { toast } from "react-toastify";

export const useDeleteCar = () => { 
    const { auth, refresh, navigate } = useFetchWithAuthExports();
    const { setAppLoading }: LoadingContextType = useLoading()

    const deleteCar = async (carId: string) => {
        setAppLoading!(true)
        try {
          console.log("Sending delete request for car ID:", carId); // Log driverId
    
          const response = await fetchWithAuth(
            navigate,
            refresh,
            auth,
            "/car/delete",
            "delete",
            { id: carId }
          );
    
          if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response from server:", errorData); // Log server response
           
            toast.error(errorData.message)

            return ;
          }
          
          const notificationAPI = await response.json()
          toast.success(notificationAPI.message)

          console.log("Car deleted successfully");
          return ;
        } catch (err: unknown) {
          console.error("Network error:", err);
    
          // Narrow down `err` to ensure it has a `message` property
          const errorMessage = err instanceof Error ? err.message : "Failed to connect to the server";
    
          toast.error(errorMessage)
    
          return ;
        } finally {
            setAppLoading!(false)
        } 
      };
    
      return { deleteCar };
    };
    