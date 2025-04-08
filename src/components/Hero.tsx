import React from 'react';
import { ArrowDown } from "lucide-react";
import '../styles/hero.css';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-section"
    >
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Kenuze</span>
          </h1>
          <p className="hero-subtitle">
            A passionate frontend developer crafting beautiful and functional web experiences
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary-button">View My Work</a>
            <a href="#contact" className="hero-button outline-button">Contact Me</a>
          </div>
          <div className="scroll-down">
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="scroll-icon" />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/images/fbi.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
