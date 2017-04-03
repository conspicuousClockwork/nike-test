import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo'
import background from '../../assets/images/content-1-bg.png'
class Hero extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
          <Logo color="#A4D35A"/>
          <h1>{this.props.hero.title}</h1>
          <h2>{this.props.hero.text}</h2>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      minHeight: '50vw',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#A4D35A',
      alignItems: 'center',
      padding: '3em',
      display: 'flex',
      marginBottom: '0em',
      marginTop: '0em',
      backgroundImage: 'url('+background+')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      backgroundColor: '#27292B',
      textAlign: 'center',
      '@media (max-width: 1000px)': {
        backgroundSize: 'auto'
      }
    },
    text: {
      marginBottom: '2em'
    }
});

export default Hero;
