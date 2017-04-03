import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GalleryPreviewSelect extends Component {
  constructor(){
    super();
    this.state = {
      visible: false,
      selected: [0]
    }
  }

  onClick(id) {
    this.setState({
      visible: true,
      selected: id

    }, function (){
      console.log(this.state.selected)
      this.props.selectImage(id);
    });
  }

  render() {
    let previewSelects;
    if (this.props.gallery.images) {
      previewSelects = this.props.gallery.images.map(image => {
        return (<div className={css(image[2] === this.state.selected[0] ? styles.active : styles.inactive,styles.choice)} onClick={this.onClick.bind(this,[image[2]])}><img src={image[0]}/></div>);
      });
    }
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.text)}>
          <h4>{this.props.gallery.subTitle}</h4>
          <h3>{this.props.gallery.title}</h3>
        </div>
        <div className={css(styles.choices)}>
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
      marginLeft: '10px',
      marginBottom: '10px',
      marginRight: '0px',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '5em',
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
    }
});

export default GalleryPreviewSelect;
