import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
class Column extends Component {
  render() {
    let links;
    if (this.props.column.links) {
      links = this.props.column.links.map(link => {
        return (<a href={link.link}><p>{link.text}</p></a>);
      });
    }
    return (
      <div className={css(styles.container)}>
        <h5 className={css(styles.bold)}>{this.props.column.title}</h5>
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
      fontWeight: 'bold'
    }
});

export default Column;
