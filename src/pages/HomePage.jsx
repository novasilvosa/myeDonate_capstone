import React, { useState } from "react";
import "../styles/Home.css"; // Ensure this CSS file exists
import donate1 from "../assets/images/banner1.jpg";
import  donate3 from "../assets/images/banner3.avif";
import donate2 from "../assets/images/banner2.jpg";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const donationCategories = [
    {
      image: donate1,
      title: "FOODS AND SHELTER FOR STRAY ANIMALS",
      description:
        "Aims to support dedicated shelters that rescue, feed, and provide medical care for stray animals, ensuring their well-being.",
    },
    {
      image: donate2,
      title: "EDUCATION SUPPORT FOR UNDERPRIVILEGED CHILDREN",
      description:
        "Providing books, supplies, and scholarships for children in need.",
    },
    {
      image: donate3,
      title: "EMERGENCY RELIEF FUND",
      description:
        "Helping families affected by natural disasters with urgent resources.",
    },
    {
      image: donate3,
      title: "MEDICAL HELP FOR THOSE IN NEED",
      description:
        "Funding life-saving surgeries and treatments for low-income families.",
    },
    {
      image: donate1,
      title: "ENVIRONMENTAL PROTECTION PROJECTS",
      description:
        "Supporting tree-planting campaigns and eco-friendly initiatives.",
    },
  ];

  // Filter donations based on search input
  const filteredDonations = donationCategories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Support a Cause. Change Lives.</h1>
        <p>Find a cause you care about and make an impact today.</p>
        <input
          type="text"
          placeholder="Search for a cause..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Donation Grid */}
      <div className="donation-grid">
        {filteredDonations.map((category, index) => (
          <div key={index} className="donation-card">
            <img src={category.image} alt={category.title} className="donation-image" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button className="donate-button">DONATE NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
