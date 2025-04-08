import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kenuze. All rights reserved.</p>
      <a href="#hero">Back to top ↑</a>
    </footer>
  );
};

export default Footer;
