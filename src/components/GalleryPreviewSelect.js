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

  onClick(id) {
    this.setState({
      visible: true,
      selected: id

    }, function (){
      console.log(this.state.selected)
      this.props.selectImage(id);
    });
  }

  render() {
    let previewSelects;
    if (this.props.gallery.images) {
      previewSelects = this.props.gallery.images.map(image => {
        return (<div className={css(image[2] === this.state.selected[0] ? styles.red : styles.blue)} onClick={this.onClick.bind(this,[image[2]])}><img src={image[0]}/></div>);
      });
    }
    return (
      <div>
        <div>
          <h4>{this.props.gallery.subTitle}</h4>
          <h3>{this.props.gallery.title}</h3>
        </div>
        <div>
          {previewSelects}
        </div>
      </div>
    );
  }
}

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

export default GalleryPreviewSelect;
