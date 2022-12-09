import React, { useState } from 'react';
import "../pages/SignIn.css"
import logo from '../Image/pic.png';

import "../pages/SignUp.css"
import { Link, useNavigate } from 'react-router-dom';
import {SlSocialFacebook} from 'react-icons/sl'
import {SlSocialGoogle} from 'react-icons/sl'
import {SlSocialLinkedin} from 'react-icons/sl'
import {SlSocialTwitter} from 'react-icons/sl'
function SignIn() {

  //for back button diable


  const [loginInput, setLoginInput] = useState({
    password: "",
    username: "",
  });
  let navigate = useNavigate();
  const handleChange = (e) => {
    setLoginInput({
      ...loginInput, [e.target.name]: e.target.value
    });
  }

  const [responseData, setResponseData] = useState({})
  const [errorResponseData, setErrorResponseData] = useState({})
  const [loading, setLoading] = useState("")


  const handleSubmit = (e) => {
    setLoading("Loading...");
    e.preventDefault();
    const payload = {
      username: loginInput.username,
      password: loginInput.password
    }
    navigate('/Home')
  }
  
 
 
  
  return (
    <div className='loginbody'>
      <section className="loginside">
       
      </section>
      <section className="loginmain">
        <div className="login-container">
        <div>
          <p className="logintitle">Sign In</p>
          <div className="separator"></div>
          <p className='para'>New user? <Link to='/signUp'>Create an account</Link></p>
          <form className="login-form">
            <div className="loginform-control">
              <input className='login-input' type="text" placeholder="Username" name="username" value={loginInput.username} onChange={handleChange} required />
              <i className="fas fa-user"></i>
              <span style={{ color: "red" }}>{errorResponseData["username"]}</span>
            </div>
            <div className="loginform-control">
              <input className='login-input' type="password" name="password" placeholder="Password" value={loginInput.password} onChange={handleChange} required />
              <i className="fas fa-lock"></i>
              <span style={{ color: "red" }}>{errorResponseData["password"]}</span>
            </div>
            <span style={{ color: "red" }}>{errorResponseData.detail}</span>
           
            <button onClick={handleSubmit} className="submit">{loading ? loading : "Sign In"}</button>
            <div className="flex-c-m">
            <p className='para1'>Or Sign In With</p>
								
            <a href="#" className="login100-social-item bg1">
									<SlSocialGoogle />
								</a>
								<a href="#" className="login100-social-item bg2">
                                <SlSocialFacebook/>
								</a>
								<a href="#" className="login100-social-item bg3">
									<SlSocialLinkedin />
								</a>
                                <a href="#" className="login100-social-item bg4">
									<SlSocialTwitter/>
								</a>
                               
							</div>
          </form>
          </div>
          <div className='img'><img src={logo}></img></div>
        </div>
        
      </section>
    </div>
  );
}
export default SignIn;