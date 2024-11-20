import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Your Path to Success</h1>
        <p>Empowering Everyone to Achieve more</p>
        <a href="#contact" className="cta">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
