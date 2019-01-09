import React, { Component } from 'react';
import '../scss/Footer.scss';
import email from '../assets/envelope.svg';
import github from '../assets/github.svg';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-icons'>
          <a href='mailto:h2999mur@edu.uwaterloo.ca'>
            <img src={email} alt='email' />
          </a>
          <a href='https://github.com/HannaMuratovic'>
            <img src={github} alt='github' />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
