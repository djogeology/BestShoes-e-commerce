import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: support@bestshoes.com</p>
        <p>Phone: +216 92 877 344</p>
        <p>Address: Rebootcamp, Sfax, Tunisia</p>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <div className="copy">
        © 2024 BestShoes. All rights reserved.
      </div>
      <div className="map">
        <iframe
          title="store-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.172929357836!2d10.752245314410146!3d34.747801180422085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1300207d2f45b00f%3A0xbab72c7b64b99458!2sReBootKamp!5e0!3m2!1sen!2stn!4v1629912385376!5m2!1sen!2stn"
          width="100%"
          height="350px" /* Adjusted height for slightly larger square */
          style={{
            paddingBottom: '100%', /* Aspect ratio for square shape (height = width) */
            position: 'relative',
            overflow: 'hidden'
          }}
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
