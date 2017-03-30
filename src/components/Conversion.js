import React, { Component } from 'react';

class Conversion extends Component {
  render() {
    let headers;
    let paragraphs;
    if (this.props.conversion.headers) {
      headers = this.props.conversion.headers.map(header => {
        return (<h4>{header}</h4>);
      });
    }
    if (this.props.conversion.paragraphs) {
      paragraphs = this.props.conversion.paragraphs.map(paragraph => {
        return (<p>{paragraph}</p>);
      });
    }
    return (
      <div className="Conversion container-fluid">
        {headers}
        {paragraphs}
        <button type="button" className="btn btn-primary btn-lg">JOIN</button>
      </div>
    );
  }
}

export default Conversion;
