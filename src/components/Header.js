import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Logo from './Logo'
import SandwichMenu from './SandwichMenu'
class Header extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  toggleMenu() {
    this.state.open = !this.state.open;
    console.log(this.state.open);
  }

  render() {
    let navs;
    if (this.props.header.nav) {
      navs = this.props.header.nav.map(nav => {
        return(<a href={nav.link}>{nav.label}</a>);
      });
    }
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.innerContainer)}>
          <div className={css(styles.brand)}>
            <Logo/>
          </div>
          <div className={css(styles.nav)}>
            {navs}
          </div>
        </div>
        <SandwichMenu toggleMenu={this.toggleMenu.bind(this)} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 0,
      justifyContent: 'space-between',
      flexDirection: 'row',
      color: '#A4D35A',
      alignItems: 'center',
      display: 'flex',
      backgroundColor: '#27292B',
      '@media (max-width: 1000px)': {
      }
    },
    innerContainer: {
      backgroundColor: '#999',
      height: '100%',
      color: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    brand: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#A4D35A'
    },
    nav: {
      '@media (max-width: 1000px)': {
        display: 'none'
      }
    }
});

export default Header;
