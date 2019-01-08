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
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <About />
        <Projects />
        <Experiences />
        <Footer />
      </div>
    );
  }
}

export default App;
