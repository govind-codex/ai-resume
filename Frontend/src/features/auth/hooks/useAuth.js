import { useContext } from "react";
import { AuthContext } from "../auth.context";

const context = useContext(AuthContext)
const {user, setUser, loading, setloading} = context