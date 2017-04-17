import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GalleryPreview from './GalleryPreview'
import GalleryPreviewSelect from './GalleryPreviewSelect'
import ThreeText from './ThreeText'
import background from '../../assets/images/content-2-bg.png'

class Gallery extends Component {
  //initialize our state with
  constructor(){
    super();
    this.state = {
      selected: 0
    }
  }

  handleUpdatePreview(newSelection){
    this.setState({selected:newSelection});
  }

  render() {
    return (
      <div className={css(styles.container)}>
        {/* Output our preview selection component
            -Passing in a function to change the selected state of gallery
            -Passing in the whole gallery object
            -Passing in the selected state of our gallery
        */}
        <GalleryPreviewSelect selectImage={this.handleUpdatePreview.bind(this)} gallery={this.props.gallery} selected={this.state.selected}/>
        {/* Output our preview component
            -Passing in the image value
        */}
        <GalleryPreview image={this.props.gallery.images[this.state.selected][1]} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      display: 'flex',
      backgroundImage: 'url('+background+')',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: '#27292B',
      '@media (max-width: 1000px)': {
        flexDirection: 'column-reverse',
        alignItems: 'center'
      }
    }
});

export default Gallery;
