import React from 'react';
import './dashboard.css';
import axios from 'axios';

import SearchInput from '../searchInput/searchInput';
import Header from '../header/header';
import Help from '../help/help';
import Classics from '../classics/classics';
import SearchResults from '../searchResults/searchResults';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      helpDivVisible: false,
      classicsVisible: false,
      submittedSearchTerm: '',
      searchInput: '',
      drinks: []
    }
    
    console.log(this.state)
  }

  grabSubmittedInput(submittedSearchTerm){
    this.setState({submittedSearchTerm})
    
    let self = this;
    axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${submittedSearchTerm}`)
      .then(function (response) {
      console.log(response);
      self.setState({drinks: response.data.drinks})
      
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  grabEnteredInput(searchInput){
    this.setState({searchInput})
  }

  openHelp(helpVisible){
    this.setState({helpDivVisible: true});
  };

  closeHelp(helpVisible){
    this.setState({helpDivVisible: false});
  };

  openClassics(classicsVisible){
    this.setState({classicsVisible: true});
  };

   closeClassics(classicsVisible){
    this.setState({classicsVisible: false});
  };

  render(){
    console.log('I am rendering')
    

    if(this.state.helpDivVisible === true){
      return (
        <main className="mainDiv">
          <Help value={this.state.helpDivVisible} onClick={() => this.closeHelp(false)}/>
        </main>
      )
    }
    if(this.state.classicsVisible === true){
      return (
        <main className="mainDiv">
          <Classics value={this.state.classicsVisible} onClick={() => this.closeClassics(false)}/>
        </main>
      )
    }else{
        return(
          <main className="mainDiv">
          <Header value={this.state} onClickHelp={() => this.openHelp(true)} onClickClassics={() => this.openClassics(true)}/>
            <div className="searchInputDiv">
              <SearchInput value={this.state} onClick={value => this.grabSubmittedInput(value)} onChange={value => this.grabEnteredInput(value)}/>
              <SearchResults drinks={this.state.drinks} />
            </div>
          </main>
        )
    }
  }
}