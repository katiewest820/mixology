import React from 'react';
import './classics.css';

export default function Classics(props){

  return(
    <div className="classicsInfoDiv">
      <div>classics info</div>
      <button onClick={props.onClick}>Back to Search</button>
    </div>
  )
}