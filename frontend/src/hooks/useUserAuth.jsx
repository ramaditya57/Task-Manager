import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useUserAuth = () => {
    const { user, loading, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return; // Wait for loading to finish
        if(user) return; // User is already authenticated

        if (!user) {
            clearUser();
            navigate("/login");
        }
    }, [user, loading, clearUser, navigate]);
};