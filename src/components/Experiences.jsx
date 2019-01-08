import React, { Component } from 'react';
import '../scss/Experiences.scss';
import {EXPERIENCES} from '../utils/constants.js';

class Experiences extends Component {

  renderExperiences = () => {
    return (
      <div className='experiences-list'>
        {EXPERIENCES.map((experience) => {
          return (
            <div className='experience'>
              <div className='experience-left'>
                <h2 className='experience-title'>{experience.title}</h2>
                <h3 className='experience-subtitle'>{experience.subtitle}</h3>
              </div>
              <div className='experience-right'>
                <p className='experience-text'>{experience.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className='experiences content'>
        <div className='content-header experiences-header'>
          <div className='content-header__wrapper'>
            <div className='content-header__line' />
            <h1 className='content-header__text'>{'experience'}</h1>
            <div className='content-header__line' />
          </div>
        </div>
        <div className='content-body'>
          {this.renderExperiences()}
        </div>
      </div>
    );
  }
}

export default Experiences;
