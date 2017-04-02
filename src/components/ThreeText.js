import React, { Component } from 'react';
import TextBox from './TextBox'

class ThreeText extends Component {
  render() {
    let textBoxes;
    if (this.props.info) {
      textBoxes = this.props.info.map(info => {
        return (<TextBox info={info} />);
      });
    }
    return (
      <div className="InfoContainer">
        <div className="ThreeText container-fluid">
          <div className="row">
            {textBoxes}
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeText;
