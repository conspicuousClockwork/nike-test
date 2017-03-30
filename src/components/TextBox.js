import React, { Component } from 'react';

class TextBox extends Component {
  render() {
    return (
      <div className="TextBox col-md-4">
        <h2>{this.props.info.title}</h2>
        <p>{this.props.info.text}</p>
      </div>
    );
  }
}

export default TextBox;
