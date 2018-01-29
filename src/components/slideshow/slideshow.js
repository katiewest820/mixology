import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import DrinkRecipeDetails from '../drinkRecipeDetails/drinkRecipeDetails';
import LeftSlideshowArrow from '../leftSlideshowArrow/leftSlideshowArrow';
import RightSlideshowArrow from '../rightSlideshowArrow/rightSlideshowArrow';
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
  let self = this;
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myId}`)
    .then(function (response) {
      self.setState({clickedDrink: response.data.drinks[0]})
    });
  }

  closeClassicsDrinkRecipeDetails(clickedDrink){
    this.setState({clickedDrink: ''});
  }

  render(){
    let settings = {
      infinate: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <RightSlideshowArrow />,
      prevArrow: <LeftSlideshowArrow />
    }
    let margaritas = this.props.drinks.margaritas.map((drink, index) => {
      return (
        <div key={index}  onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img alt="Margaritas" className="slideShowImg" src={drink.strDrinkThumb} />
        </div>
      )
    });
    let mojitos = this.props.drinks.mojitos.map((drink, index) => {
      return (
        <div key={index} onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img alt="Mojitos" className="slideShowImg" src={drink.strDrinkThumb} />
        </div>
      )
    });
    let daiquiris = this.props.drinks.daiquiris.map((drink, index) => {
      return (
        <div key={index} onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img alt="Daiquiris" className="slideShowImg" src={drink.strDrinkThumb} />
        </div>
      )
    });
    let martinis = this.props.drinks.martinis.map((drink, index) => {
      return (
        <div key={index} onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img alt="Martinis" className="slideShowImg" src={drink.strDrinkThumb} />
        </div>
      )
    });

    if(this.state.clickedDrink !== ''){
      return(
        <DrinkRecipeDetails clickedDrink={this.state.clickedDrink} onClick={(clickedDrink) => this.closeClassicsDrinkRecipeDetails(clickedDrink)}/>
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
          <Slider {...settings}>
            {martinis}
          </Slider>
        </div>
      )
    }
  }
} 
