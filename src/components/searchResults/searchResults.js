import React from 'react';
import './searchResults.css';
import axios from 'axios';
import DrinkRecipeDetails from '../drinkRecipeDetails/drinkRecipeDetails';

export default class SearchResults extends React.Component{
  constructor(props){
    super(props)
    this.state={
      drinkDetailsVisible: false,
      clickedDrink: ''
    }
  }

shouldComponentUpdate(nextProps, nextState){
  return nextProps.drinks.length > 0;
}
  
// showDrinkDetails(drinkDetailsVisible, event){
//   console.log('yeahhhhh')
//   //this.setState({drinkDetailsVisible: true})
//}

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

closeDrinkRecipeDetails(clickedDrink){
  this.setState({clickedDrink: ''})
} 

  render(){
    console.log('rendering search results')
    let drinks = this.props.drinks.map((drink, index) => {
       return (
        <div key={index} className={drink.idDrink} onClick={this.grabId.bind(this, drink.idDrink)}>
          <h2 className="nameOfDrink">{drink.strDrink}</h2>
          <img src={drink.strDrinkThumb}/>
        </div>      
        )
    })
    if(this.state.clickedDrink !== ''){
      return (
        <div className="drinkResultsGridContainer">
          <div className="shadowBox">
            <DrinkRecipeDetails clickedDrink={this.state.clickedDrink} onClick={(clickedDrink) => this.closeDrinkRecipeDetails(clickedDrink)}/>
          </div>
        </div>  
        )
    }else{
      return(
        <div className="drinkResultsGridContainer">
          <div className="drinkResultsGrid" > {/*onClick={(value) => this.showDrinkDetails(value)} value={this.state.drinkDetailsVisible}>*/}
            {drinks}
          </div>
        </div>  
      )
    }
  }
}
