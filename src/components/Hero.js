import React, { Component } from 'react';
import logo from '../../assets/images/logo2.svg'
class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <img src={logo} alt="Nike Logo" />
        <h1>{this.props.hero.title}</h1>
        <h2>{this.props.hero.text}</h2>
      </div>
    );
  }
}

export default Hero;
