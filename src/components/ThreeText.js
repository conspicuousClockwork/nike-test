import React, { Component } from 'react';
import TextBox from './TextBox'
import { StyleSheet, css } from 'aphrodite';
class ThreeText extends Component {
  render() {
    let textBoxes;
    if (this.props.info) {
      textBoxes = this.props.info.map(info => {
        return (<TextBox info={info} />);
      });
    }
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.innerContainer)}>
          {textBoxes}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      marginTop: '3em',
      marginBottom: '3em',
      display: 'flex'
    },
    innerContainer: {
      width: '75%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      display: 'flex',
      '@media (max-width: 1000px)': {
        flexDirection: 'column-reverse',
        alignItems: 'center'
      }
    }
});

export default ThreeText;
