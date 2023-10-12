import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
        
     
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              evetdesin
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>evetdesin © 2023</small>
          <div class='social-icons'>
          <a class="navbar-brand" href="/">
          <div class="logo-image">
        <img src="images/evetdesin2.png" alt="logo" width="160" height="160" />
          </div>
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
