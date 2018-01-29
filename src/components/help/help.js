import React from 'react';
import './help.css';
import {Link} from 'react-router-dom';

export default function Help(props){
return(
  <div className="classicsInfoDiv">
    <div className="helpInfoDiv" >
      <h1>Searching</h1>
      <p>To search by ingredient or drink name click on the sarch icon. Enter your ingredient or drink of choice and click "Submit" to see your matches appear below!</p>
      <h1>View Recipe Details</h1>
      <p>To view a drink recipe click on a drink image. Details will appear with ingredients and instructions. Click on the upper right corner X to return to the results page.</p>
      <h1>View Classics</h1>
      <p>To view classic drink types click on the "Classics" link in the header. Scroll through the available selections and click on an image to see recipe details.</p>
      <Link to="/"><button className="helpInfoBtn">Got it!</button></Link>
    </div>  
  </div>
  )
} 