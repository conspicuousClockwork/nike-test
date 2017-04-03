import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Column from './Column'
import Logo from './Logo'
class NikeFooter extends Component {
  render() {
    let columns;
    if (this.props.footer.columns) {
      columns = this.props.footer.columns.map(column => {
        return (<Column key={column.title} column={column} />);
      });
    }
    return (
      <footer className={css(styles.container)}>
        <div className={css(styles.innerContainer)}>
            {columns}
        </div>
        <div className={css(styles.copyright)}>
          <Logo />
          <p>Copyright NIKE 2017</p>
        </div>
      </footer>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    innerContainer: {
      width: '75%',
      paddingTop: '3em',
      paddingBottom: '3em',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      display: 'flex',
      '@media (max-width: 1000px)': {
        flexDirection: 'column-reverse',
        alignItems: 'center'
      }
    },
    copyright: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
});

export default NikeFooter;
