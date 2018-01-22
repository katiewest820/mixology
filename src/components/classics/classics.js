import React from 'react';
import './classics.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Classics extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      margaritas: [],
      mojitos: [],
      martinis: [],
      daiquiris: [],
      manhattans: []
    }
  }

 componentDidMount(){
      let self = this;
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(function (response) {
      self.setState({margaritas: response.data.drinks})
      console.log(self.state.margaritas)
      })
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
      .then(function (response) {
      self.setState({mojitos: response.data.drinks})
      console.log(self.state.mojitos)
      })
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
      .then(function (response) {
      self.setState({martinis: response.data.drinks})
      console.log(self.state.martinis)
      })
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri')
      .then(function (response) {
      self.setState({daiquiris: response.data.drinks})
      console.log(self.state.daiquiris)
      })
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan')
      .then(function (response) {
      self.setState({manhattans: response.data.drinks})
      console.log(self.state.manhattans)
      })
      .catch(function (error) {
      console.log(error);
      });
    }

  render(){
    
    let margaritas = this.state.margaritas.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })
    let mojitos = this.state.mojitos.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })
    let martinis = this.state.martinis.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })
    let daiquiris = this.state.daiquiris.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })
    let manhattans = this.state.manhattans.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })

  if(this.state.margaritas.length > 0 && this.state.mojitos.length > 0){
    return(
      <div className="classicsInfoDiv" >
        <div>
          <h1>Margaritas</h1>
          {margaritas}
        </div>
        <div>
          <h1>Mojitos</h1>
          {mojitos}
        </div>
        <div>
          <h1>Martinis</h1>
          {martinis}
        </div>
        <div>
          <h1>Daiquiris</h1>
          {daiquiris}
        </div>
        <div>
          <h1>Manhattans</h1>
          {manhattans}
        </div>
        <Link to="/"><button>Back to Home</button></Link>
      </div>
    )
  } 
    else{
      return(
        <div className="classicsInfoDiv" >
          <Link to="/"><button>Back to Home</button></Link>
        </div>
      )
    }
  }
}

 