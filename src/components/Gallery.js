import React, { Component } from 'react';
import GalleryPreview from './GalleryPreview'
import GalleryPreviewSelect from './GalleryPreviewSelect'
import ThreeText from './ThreeText'

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
      <div className="GalleryContainer">
        <GalleryPreviewSelect selectImage={this.handleUpdatePreview.bind(this)} selected={this.state.selected} gallery={this.props.gallery}/>
        <GalleryPreview image={this.props.gallery.images[this.state.selected][1]} />
      </div>
    );
  }
}

export default Gallery;
