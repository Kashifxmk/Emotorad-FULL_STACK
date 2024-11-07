import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import google from "../../assets/google.png"
import "./Login.css"
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <div className='login-left'>
            <div>
                <h1>BASE</h1>
            </div>
            <div className='login-left-down'>
             <FaGithub size="26px" color='white'/>
             <AiFillTwitterCircle size="26px" color='white'/>
             <FaLinkedin size="26px" color='white'/>
             <IoLogoDiscord size="26px" color='white'/>
            </div>
        </div>
        <div className='login-right'>
            <h1>Sign In</h1>
            <p>Sign into your account</p>
            <div className='right-btns'>
                <button className='btn-google'><img src={google} alt="" /> Sign in with Google</button>
            </div>
            <div className='sign-form'>
                <div className='sign-inputs'>
                    <label htmlFor="email">Email address</label>
                    <input type="email" />
                </div>
                <div className='sign-inputs'>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>
                <a href="#">Forgot password?</a>
                <Link to='/dashboard'>
                  <button>Sign In</button>
                </Link>
                
            </div>
            <p>Don't have an account? <span><a href="#">Register here</a></span></p>
        </div>
        
      </div>
    </div>
  )
}

export default Login
