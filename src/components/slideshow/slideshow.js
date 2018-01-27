import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import DrinkRecipeDetails from '../drinkRecipeDetails/drinkRecipeDetails';
import './slideshow.css';

export default class Slideshow extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
      clickedDrink: ''
    }
  }

  grabId(myId){
  console.log(myId)
  let self = this;
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myId}`)
    .then(function (response) {
      console.log(response);
      self.setState({clickedDrink: response.data.drinks[0]})
      console.log(self.state.clickedDrink)
     });
  }

  render(){
    let settings = {
      infinate: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    let margaritas = this.props.drinks.margaritas.map((drink, index) => {
      return (
        <div key={index}  onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img  className="slideShowImg" src={drink.strDrinkThumb} />
        </div>)
    });
    let mojitos = this.props.drinks.mojitos.map((drink, index) => {
      return (
        <div key={index} onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img  className="slideShowImg" src={drink.strDrinkThumb} />
        </div>)
    });
    let daiquiris = this.props.drinks.daiquiris.map((drink, index) => {
      return (
        <div key={index} onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img  className="slideShowImg" src={drink.strDrinkThumb} />
        </div>)
    });
    

    if(this.state.clickedDrink !== ''){
      return(
          <DrinkRecipeDetails clickedDrink={this.state.clickedDrink} />
        )
    }else{
      return(
        <div className="slideshowDiv">
          <Slider {...settings}>
            {margaritas}
          </Slider>
          
          <Slider {...settings}>
            {mojitos}
          </Slider>
          
          <Slider {...settings}>
            {daiquiris}
          </Slider>
        </div>
      )
    }
  }
} 
