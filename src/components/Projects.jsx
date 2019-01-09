import React, { Component } from 'react';
import '../scss/Projects.scss';
import {PROJECTS} from '../utils/constants.js';

class Projects extends Component {

  renderProjects = () => {
    return (
      <div className='projects-list'>
        {PROJECTS.map((project) => {
          return (
            <div className='project'>
              <h2 className='project-title'>{project.title}</h2>
              <p className='project-text'>{project.text}</p>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className='projects content' ref={this.props.refProp}>
        <div className='content-header projects-header'>
          <div className='content-header__wrapper'>
            <div className='content-header__line' />
            <h1 className='content-header__text'>{'projects'}</h1>
            <div className='content-header__line' />
          </div>
        </div>
        <div className='content-body'>
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
