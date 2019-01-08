import React, { Component } from 'react';
import '../scss/Header.scss';
import logo from '../assets/hanna-mono.svg';
import menu from '../assets/menu.svg';

class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
  }

  checkScroll = (event) => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
      this.isScrolled = true;
      this.forceUpdate();
    } else {
      this.isScrolled = false;
      this.forceUpdate();
    }
  }

  isScrolled = false;

  render() {
    return (
      <div className={`header ${this.isScrolled ? 'header-scrolled' : ''}`}>
        <div className='header-left'>
          <img className='header-left__logo' src={logo} alt='logo' />
        </div>
        <div className='header-right__mobile'>
          <img alt='menu' src={menu} className='header-right__mobile-menu' />
        </div>
        <div className='header-right__desktop'>
          <h3 className='header-right__desktop-item'>{'about me'}</h3>
          <h3 className='header-right__desktop-item'>{'projects'}</h3>
          <h3 className='header-right__desktop-item'>{'experience'}</h3>
          <h3 className='header-right__desktop-item'>{'resume'}</h3>
        </div>
      </div>
    );
  }
}

export default Header;
