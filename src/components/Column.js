import React, { Component } from 'react';

class Column extends Component {
  render() {
    let links;
    if (this.props.column.links) {
      links = this.props.column.links.map(link => {
        return (<a href={link.link}><p>{link.text}</p></a>);
      });
    }
    return (
      <div className='FooterColumn col-md-3'>
        <h5 className='title'>{this.props.column.title}</h5>
        {links}
      </div>
    );
  }
}

export default Column;
