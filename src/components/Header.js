import React, { Component } from 'react';
import Logo from './Logo'
class Header extends Component {

  render() {
    let navs;
    if (this.props.header.nav) {
      navs = this.props.header.nav.map(nav => {
        return(<li><a href={nav.link}>{nav.label}</a></li>);
      });
    }
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="brandContainer col-md-2">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><Logo /></a>
            </div>
          </div>
          <div>
            <ul className="nav navbar-nav">
              {navs}
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Header;
