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

    if (scrollTop > 1) {
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
        <div className='header-left' onClick={() => { scrollTo(0) }}>
          <img className='header-left__logo' src={logo} alt='logo' />
        </div>
        <div className='header-right__mobile'>
          <img alt='menu' src={menu} className='header-right__mobile-menu' />
        </div>
        <div className='header-right__desktop'>
          <button className='header-right__desktop-item' href='#about' onClick={() => { this.props.scrollProp('about') }}>{'about me'}</button>
          <button className='header-right__desktop-item' href='#projects' onClick={() => { this.props.scrollProp('projects') }}>{'projects'}</button>
          <button className='header-right__desktop-item' href='#experience' onClick={() => { this.props.scrollProp('experience') }}>{'experience'}</button>
          <button className='header-right__desktop-item' href='link.com'>{'resume'}</button>
        </div>
      </div>
    );
  }
}

export default Header;
