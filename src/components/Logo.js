import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Logo extends Component {
  render() {
    return (
      <svg className={css(styles.logo)} fill={this.props.color} version="1.1" xmlnsSvg="http://www.w3.org/2000/svg" xmlns="&ns_svg;" xmlnsXlink="&ns_xlink;"  viewBox="135.5 361.375 200 72" overflow="visible" enableBackground="new 135.5 361.375 200 72" xmlSpace="preserve">
        <path d="M159.23,431.966c-5.84-0.232-10.618-1.83-14.354-4.798c-0.713-0.567-2.412-2.267-2.982-2.984 c-1.515-1.905-2.545-3.759-3.232-5.816c-2.114-6.332-1.026-14.641,3.112-23.76c3.543-7.807,9.01-15.55,18.548-26.274 c1.405-1.578,5.589-6.193,5.616-6.193c0.01,0-0.218,0.395-0.505,0.876c-2.48,4.154-4.602,9.047-5.758,13.283 c-1.857,6.797-1.633,12.63,0.656,17.153c1.579,3.116,4.286,5.815,7.33,7.307c5.329,2.611,13.131,2.827,22.659,0.632 c0.656-0.152,33.162-8.781,72.236-19.176c39.074-10.396,71.049-18.895,71.054-18.888c0.011,0.009-90.78,38.859-137.911,59.014 c-7.464,3.191-9.46,3.997-12.969,5.229C173.76,430.721,165.725,432.224,159.23,431.966z"/>
      </svg>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      minHeight: '5em',
      maxHeight: '10em',
      width: '50%'
    }
});

export default Logo;
