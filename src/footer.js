import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        Copyright Abolyn 2024, All rights reserved.
      </div>
      <div className="right">
        <div id="youtube" className="icon"><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a></div>
        <div id="facebook" className="icon"><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></div>
        <div id="twitter" className="icon"><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></div>
        <div id="instagram" className="icon"><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></div>
        <div id="linkedin" className="icon"><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></div>
      </div>
    </footer>
  );
}

export default Footer;
