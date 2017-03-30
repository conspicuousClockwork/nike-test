import React, { Component } from 'react';
class GalleryPreviewSelect extends Component {
  constructor(){
    super();
    this.state = {
      visible: "GalleryPreviewSelect",
      selected: []
    }
  }
  componentWillMount(){
    if (this.props.selected === this.props.images[2]){
      console.log('Yes');
      this.setState({visible:"GalleryPreviewSelect visible"});
      console.log(this.state.visible);
    }
  }
  render() {

    function handleClick(e) {
      e.preventDefault();
      this.setState({selected:
          this.props.images
      }, function (){
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
