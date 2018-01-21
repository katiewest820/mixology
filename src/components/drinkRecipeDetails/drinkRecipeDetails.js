import React from 'react';
import './drinkRecipeDetails.css';

export default class DrinkRecipeDetails extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ingredientArr: [],
      quantityArr: []
    }
    console.log(this)
  }

   componentDidMount(){
    let ingredientsArr = [];
    let instructionsArr = [];
     for(let i = 1; i < 16; i++){
      let str = `strIngredient${i}`
       if(this.props.clickedDrink[str] !== null && this.props.clickedDrink[str].length > 2 ){
        ingredientsArr.push(this.props.clickedDrink[str])
         console.log(ingredientsArr)
       }
     }
     for(let i = 1; i < 16; i++){
      let str = `strMeasure${i}`
       if(this.props.clickedDrink[str] !== null && this.props.clickedDrink[str].length > 2 ){
        instructionsArr.push(this.props.clickedDrink[str])
         console.log(instructionsArr)
       }
     }
    this.setState({ingredientArr: ingredientsArr}) 
    this.setState({quantityArr: instructionsArr})
   }

  render(){
    let ingredientList = this.state.ingredientArr.map((ing, index) => {
      return <p key={index}>{ing}</p>
    })
    let quantityList = this.state.quantityArr.map((qua, index) => {
      return <p key={index}>{qua}</p>
    })
    return(
      <div>
        <i className="fa fa-times closeDrinkRecipeDetails" aria-hidden="true" onClick={this.props.onClick}></i>
        <h1 className="drinkName">{this.props.clickedDrink.strDrink}</h1>
        <div className="drinkIngredients">
          <h2>Ingredients:</h2>
          <div className="ingredientList">{ingredientList}</div>
          <div className="quantityList">{quantityList}</div>
        </div>
        <div className="drinkInstructions">{this.props.clickedDrink.strInstructions}</div>
      </div>
    )
  }
}