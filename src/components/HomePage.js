import React from "react";
import { Link } from "react-router-dom";
import './Homepage.css';  // Ensure the CSS is in place

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">famehouse records</h1>
          <Link to="/artists" className="hero-btn">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
