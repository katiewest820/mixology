import React from 'react';
import './help.css';
import {Link} from 'react-router-dom';

export default function Help(props){

return(
  <div className="helpInfoDiv">
    <h1>Searching</h1>
    <p>To search by ingredient or drink name click on the sarch icon. Enter your filter and click "Submit" to see your matches appear below!</p>
    <h1>View Recipe Details</h1>
    <p>To view a drink recipe, after searching for results click on your drink of choice to reivew the drink recipe and details</p>
    <Link to="/"><button>Got it!</button></Link>
  </div>
  )
} 