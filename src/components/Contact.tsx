import React from 'react';
import '../styles/contact.css';
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <h3 className="contact-title">Contact Information</h3>
          <p className="contact-text">
            I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.
          </p>

          <div className="contact-info-group">
            <div className="contact-card">
              <div className="icon-bg">
                <Phone className="icon" />
              </div>
              <div>
                <h4 className="info-title">Phone</h4>
                <p className="info-detail">+254 712 345 678</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-bg">
                <Mail className="icon" />
              </div>
              <div>
                <h4 className="info-title">Email</h4>
                <p className="info-detail">
                  <a href="mailto:kkenuze@gmail.com" className="email-link">kkenuze@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-bg">
                <MapPin className="icon" />
              </div>
              <div>
                <h4 className="info-title">Location</h4>
                <p className="info-detail">Mombasa, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h3 className="contact-title">Send Message</h3>
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Your name" required className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your email" required className="input-field" />
              </div>

              <div className="form-group-full">
                <label htmlFor="subject">Subject</label>
                <input id="subject" placeholder="Subject" required className="input-field" />
              </div>

              <div className="form-group-full">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message" rows={5} required className="input-field" />
              </div>

              <button type="submit" className="submit-button">
                <Send className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
