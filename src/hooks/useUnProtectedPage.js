import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../router/Coordinator";


export const useUnProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if(token){
            goToFeed(navigate)
        }
    }, [navigate])
} 