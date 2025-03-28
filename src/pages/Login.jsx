import React from "react";
import "../styles/Login.css";
import logo from "../assets/images/eDonate.png";
import fb from "../assets/images/fb.jpg";
import google from "../assets/images/google-icon.png";
import Button from "../components/Button"; // Import the custom Button component

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
         <div className="login-logo">
                <img src={logo} alt="eDonate Logo" className="logo-img" />
                <a href="/" className="logo-title">eDonate</a>
          </div>
        <h2>Get Started</h2>
        <p>eDonate right now!</p>
        <form>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          {/* Use Custom Button Component */}
          <Button text="LOGIN" className="green login-btn" type="submit" />
        </form>
        <p className="signup-text">
          Don't have an Account yet? <a href="/register">Sign up</a>
        </p>
        <p className="or-text">OR</p>
        <div className="social-login">
          <button className="google-login">
            <img src={google} alt="Google" />
            Continue with Google
          </button>
          <button className="facebook-login">
            <img src={fb} alt="Facebook" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
