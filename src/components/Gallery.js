import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GalleryPreview from './GalleryPreview'
import GalleryPreviewSelect from './GalleryPreviewSelect'
import ThreeText from './ThreeText'
import background from '../../assets/images/content-2-bg.png'

class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      selected: 0
    }
  }

  componentWillMount() {
    this.setState({selected:this.props.gallery.images[0][2]});
  }


  handleUpdatePreview(selection){
    this.setState({selected:selection});
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <GalleryPreviewSelect selectImage={this.handleUpdatePreview.bind(this)} selected={this.state.selected} gallery={this.props.gallery}/>
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
        alignSelf: 'auto',
        width: '75vw',
        height: '75vw'
      }
    }
});

export default Gallery;
