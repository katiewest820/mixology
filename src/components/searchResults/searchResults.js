import React from 'react';
import './searchResults.css';
import axios from 'axios';
import DrinkRecipeDetails from '../drinkRecipeDetails/drinkRecipeDetails';
import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export default class SearchResults extends React.Component{
  constructor(props){
    super(props);
    this.state={
      clickedDrink: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.drinks.length > 0;
  }

  grabId(myId){
    let self = this;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myId}`)
    .then(function (response) {
      self.setState({clickedDrink: response.data.drinks[0]});
    });
  }

closeDrinkRecipeDetails(clickedDrink){
  this.setState({clickedDrink: ''});
} 

 onImageClick(item){
  return (
    <div className='image-gallery-image'>
      <img
        alt={item.description}
        src={item.original}
      />
        <a className='image-gallery-description hoverStyle' onClick={() => this.grabId(item.link)}>
          {item.description}
        </a>   
    </div>
  )
}

  render(){
    let images = [];
    if(this.props.drinks.length > 0){
      for(let i = 0; i < this.props.drinks.length; i++){
        let imageURL = `${this.props.drinks[i].strDrinkThumb}`;
        images.push({
          original: imageURL,
          thumbnail: imageURL,
          description: this.props.drinks[i].strDrink,
          link: this.props.drinks[i].idDrink
        })
      }
    }

    if(this.state.clickedDrink !== ''){
      return (
        <div className="drinkResultsGridContainer">
          <DrinkRecipeDetails clickedDrink={this.state.clickedDrink} onClick={(clickedDrink) => this.closeDrinkRecipeDetails(clickedDrink)}/>
        </div>  
      )

    }else if(this.props.drinks.length < 1){
      return(
        <div className="drinkResultsGridContainer">
          <h1 className="mixology">Mixology</h1>
          <p className="tagLine">What are you Drinking Tonight?</p>
        </div>  
      )
    }else{
      return(
        <div className="drinkResultsGridContainer">
          <ImageGallery items={images} renderItem={this.onImageClick.bind(this)}/>
        </div>
      )
    }
  }
}
