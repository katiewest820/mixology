import React from 'react';
import './classics.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Slideshow from '../slideshow/slideshow';

export default class Classics extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      margaritas: [],
      mojitos: [],
      martinis: [],
      daiquiris: []
    }
  }

  componentDidMount(){
    let self = this;
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(function (response) {
      self.setState({margaritas: response.data.drinks});
    });
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then(function (response) {
      self.setState({mojitos: response.data.drinks});
    });
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
    .then(function (response) {
      self.setState({martinis: response.data.drinks});
    });
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri')
    .then(function (response) {
      self.setState({daiquiris: response.data.drinks});
    })
    .catch(function (error) {
      console.log('Something bad happened');
    });
  }

  render(){
    if(this.state.margaritas.length > 0 
      && this.state.mojitos.length > 0 
      && this.state.martinis.length > 0 
      && this.state.daiquiris.length > 0){
      return(
        <div className="classicsInfoDiv" >
          <Slideshow drinks={this.state}/>
          <Link to="/"><button className="backToHome">Back to Home</button></Link>
        </div>
      )
    }else{
      return(
        <div className="classicsInfoDiv" >
          <Link to="/"><button className="backToHome">Back to Home</button></Link>
        </div>
      )
    }
  }
}

 