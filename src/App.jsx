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

    this.refs = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ];
  }

  render() {
    return (
      <div className="App">
        <Header refsProp={this.refs}/>
        <Landing refProp={this.refs[0]} />
        <About refProp={this.refs[1]} />
        <Projects refProp={this.refs[2]} />
        <Experiences refProp={this.refs[3]} />
        <Footer />
      </div>
    );
  }
}

export default App;
