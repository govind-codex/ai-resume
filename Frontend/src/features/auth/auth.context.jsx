import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const getAndSetUser = async () => {
            const data = await getMe()
            setUser(data.user)
            setloading(false)
        }

        getAndSetUser()
    }, [])

    return(
        <AuthContext.Provider value={{user, setUser, loading, setloading}}>
            {children}
        </AuthContext.Provider>
    )
}