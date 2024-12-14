import React from "react";
import "./AboutPage.css"; // Importing CSS

const AboutPage = () => {
  return (
    <div className="about-page container mt-5">
      {/* Page Heading */}
      <h2 className="page-title text-center mb-4">About FameHouse</h2>
      
      {/* Introduction Section */}
      <p className="intro-text">
        Hello everyone! Arya & Shubh here, and we are running FameHouse Records.
      </p>
      <p className="story-text">
        I’m Arya Parikh. I was born in Vadodara, grew up in Ahmedabad, and moved to Indiana, 
        United States of America, in 2018. After completing my school graduation, I wanted to 
        invest my time and energy in something I love—towards music.
      </p>

      {/* Initial Setbacks */}
      <p className="story-text">
        There were initial setbacks because one artist I signed refused to continue working. 
        Instead of getting disheartened, I took it as a lesson.
      </p>

      {/* Music Producer Connection */}
      <p className="story-text">
        I met Utkarsh, a music producer, through my cousin. He was initially known as a music 
        producer, but later, when I set up FameHouse Records Productions in 2024, he became 
        the first producer we started working with under the label.
      </p>

      {/* Conclusion */}
      <p className="highlight-text">
        We started the song <strong>*kyun?*</strong> in 2024.
      </p>

      {/* Learn More Button */}
      <div className="button-container text-center mt-4">
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default AboutPage;
