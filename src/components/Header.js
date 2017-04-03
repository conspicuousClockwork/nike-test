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
    this.setState({open: !this.state.open});
    console.log(this.state.open);
  }

  componentDidUpdate(){
    console.log('hello');
  }
  render() {
    let navs;
    if (this.props.header.nav) {
      navs = this.props.header.nav.map(nav => {
        return(<a href={nav.link} className={css(styles.link)}>{nav.label}</a>);
      });
    }
    return (
      <div>
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
        <div className={css(this.state.open ? styles.mobileNav : styles.invisible)}>
          {navs}
        </div>
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
    },
    mobileNav: {
      transition: 'all 2s',
      width: '100%',
      height: 'auto',
      padding: '2em',
      justifyContent: 'space-between',
      flexDirection: 'column',
      color: '#A4D35A',
      alignItems: 'center',
      display: 'flex',
      backgroundColor: '#27292B',
      '@media (min-width: 1000px)': {
        display: 'none'
      }
    },
    invisible: {
      transition: 'all 2s',
      height: 0,
      display: 'none'
    },
    link: {
      margin: '1em',
      color: 'white',
      fontSize: '2em',
      backgroundColor: 'black',
      ':link': {
          textDecoration: 'none'
      },
      ':visited': {
          textDecoration: 'none'
      },
      ':hover': {
          textDecoration: 'none'
      },
      ':active': {
          textDecoration: 'none'
      },
      linkStyle: 'none'
    }
});

export default Header;
