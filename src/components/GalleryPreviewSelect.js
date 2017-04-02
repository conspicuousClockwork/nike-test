import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});


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
      <div className={css(this.state.visible ? styles.red : styles.blue)} onClick={this.onClick.bind(this)}>
        <img src={this.props.image[0]} alt="MERCURIAL"/>
      </div>
    );
  }
}



export default GalleryPreviewSelect;
