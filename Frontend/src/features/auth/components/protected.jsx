import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import react from "react";

const protected = ({children}) => {
    const { loading, user } = useAuth()
    
    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    if(!user) {
        return <Navigate to="/login" />
    }

    return children
}
export default protected