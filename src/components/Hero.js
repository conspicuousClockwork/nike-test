import React, { Component } from 'react';
import Logo from './Logo'
class Hero extends Component {
  render() {
    return (
      <div className="HeroContainer">
        <div className="Hero">
          <Logo />
          <h1>{this.props.hero.title}</h1>
          <h2>{this.props.hero.text}</h2>
        </div>
      </div>
    );
  }
}

export default Hero;
