import React from 'react'
import { useState } from 'react'
import '../auth.form.scss'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading , handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await handleLogin({ email, password })
        if (success) {
            navigate("/dashboard")
        }
    }

    if(loading) {
        return <main className="auth-page"><div className="glass-card"><h1 className="auth-title">Loading...</h1></div></main>
    }

  return (
    <main className="auth-page">
        {/* Animated clouds */}
        <span className="cloud cloud-1" aria-hidden="true"></span>
        <span className="cloud cloud-2" aria-hidden="true"></span>
        <span className="cloud cloud-3" aria-hidden="true"></span>

        {/* Flying birds */}
        <span className="bird bird-1" aria-hidden="true">🐦</span>
        <span className="bird bird-2" aria-hidden="true">🐦</span>
        <span className="bird bird-3" aria-hidden="true">🐦</span>
        <span className="bird bird-4" aria-hidden="true">🐦</span>

        {/* Top navigation */}
        <nav className="auth-nav">
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">SERVICE</Link>
            <Link to="/">CONTACT</Link>
            <Link to="/login" className="nav-active">LOGIN</Link>
        </nav>

        {/* Glassmorphism Card */}
        <div className="glass-card">
            <h1 className="auth-title">LOGIN</h1>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                    />
                    <span className="input-underline"></span>
                    <span className="input-icon">✉</span>
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                    />
                    <span className="input-underline"></span>
                    <span className="input-icon">🔒</span>
                </div>

                <Link to="#" className="forgot-link">Forgot Password?</Link>

                <div className="remember-row">
                    <input
                        type="checkbox"
                        id="remember"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" className="auth-submit-btn">Login</button>
            </form>

            <p className="auth-switch">
                Don't have an Account?
                <Link to="/register">Register</Link>
            </p>
        </div>
    </main>
  )
}

export default Login
