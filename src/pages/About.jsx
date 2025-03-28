import React from "react";
import "../styles/About.css"; // Make sure to create this CSS file
import logo from "../assets/images/eDonate.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={logo} alt="eDonate Logo" className="about-logo" />
        <h1>About eDonate</h1>
        <p>
          Welcome to <strong>eDonate</strong>, a platform dedicated to connecting donors with 
          local communities in need. Our mission is to make giving easy, transparent, 
          and impactful.
        </p>
        <h2>Our Mission</h2>
        <p>
          eDonate aims to bridge the gap between generous donors and the communities 
          that need support. We strive to ensure that every contribution makes a 
          real difference in people’s lives.
        </p>
        <h2>How It Works</h2>
        <ul>
          <li>Register and create an account.</li>
          <li>Explore different causes and campaigns.</li>
          <li>Donate with a few simple clicks.</li>
          <li>Track the impact of your donation.</li>
        </ul>
        <h2>Join Us</h2>
        <p>
          Be a part of the change. Together, we can create a better world where 
          kindness and generosity lead the way.
        </p>
      </div>
    </div>
  );
};

export default About;
