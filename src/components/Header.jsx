import React, { Component } from 'react';
import '../scss/Header.scss';
import logo from '../assets/hanna-mono.svg';
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

  render() {
    return (
      <div className={`header ${this.isScrolled ? 'header-scrolled' : ''}`}>
        <div className='header-left' onClick={this.props.refsProp[0] ? scrollTo(this.props.refsProp[0], 'auto') : console.log('hi')}>
          <img className='header-left__logo' src={logo} alt='logo' />
        </div>
        <div className='header-right__mobile'>
          <img alt='menu' src={menu} className='header-right__mobile-menu' />
        </div>
        <div className='header-right__desktop'>
          <h3 className='header-right__desktop-item' onClick={this.props.refsProp[1] ? scrollTo(this.props.refsProp[1]) : null}>{'about me'}</h3>
          <h3 className='header-right__desktop-item' onClick={this.props.refsProp[2] ? scrollTo(this.props.refsProp[2]) : null}>{'projects'}</h3>
          <h3 className='header-right__desktop-item' onClick={this.props.refsProp[3] ? scrollTo(this.props.refsProp[3]) : null}>{'experience'}</h3>
          <a className='header-right__desktop-item' href='link.com'>{'resume'}</a>
        </div>
      </div>
    );
  }
}

export default Header;
