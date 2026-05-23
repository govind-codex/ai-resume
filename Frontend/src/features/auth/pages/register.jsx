import React from 'react'
import { useNavigate,Link } from 'react-router'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import '../auth.form.scss'


    
const register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loading , handleRegister } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        navigate("/login")
    }

    return (
        <main>
            <div className='form-container'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="text">Username</label>
                        <input 
                            type="text" 
                            id="text" 
                            name="text" 
                            placeholder='enter your username' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder='enter your email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder='enter your password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='button primary-button'>Register</button>
                </form>
                <p>Already have an account?? <Link to="/login">Login</Link> </p>
            </div>
        </main>
    )
}

export default register
