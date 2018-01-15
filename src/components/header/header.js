import React from 'react';
import './header.css';


export default function Header(props) {
  console.log(props)
  return(
    <header>
      <div onClick={props.onClickHelp} className="helpDiv">Help</div>
      <div onClick={props.onClickClassics} className="browseClassics">Browse Classics</div>
    </header>
    )

} 