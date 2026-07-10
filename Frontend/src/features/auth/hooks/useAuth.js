import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext)
  const { user, setUser, loading, setloading } = context

  const handleLogin = async ({ email, password }) => {
    setloading(true)
    try {
      const data = await login({ email, password })
      setUser(data?.user ?? null)
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setloading(false)
    }
  }

  const handleRegister = async ({ username, email, password }) => {
    setloading(true)
    try {
      const data = await register({ username, email, password })
      setUser(data?.user ?? null)
    } catch (error) {
      console.error('Register failed:', error)
    } finally {
      setloading(false)
    }
  }

  const handlelogout = async () => {
    setloading(true)
    try {
      const data = await logout()
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setloading(false)
    }
  }

  // useEffect(() => {
  //   const getAndSetUser = async () => {
  //     const data = await getMe()
  //     setUser(data.user)
  //     setloading(false)
  //   }

  //   getAndSetUser()
  // }, [])


  useEffect(() => {
    let isMounted = true;

    const getAndSetUser = async () => {
      try {
        const data = await getMe();

        if (isMounted) {
          setUser(data?.user ?? null);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        if (isMounted) {
          setloading(false);
        }
      }
    };

    getAndSetUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return { user, loading, handleLogin, handleRegister, handlelogout }
}
