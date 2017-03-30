import React, { Component } from 'react';
import background from '../../assets/images/circle-bg.png';
class GalleryPreviewSelect extends Component {
  render() {
    return (
      <div className="GalleryPreview">
        <img src={this.props.image} className="PreviewImg" alt="MERCURIAL"/>
        <img src={background} className="PreviewBackground" alt=""/>
      </div>
    );
  }
}

export default GalleryPreviewSelect;
