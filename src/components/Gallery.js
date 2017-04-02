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

  handleUpdatePreview(selection){
    this.setState({selected:selection}, function(){
    });
  }

  componentWillMount() {
    this.setState({selected:this.props.gallery.images[0][2]});
  }

  render() {
    let previewSelects;
    if (this.props.gallery.images) {
      previewSelects = this.props.gallery.images.map(image => {
        return (<GalleryPreviewSelect images={image} selected={this.state.selected} changeImages={this.handleUpdatePreview.bind(this)}/>);
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
              <GalleryPreview image={this.props.gallery.images[this.state.selected][1]} />
            </div>
          </div>
        </div>
        <ThreeText info={this.props.gallery.info} />
      </div>
    );
  }
}

export default Gallery;
