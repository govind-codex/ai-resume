import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login , register, logout, getMe} from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext)
  const {user, setUser, loading, setloading} = context

  const handleLogin = async ({ email, password }) => {
    setloading(true)
    try{
      const data = await login({ email, password })
      setUser(data.user)
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setloading(false)
    }

    setloading(false)
  }

   const handleRegister = async ({ username , email,  password }) => {
    setloading(true)
    try {
      const data = await register({ username, email, password})
      setUser(data.user)
    } catch (error) {
      console.error('Register failed:', error)
    } finally {
      setloading(false)
    }
  }

   const handlelogout = async () => {
    setloading(true)
    try{
      const data = await logout()
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setloading(false)
    }
  }

  return { user, loading, handleLogin, handleRegister, handlelogout}
}