import React from 'react'
import { Link } from "react-router-dom"
import "./Login.css"

const Login = () => {
    return (
        <div className='col-6 phinma-logo login'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form action="">
                    <label htmlFor="email" className='label-left mt-5'>Email:</label>
                    <br />
                    <input id="email" type="email" className='' placeholder='Email' />
                    <br />
                    <label htmlFor="password" className='label-left'>Password:</label>
                    <br />
                    <input id="password" type="password" placeholder='Password' />
                    <br />
                    <button className='mb-3 mt-3'>Login</button>
                    <br />
                    <span className='login-span'>Do not have an account yet? <Link to="SignupLayout" className='text-decoration-none'><span className='register-span'>Register</span></Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login