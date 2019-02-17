import React, { Component } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import './scss/App.scss';
import './scss/_variables.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.refs = {
      landingRef: React.createRef(),
      aboutRef: React.createRef(),
      projectsRef: React.createRef(),
      experiencesRef: React.createRef(),
    }
  }

  render() {
    return (
      <div className="App">
        <Header refsProp={this.refs} />
        <Landing refProp={this.refs.landingRef} />
        <About refProp={this.refs.aboutRef} />
        <Projects refProp={this.refs.projectsRef} />
        <Experiences refProp={this.refs.experiencesRef} />
        <Footer />
      </div>
    );
  }
}

export default App;
