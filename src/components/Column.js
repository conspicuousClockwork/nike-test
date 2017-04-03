import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
class Column extends Component {
  render() {
    let links;
    if (this.props.column.links) {
      links = this.props.column.links.map(link => {
        return (<a href={link.link} className={css(styles.link)}><p>{link.text}</p></a>);
      });
    }
    return (
      <div className={css(styles.container)}>
        <h4 className={css(styles.bold)}>{this.props.column.title}</h4>
        {links}
      </div>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      fontWeight: 'bold',
      color: '#333',
      width: '15vw',
      justifyContent: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      '@media (max-width: 1000px)': {
        width: 'auto',
        textAlign: 'center'
      }
    },
    bold: {
      color: '#666',
      fontWeight: 'bold'
    },
    link: {
      color: '#888',
      ':link': {
          textDecoration: 'none'
      },
      ':visited': {
          textDecoration: 'none'
      },
      ':hover': {
          color: '#A4D35A',
          textDecoration: 'none'
      },
      ':active': {
          textDecoration: 'none'
      },
      linkStyle: 'none'
    }
});

export default Column;
