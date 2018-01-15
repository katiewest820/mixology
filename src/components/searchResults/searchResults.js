import React from 'react';
import './searchResults.css';
import axios from 'axios';

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
  
showDrinkDetails(drinkDetailsVisible, event){
  console.log('yeahhhhh')
  this.setState({drinkDetailsVisible: true})
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
    console.log('rendering search results')
    let drinks = this.props.drinks.map((drink, index) => {
       return (
        <div key={index} className={drink.idDrink} onClick={this.grabId.bind(this, drink.idDrink)}>
          <div >{drink.strDrink}</div>
          <img src={drink.strDrinkThumb}/>
        </div>      
        )
    })
    if(this.state.drinkDetailsVisible === true){
      return (
        <div className="shadowBox">details details details</div>
        )
    }else{
      return(
        <div className="drinkResultsGrid" onClick={(value) => this.showDrinkDetails(value)} value={this.state.drinkDetailsVisible}>{drinks}</div>
      )
    }
  }
}
