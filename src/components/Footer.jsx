import React, { Component } from 'react';
import '../scss/Footer.scss';
import email from '../assets/envelope.svg';
import github from '../assets/github.svg';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-icons'>
          <img src={email} alt='email' />
          <img src={github} alt='github' />
        </div>
      </div>
    );
  }
}

export default Footer;
