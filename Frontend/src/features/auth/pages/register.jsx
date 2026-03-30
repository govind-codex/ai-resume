import React from 'react'
import { useNavigate,Link } from 'react-router'

    
const register = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <main>
            <div className='form-container'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="text">Username</label>
                        <input type="text" id="text" name="text" placeholder='enter your username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='enter your email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder='enter your password' />
                    </div>
                    <button className='button primary-button'>Register</button>
                </form>
                <p>Already have an account?? <Link to="/login">Login</Link> </p>
            </div>
        </main>
    )
}

export default register
