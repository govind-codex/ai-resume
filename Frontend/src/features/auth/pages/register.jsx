import React from 'react'
import { useNavigate, Link } from 'react-router'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import '../auth.form.scss'

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loading , handleRegister } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await handleRegister({ username, email, password })
        if (success) {
            navigate("/login")
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
                <Link to="/login">LOGIN</Link>
            </nav>

            {/* Glassmorphism Card */}
            <div className="glass-card">
                <h1 className="auth-title">REGISTER</h1>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span className="input-underline"></span>
                        <span className="input-icon">👤</span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="input-underline"></span>
                        <span className="input-icon">✉</span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="input-underline"></span>
                        <span className="input-icon">🔒</span>
                    </div>

                    <button type="submit" className="auth-submit-btn">Register</button>
                </form>

                <p className="auth-switch">
                    Already have an account?
                    <Link to="/login">Login</Link>
                </p>
            </div>
        </main>
    )
}

export default Register
