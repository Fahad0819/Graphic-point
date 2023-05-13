import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Graphic Point and Sign
        </p>
        <p className='footer-subscription-text'>
        For all your singage needs
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p>Phone: 0161 763 7619</p>
            <p>Mobile: 07756 409 725</p>
            <p> 81 Machester Street, Heywood, 0L10 1PB</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Graphic Design & Sign
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Graphic Point & Sign © 2023</small>
          <div className='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.twitch.tv/professorkoala/videos?filter=all&sort=views'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
