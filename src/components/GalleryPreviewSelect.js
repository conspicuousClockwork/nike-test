import React, { Component } from 'react';
class GalleryPreviewSelect extends Component {
  constructor(){
    super();
    this.state = {
      visible: "GalleryPreviewSelect",
      selected: []
    }
  }
  render() {

    function handleClick(e) {
      e.preventDefault();
      this.setState({selected:
          this.props.images[2]
      }, function (){
        console.log(this.state.selected + "YO");
        this.props.changeImages(this.state.selected);
      });
    }
    return (
      <div className={this.state.visible} onClick={handleClick.bind(this)}>
        <img src={this.props.images[0]} alt="MERCURIAL"/>
      </div>
    );
  }
}

export default GalleryPreviewSelect;
