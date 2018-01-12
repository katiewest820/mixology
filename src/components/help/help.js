import React from 'react';
import './help.css';

export default function Help(props){

return(
  <div className="helpInfoDiv">
    <p>useful info</p>
    <button onClick={props.onClick}>Got it!</button>
  </div>
  )
} 