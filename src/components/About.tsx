import React from 'react';
import '../styles/about.css';
import { User, MapPin, Mail, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Kenuze</strong>, a passionate Frontend Developer
            dedicated to building beautiful and responsive web applications.
            I love turning ideas into reality through code. Whether it is clean UI
            or interactive animations — I am always pushing the limits!
          </p>
        </div>
        <div className="about-info">
          <h3 className="info-title">Personal Info</h3>
          <div className="info-grid">
            <div className="info-card">
              <User className="info-icon" />
              <div className="info-details">
                <h4>Name</h4>
                <p>Kenuze</p>
              </div>
            </div>
            <div className="info-card">
              <MapPin className="info-icon" />
              <div className="info-details">
                <h4>Location</h4>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="info-card">
              <Mail className="info-icon" />
              <div className="info-details">
                <h4>Email</h4>
                <p>kenuze@example.com</p>
              </div>
            </div>
            <div className="info-card">
              <ExternalLink className="info-icon" />
              <div className="info-details">
                <h4>Freelance</h4>
                <p>Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
