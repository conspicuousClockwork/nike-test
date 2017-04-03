import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
class TextBox extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <h2>{this.props.info.title}</h2>
        <p>{this.props.info.text}</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginRight: '1em',
      marginLeft: '1em',
      lineHeight: '2em',
      color: 'white'
    }
});

export default TextBox;
