import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GalleryPreviewSelect extends Component {
  constructor(){
    super();
    this.state = {
      visible: false,
      selected: []
    }
  }

  onClick() {
    this.setState({
      visible: true,
      selected: this.props.image[2]

    }, function (){
      this.props.changeImages(this.props.image[2]);
    });
  }

 componentDidUpdate(){

 }
  render() {

    return (
      <div onClick={this.onClick.bind(this)}>
        <img src={this.props.image[0]} alt="MERCURIAL"/>
      </div>
    );
  }
}



export default GalleryPreviewSelect;
