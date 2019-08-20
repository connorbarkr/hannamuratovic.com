import React, { Component } from 'react';
import _ from 'lodash';

import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

import { scrollTo } from './utils/scrollTo.js';
import { TABS } from './utils/constants.js'

import './scss/App.scss';
import './scss/_variables.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.landingRef = React.createRef();
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.experiencesRef = React.createRef();
  }

  componentDidMount() {
    this.hashScroll();
  }

  componentDidUpdate() {
    this.hashScroll();
  };

  decodeHash = (ref) => {
    switch (ref) {
      case 'landing':
        return this.landingRef;
      case 'about':
        return this.aboutRef;
      case 'projects':
        return this.projectsRef;
      case 'experience':
        return this.experienceRef;
      default:
        return;
    }
  }

  hashScroll = (location = null) => {
    if (location) {
      window.location.hash = location;
      scrollTo(this.decodeHash(location));
      return;
    }
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const hashParts = window.location.hash.split('#');

    if (hashParts.length === 0) {return;}
    if (hashParts.length > 1) {
      let hash = hashParts[1];
      if (hashParts.length > 2) {
        hash = hashParts.slice(-1)[0];
      }
      if (!_.find(TABS, {value: hash})) {
        return;
      }
      scrollTo(this.decodeHash(hash), true);
    }
  }

  render() {
    return (
      <div className="App">
        <Header scrollProp={this.hashScroll} />
        <Landing refProp={this.landingRef} />
        <About refProp={this.aboutRef} />
        <Projects refProp={this.projectsRef} />
        <Experiences refProp={this.experiencesRef} />
        <Footer />
      </div>
    );
  }
}

export default App;
