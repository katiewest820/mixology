import React from 'react';
//import Slider from 'react-slick';

export default class RightNavButton extends React.Component {
  render() {
    return <button {...this.props}><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></button>
  }
}