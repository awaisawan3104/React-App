import React from 'react'
import { Link } from "react-router-dom";
import emailIcon from './images/email-icon.png';
import logo from './images/logo.png';
import pss from './images/password-icon.png';
import user from './images/user-icon.png';
import './App.css';

const Register = () => (
    <div className="section-default register-page">
    <div className="container">
        <div className="register-form">
            <img src={logo} className="" alt="logo" />
            <p className="register-form-heading">Sign up for Donaco It's easy to get started.</p>
            <div className="main-div">
                    <form id="register">
                      <div className="form-group">
                        <div className="form-input-box img-box">
                        <img src={user} className="" alt="user" />
                        </div>
                        <div className="form-input-box right-box">
                          <input type="text" id="fullname" className="form-control" required />
                          <label className="form-control-placeholder" for="fullname">Full Name</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-input-box img-box">
                        <img src={emailIcon} className="" alt="email" />
                        </div>
                        <div className="form-input-box right-box">
                          <input type="text" id="email" className="form-control" required />
                          <label className="form-control-placeholder" for="email">Email</label>
                        </div>  
                      </div>
                      <div className="form-group">
                        <div className="form-input-box img-box">
                        <img src={pss} className="" alt="email" />
                        </div>
                        <div className="form-input-box right-box">
                          <input type="password" id="password" className="form-control" required />
                          <label className="form-control-placeholder" for="password">Password</label>
                        </div>  
                      </div>
                      <div className="form-group">
                        <div className="form-input-box img-box">
                        <img src={pss} className="" alt="email" />
                        </div>
                        <div className="form-input-box right-box">
                          <input type="password" id="Confirm-password" className="form-control" required />
                          <label class="form-control-placeholder" for="Confirm-password">Confirm Password</label>
                        </div>  
                      </div>
                      <div className="form-group terms-cond-checkbox">
                        <label className="checkbox-container">I agree to the terms and conditions
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                      </div>  
                      <button type="submit" className="register-btn btn btn-primary">Register</button>
                    </form>
                    <div className="row register-form-bottom-box"><Link to="/schedule"><a href="form.html">Cancel</a></Link></div>
                  </div>
        </div>
    </div>
  </div>
)

export default Register
