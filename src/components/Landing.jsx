import React, { Component } from 'react';
import '../scss/Landing.scss';

class Landing extends Component {
  render() {
    return (
      <div className='landing' ref={this.props.refProp}>
        <h1 className='landing-header'>{'hanna muratovic'}</h1>
        <div className='landing-subheader__group'>
          <h3 className='landing-subheader'>{'electrical engineer.'}&nbsp;</h3>
          <h3 className='landing-subheader'>{'hardware designer.'}&nbsp;</h3>
          <h3 className='landing-subheader'>{'all-around boss.'}</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
