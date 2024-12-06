import { useEffect, useState } from "react";
import { BackendError } from "../types/error.types";
import { Notification } from "../types/datatypes";
import useFetch from "./useFetch.ts";


export const useNotif = () => {
    const [notifs, setNotifs] = useState<Notification[] | null>(null); // Store fetched notifs
    const [error, setError] = useState<BackendError | null>(null); // Handle errors
    const [loading, setLoading] = useState<boolean>(true); // Track loading state
    
    const { fetchWithAuth } = useFetch();

    const fetchNotif = async () => {
        setLoading(true);
        try {
            const response = await fetchWithAuth('notifications', 'GET');

            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            setNotifs(data.data);
        } catch (error) {
            console.error("Unexpected error:", error);
            setError({ message: "An unexpected error occurred" } as BackendError); 
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchNotif();
    }, []);

    return { notifs, error, loading, fetchNotif};
            
};
export default useNotif;
            