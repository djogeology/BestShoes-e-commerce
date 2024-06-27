import React, { useState } from 'react';
import './LoginPopup.css';
import axios from 'axios';
import logo from "../images/logo.jpg"
import logo from "../images/logo.jpg";

const LoginPopup = ({ onClose, onSuccess, onRegisterClick,LogonUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');

  const handleLogin = () => {
    checkLogin();
  };
  const checkLogin=function(){
    axios.post("http://localhost:3000/api/users/login",{email,password})
    .then((response)=>{
      if((response.data[0])){
        LogonUser(response.data[0]);
      onSuccess();
      }
      else{
        alert("check your inputs")//style this alert
      }
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const handleForgotPassword = () => {
    if (!forgotEmail) {
      setForgotError('Please enter your email in this format: name@company.com.');
    } else {
      setForgotError('');
      // Add forgot password logic here
      setForgotPasswordOpen(false);
    }
  };

  return (
    <div className="login-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Sign In</h2>
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        <button onClick={handleLogin} className="login-btn">Sign In</button>
        <button onClick={onRegisterClick} className="register-btn">Create Account</button>
        <button
          type="button"
          className="forgot-password"
          onClick={() => setForgotPasswordOpen(true)}
        >
          Forgot Password?
        </button>
      </div>
      {forgotPasswordOpen && (
        <div className="forgot-password-popup">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setForgotPasswordOpen(false)}>X</button>
            <h2>Forgot Password</h2>
            <input
              type="email"
              placeholder="Email Address"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
              className="input-field"
            />
            {forgotError && <p className="error-message">{forgotError}</p>}
            <button onClick={handleForgotPassword} className="reset-btn">Send Reset Link</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
