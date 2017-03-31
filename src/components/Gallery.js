import React, { Component } from 'react';
import GalleryPreview from './GalleryPreview'
import GalleryPreviewSelect from './GalleryPreviewSelect'
import ThreeText from './ThreeText'
class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      selected : []
    }
  }
  handleChangeImages(selection){
    this.setState({selected:selection}, function(){
      this.props.changeImages(this.state.selected);
    });

  }
  render() {
    let previewSelects;
    if (this.props.gallery.images) {
      previewSelects = this.props.gallery.images.map(image => {
        return (<GalleryPreviewSelect images={image} selected={this.props.gallery.selected} changeImages={this.handleChangeImages.bind(this)}/>);
      });
    }
    return (
      <div className="GalleryContainer">
        <div className="Gallery container-fluid">
          <div className="row">
            <div className="col-md-1">
              <h5>{this.props.gallery.subTitle}</h5>
              <h4>{this.props.gallery.title}</h4>
              {previewSelects}
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <GalleryPreview image={[this.props.gallery.images[this.props.gallery.selected][1]]} />
            </div>
          </div>
        </div>
        <ThreeText info={this.props.gallery.info} />
      </div>
    );
  }
}

export default Gallery;
