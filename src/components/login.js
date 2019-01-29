import React, { Component } from 'react';
import { Link } from "react-router-dom";
import emailIcon from './images/email-icon.png';
import logo from './images/logo.png';
import pss from './images/password-icon.png';
import google from './images/google-icon.png';
import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="section-default login-page">
          <div className="container">
              <div className="login-form">
                  <img src={logo} className="" alt="logo" />
                  <p className="login-form-heading">Sign in to your Donaco account.</p>
                  <div className="main-div">
                    <form id="login" action="http://localhost/profile/components/login-process.php">
                      <div className="form-group">
                        <div className="form-input-box img-box">
                        <img src={emailIcon} className="" alt="email" />
                        </div>
                        <div className="form-input-box right-box">
                          <input type="text" id="name" name="username" className="form-control" required />
                          <label className="form-control-placeholder" for="name">Email Address</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-input-box img-box">
                          <img src={pss} className="" alt="email" />
                        </div>
                        <div className="form-input-box right-box">
                          <input type="password" id="password" name="password" className="form-control" required />
                          <label className="form-control-placeholder" for="password">Password</label>
                        </div>  
                      </div>
                      <button type="submit" className="btn btn-primary" name="login_button">Login</button>
                    </form>
                    <Link to="/register"><button className="register-btn btn btn-primary">Register</button></Link>
                    <div className="row login-form-bottom-box">
                      <div className="col-md-8 google-auth"><img src={google} className="" alt="google" />Or authenticate with Google.</div>
                      <div className="col-md-4">Forgot password</div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Login;
