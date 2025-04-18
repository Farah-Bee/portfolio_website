import React from 'react';
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Section 1 - Branding */}
        <div className="footer-section">
          <div className="logo">
            <img src="/assets/images/falogo.png" alt="Farah Logo" className="logo-image" />
            <span className="portfolio-text">Portfolio</span>
          </div>
  
          <p className="footer-description">
            Building exceptional digital experiences that inspire and connect with your audience.
          </p>
          <div className="social-links">
            <a href="https://github.com/Farah-Bee" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="mailto:farahbille75@gmail.com"><Mail size={20} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section 3 - Contact Info */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Information</h4>
          <p className="footer-description">
            Farah a Software Developer passionate about clean code, usability, and problem-solving.
          </p>
          <p className="footer-contact">farahbille75@gmail.com</p>
          <p className="footer-contact">+254 723 767 876</p>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="footer-bottom-center">
          <p>© {currentYear} Farah. All rights reserved.</p>
          </div>
          <a href="#hero" className="back-to-top">
            Back to top <span className="arrow">↑</span>
            </a>
          </div>
    </footer>
  );
};

export default Footer;
