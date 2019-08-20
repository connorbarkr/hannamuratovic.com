import React, { Component } from 'react';
import '../scss/Header.scss';
import logo from '../assets/hanna_logo.svg';
import menu from '../assets/menu.svg';
import { scrollTo } from '../utils/scrollTo.js';

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
// onClick={this.props.refsProp[0] ? scrollTo(this.props.refsProp[0], 'auto') : console.log("hi")}
  render() {
    return (
      <div className={`header ${this.isScrolled ? 'header-scrolled' : ''}`}>
        <div className='header-left' >
          <img className='header-left__logo' src={logo} alt='logo' />
        </div>
        <div className='header-right__mobile'>
          <img alt='menu' src={menu} className='header-right__mobile-menu' />
        </div>
        <div className='header-right__desktop'>
          <button className='header-right__desktop-item' href='#about' onClick={() => { this.props.scrollProp('about') }}>{'about me'}</button>
          <button className='header-right__desktop-item' href='#projects'>{'projects'}</button>
          <button className='header-right__desktop-item' href='#experience'>{'experience'}</button>
          <button className='header-right__desktop-item' href='link.com'>{'resume'}</button>
        </div>
      </div>
    );
  }
}

export default Header;
