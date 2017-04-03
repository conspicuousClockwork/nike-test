import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SandwichMenu extends Component {
  onClick() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className={css(styles.container)} onClick={this.onClick.bind(this)}>
        &#9776;
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingRight: '1em',
      paddingLeft: '1em',
      alignSelf: 'center',
      color: 'white',
      width: '0em',
      display: 'flex',
      justifyContent: 'center',
      margin: '20px',
      fontSize: '3em',
      '@media (min-width: 1000px)': {
        display: 'none'
      }
    }
});

export default SandwichMenu;
