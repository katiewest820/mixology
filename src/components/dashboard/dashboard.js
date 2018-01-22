import React from 'react';
import './dashboard.css';
import axios from 'axios';

import SearchInput from '../searchInput/searchInput';
import Header from '../header/header';
//import Help from '../help/help';
//import Classics from '../classics/classics';
import SearchResults from '../searchResults/searchResults';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      //helpDivVisible: false,
      //classicsVisible: false,
      submittedSearchTerm: '',
      searchInput: '',
      drinks: [],
      errorMsg: false,
      margaritas: [],
      mojitos: [],
      martinis: [],
      daiquiri: [],
      manhattan: []

    }
    
    console.log(this.state)
  }

  grabSubmittedInput(submittedSearchTerm){
    this.setState({submittedSearchTerm})
    let self = this;
    axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${submittedSearchTerm}`)
      .then(function (ingredientResponse) {
        console.log(ingredientResponse);
        if(!ingredientResponse.data.drinks){
          self.grabOtherSubmittedInput(submittedSearchTerm)
          return
        }
        self.setState({drinks: ingredientResponse.data.drinks})
        self.setState({searchInput: ''})
      })
    .catch(function (error) {
      console.log(error);
    });
  }

grabOtherSubmittedInput(submittedSearchTerm){
  let self = this;
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${submittedSearchTerm}`)
    .then(function (drinkNameResponse) {
      console.log(drinkNameResponse);
      if(!drinkNameResponse.data.drinks){
        self.setState({errorMsg: true})
        console.log(self.state.errorMsg)
        setTimeout(() => {self.fadeOutErrorMsg()}, 3000)
        return
      }
      self.setState({drinks: drinkNameResponse.data.drinks})
      self.setState({searchInput: ''})
    })
  .catch(function (error) {
    console.log(error);
  });
}

  fadeOutErrorMsg(){
    this.setState({errorMsg:false})
  }

  grabEnteredInput(searchInput){
    this.setState({searchInput})
  }

  // openHelp(helpVisible){
  //   this.setState({helpDivVisible: true});
  // };

  // closeHelp(helpVisible){
  //   this.setState({helpDivVisible: false});
  // };

  // openClassics(classicsVisible){
  //   this.setState({classicsVisible: true});
  // };

  //  closeClassics(classicsVisible){
  //   this.setState({classicsVisible: false});
  // };

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
      self.setState({daiquiri: response.data.drinks})
      console.log(self.state.daiquiri)
      })
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan')
      .then(function (response) {
      self.setState({manhattan: response.data.drinks})
      console.log(self.state.manhattan)
      })
      .catch(function (error) {
      console.log(error);
      });
    }

  render(){
    console.log('I am rendering')
    let errorMsg = <div className="errorMsgDiv"><h1>No results found. Please try again</h1></div>
    
    if(this.state.errorMsg === true){
      return(
        <main className="mainDiv">
          {/*<Header value={this.state} onClickHelp={() => this.openHelp(true)} onClickClassics={() => this.openClassics(true)}/>*/}
          <SearchInput value={this.state} onClick={value => this.grabSubmittedInput(value)} onChange={value => this.grabEnteredInput(value)}/>
          <div className="drinkResultsGridContainer">
            {errorMsg}
          </div>  
        </main>
      )
    }
    // else if(this.state.helpDivVisible === true){
    //   return (
    //     <main className="mainDiv">
    //       <Help value={this.state.helpDivVisible} onClick={() => this.closeHelp(false)}/>
    //     </main>
    //   )
    // }
    // else if(this.state.classicsVisible === true){
    //   return (
    //     <main className="mainDiv">
    //       <Classics value={this.state} onClick={() => this.closeClassics(false)} />
    //     </main>
    //   )
    //}
    else{
        return(
          <main className="mainDiv">
            {/*<Header value={this.state} onClickHelp={() => this.openHelp(true)} onClickClassics={() => this.openClassics(true)}/>*/}
            <SearchInput value={this.state} onClick={value => this.grabSubmittedInput(value)} onChange={value => this.grabEnteredInput(value)}/>
            <SearchResults drinks={this.state.drinks} />
          </main>
        )
    }
  }
}