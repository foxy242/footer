import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/logo2.svg" alt="Logo" />
      </div>

      <div className="address">
        <h4>Address</h4>
        <p>Svobody str. 35</p>
        <p>Kyiv</p>
        <p>Ukraine</p>
      </div>

      <div className="socials">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <img src="/whatsapp.svg" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
