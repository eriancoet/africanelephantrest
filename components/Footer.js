import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class="flex justify-center">
      <div className="social-icons">
        <a href="https://www.facebook.com/theafricanelephant" class="m-4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" class="m-4">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/annakatarinaguesthouse/" class="m-4">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>Copyright © {new Date().getFullYear()} The African Elephant</p>
    </footer>
  );
};

export default Footer;