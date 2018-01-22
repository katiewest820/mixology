import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';


export default function Header(props) {
  console.log(props)
  return(
    <header>
      <Link to="/help" className="helpDiv">Help</Link>
      <Link to="/classics" className="browseClassics">Classics</Link>
    </header>
    )
} 