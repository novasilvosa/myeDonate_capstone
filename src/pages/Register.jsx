import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import logo from "../assets/images/eDonate.png";
import fb from "../assets/images/fb.jpg";
import google from "../assets/images/google-icon.png";
import Button from "../components/Button";

const Register = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating successful registration
    alert("Registration successful!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="login-logo">
          <img src={logo} alt="eDonate Logo" className="logo-img" />
          <a href="/" className="logo-title">eDonate</a>
        </div>
        <h2>Welcome</h2>
        <p>Start eDonate right now!</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Firstname" required />
          <input type="text" placeholder="Lastname" required />
          <input type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <Button text="SIGN UP" className="green login-btn" type="submit" />
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
        <p className="or-text">OR</p>
        <div className="social-register">
          <button className="google-register">
            <img src={google} alt="Google" />
            Continue with Google
          </button>
          <button className="facebook-register">
            <img src={fb} alt="Facebook" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
