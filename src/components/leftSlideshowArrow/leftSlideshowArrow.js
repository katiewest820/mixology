import React from 'react';

export default class LeftNavButton extends React.Component {
  render() {
    return <button {...this.props}><i className="fa fa-angle-left fa-3x" aria-hidden="true"></i></button>
  }
}