import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import background from '../../assets/images/circle-bg.png';
class GalleryPreviewSelect extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <img src={this.props.image} className="PreviewImg" alt="MERCURIAL"/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      alignSelf: 'flex-end',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40vw',
      height: '40vw',
      backgroundImage: 'url(react/nike-test/assets/images/circle-bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '90%',
      backgroundPosition: 'center',
      '@media (max-width: 1000px)': {
        alignSelf: 'auto',
        width: '75vw',
        height: '75vw'
      }
    },

    preview: {
      maxWidth: '80%',
      minWidth: '80%',
      maxHeight: '100%'
    }
});

export default GalleryPreviewSelect;
