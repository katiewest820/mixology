import React from 'react';

export default class RightNavButton extends React.Component {
  render() {
    return <button {...this.props}><i className="fa fa-angle-right fa-3x" aria-hidden="true"></i></button>
  }
}