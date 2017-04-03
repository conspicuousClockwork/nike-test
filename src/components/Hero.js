import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo'
import background from '../../assets/images/content-1-bg.png'
class Hero extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
          <Logo color="#A4D35A"/>
          <h1 className={css(styles.title)}>{this.props.hero.title}</h1>
          <h2 className={css(styles.text)}>{this.props.hero.text}</h2>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      fontWeight: 'bold',
      width: '100%',
      maxWidth: '100%',
      minHeight: '50vw',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#A4D35A',
      alignItems: 'center',
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
    title: {
      fontSize: '5vw',
      marginBottom: 0,
      fontWeight: 'bold'
    },
    text: {
      color: 'white',
      fontSize: '3vw',
      fontWeight: 'bold'
    }
});

export default Hero;
