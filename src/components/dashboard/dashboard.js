import React from 'react';
import './dashboard.css';
import axios from 'axios';
import SearchInput from '../searchInput/searchInput';
import Header from '../header/header';
import SearchResults from '../searchResults/searchResults';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      submittedSearchTerm: '',
      searchInput: '',
      drinks: [],
      errorMsg: false,
    }
  }

  grabSubmittedInput(submittedSearchTerm){
    this.setState({submittedSearchTerm})
    let self = this;
    if(!submittedSearchTerm){
      self.setState({errorMsg: true})
        setTimeout(() => {self.fadeOutErrorMsg()}, 3000)
        return
    }
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${submittedSearchTerm}`)
    .then(function (ingredientResponse) {
      if(!ingredientResponse.data.drinks){
        self.grabOtherSubmittedInput(submittedSearchTerm);
        return;
      }
      self.setState({drinks: ingredientResponse.data.drinks});
      self.setState({searchInput: ''});
    })
    .catch(function (error) {
      console.log('Something bad happened')
    });
  }

  grabOtherSubmittedInput(submittedSearchTerm){
    let self = this;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${submittedSearchTerm}`)
    .then(function (drinkNameResponse) {
      if(!drinkNameResponse.data.drinks){
        self.setState({errorMsg: true});
        setTimeout(() => {self.fadeOutErrorMsg()}, 3000);
        return;
      }
      self.setState({drinks: drinkNameResponse.data.drinks});
      self.setState({searchInput: ''});
    })
    .catch(function (error) {
      console.log('Something bad happened');
    });
  }

  fadeOutErrorMsg(){
    this.setState({errorMsg:false});
  }

  grabEnteredInput(searchInput){
    this.setState({searchInput});
  }

  render(){
    let errorMsg = <h1 className="errorMsg">No results found. Please try again</h1>;
    if(this.state.errorMsg === true){
      return(
        <main className="mainDiv">
          <Header />
          <SearchInput value={this.state} onClick={value => this.grabSubmittedInput(value)} onChange={value => this.grabEnteredInput(value)}/>
          <div className="drinkResultsGridContainer">
            {errorMsg}
          </div>  
        </main>
      )
    }
    else{
      return(
        <main className="mainDiv">
          <Header />
          <SearchInput value={this.state} onClick={value => this.grabSubmittedInput(value)} onChange={value => this.grabEnteredInput(value)}/>
          <SearchResults drinks={this.state.drinks} />
        </main>
      )
    }
  }
}