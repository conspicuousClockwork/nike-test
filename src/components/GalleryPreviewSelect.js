import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GalleryPreviewSelect extends Component {
  /* Update the state of the gallery based on the users click */
  onClick(id) {
    this.props.selectImage(id[0]);
  }

  render() {
    // Create an array of JSX elements from our data to render later
    let previewSelects;
    if (this.props.gallery.images) {
      /* Take our array of images and create JSX for each one */
      previewSelects = this.props.gallery.images.map(image => {
        return (<div
                  className={
                  /* CSS based on selected prop */
                  css(image[2] === this.props.selected ? styles.active :
                  styles.inactive,styles.choice)}
                  /* onClick function */
                  onClick={this.onClick.bind(this,[image[2]])}
                >
                  <img className={css(styles.preview)} src={image[0]}/>
                </div>);
      });
    }

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.text)}>
          <h4>{this.props.gallery.subTitle}</h4>
          <h3>{this.props.gallery.title}</h3>
        </div>
        <div className={css(styles.choices)}>
          {/* Render our array of preview images here */}
          {previewSelects}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '0px',
      margin: '20px'
    },

    text: {
      color: 'white',
      lineHeight: 0,
      margin: '5px'
    },

    choice: {
      display: 'flex',
      width: '100%',
      padding: '5px',
      marginTop: '10px',
      marginLeft: '0px',
      marginBottom: '10px',
      marginRight: '0px',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '6em',
      '@media (max-width: 1000px)': {
          alignItems: 'center'
      }
    },

    active: {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#A4D35A',
      borderRadius: '2px'
    },

    inactive: {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRadius: '2px'
    },

    choices: {
        '@media (max-width: 1000px)': {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
        }
    },
    preview: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
});

export default GalleryPreviewSelect;
