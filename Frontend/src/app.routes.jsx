import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register" 
import Protected from "./features/auth/components/protected"  
import Landing from "./features/interview/pages/landing"
import Home from "./features/interview/pages/home"    
import Interview from "./features/interview/pages/interview"

export const router =  createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/landing",
        element: <Landing />
    },
    {
        path: "/home",
        element: <Protected><Home /></Protected>
    },
    {
        path: "/interview/:interviewId",
        element: <Protected><Interview /></Protected>
    }
])
