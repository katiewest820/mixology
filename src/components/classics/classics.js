import React from 'react';
import './classics.css';
import axios from 'axios';

export default class Classics extends React.Component{
  constructor(props){
    super(props)
    // this.state={
    //   margaritas: [],
    //   mojitos: [],
    //   martinis: [],
    //   daiquiri: [],
    //   manhattan: []
    // }
    console.log(props)
  }

    // componentDidMount(){
    //   let self = this;
    //   axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    //   .then(function (response) {
    //   self.setState({margaritas: response.data.drinks})
    //   console.log(self.state.margaritas)
    //   })
    //   axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    //   .then(function (response) {
    //   self.setState({mojitos: response.data.drinks})
    //   console.log(self.state.mojitos)
    //   })
    //   axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
    //   .then(function (response) {
    //   self.setState({martinis: response.data.drinks})
    //   console.log(self.state.martinis)
    //   })
    //   axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=daiquiri')
    //   .then(function (response) {
    //   self.setState({daiquiri: response.data.drinks})
    //   console.log(self.state.daiquiri)
    //   })
    //   axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan')
    //   .then(function (response) {
    //   self.setState({manhattan: response.data.drinks})
    //   console.log(self.state.manhattan)
    //   })
    //   .catch(function (error) {
    //   console.log(error);
    //   });
    // }



  render(){
    let margaritas = this.props.value.margaritas.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })
    let mojitos = this.props.value.mojitos.map((drink, index) => {
       return (
        <div key={index}>
          <h3>{drink.strDrink}</h3>
          <img className="classicDrinkImg" src={drink.strDrinkThumb} />
        </div>
       )
    })
  
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
        <button onClick={this.props.onClick}>Back to Home</button>
      </div>
    )
  }

}