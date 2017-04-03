import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Conversion extends Component {
  render() {
    let headers;
    let paragraphs;
    if (this.props.conversion.headers) {
      headers = this.props.conversion.headers.map(header => {
        return (<h1>{header}</h1>);
      });
    }
    if (this.props.conversion.paragraphs) {
      paragraphs = this.props.conversion.paragraphs.map(paragraph => {
        return (<p className={css(styles.text)}>{paragraph}</p>);
      });
    }
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.innerContainer)}>
          <span className={css(styles.text)}>
            {headers}
          </span>
          {paragraphs}
          <button type="button" className={css(styles.button)}><h3>JOIN</h3></button>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#A4D35A',
      width: '100%',
      justifyContent: 'center',
      paddingTop: '3em',
      paddingBottom: '3em',
      display: 'flex'
    },
    innerContainer: {
      fontWeight: 'bold',
      color: 'white',
      margin: '1em',
      flexDirection: 'column',
      width: '75%',
      display: 'flex',
      padding: '1em'
    },
    text: {
      marginBottom: '2em'
    },
    button: {
      width: '25%',
      padding: 0,
      display: 'flex',
      backgroundColor: 'white',
      justifyContent: 'center',
      textAlign: 'center',
      borderColor: 'transparent',
      borderRadius: '4px',
      color: '#A4D35A',
      '@media (max-width: 1000px)': {
        width: '100%'
      }
    }
});

export default Conversion;
