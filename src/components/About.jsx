import React, { Component } from 'react';
import '../scss/About.scss';
import profile from '../assets/hanna.jpg';
import {ABOUT} from '../utils/constants.js';

class About extends Component {
  render() {
    return (
      <div className='about' ref={this.props.refProp}>
        <div className='about-header content-header'>
          <div className='content-header__wrapper'>
            <div className='content-header__line' />
            <h1 className='content-header__text'>{'about'}&nbsp;{'me'}</h1>
            <div className='content-header__line' />
          </div>
        </div>
        <div className='about-body'>
          <img className='about-body__img' alt='profile' src={profile}/>
          <p className='about-body__text'>
            {ABOUT}
          </p>
        </div>
      </div>
    );
  }
}

export default About;
