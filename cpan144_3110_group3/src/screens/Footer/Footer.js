import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__main">
      <div className="footer__left">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
      </div>

      <div className="footer__center">
        <button type="button">Subscribe</button>
        <p>Follow us on social media</p>
        <div className="footer__social-icons">
          <a href="#facebook" className="social-icon">
            Facebook
          </a>
          <a href="#twitter" className="social-icon">
            Twitter
          </a>
          <a href="#instagram" className="social-icon">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer__right">
        <p>&copy; {new Date().getFullYear()} Bongo Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
