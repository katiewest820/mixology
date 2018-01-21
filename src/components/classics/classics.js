import React from 'react';
import './classics.css';
import axios from 'axios';

export default class Classics extends React.Component{
  constructor(props){
    super(props)
    this.state={
      margaritas: [],
      mojitos: [],
      martinis: []
    }
  }

    componentDidMount(){
    let self = this;
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(function (response) {
      self.setState({margaritas: response.data.drinks})
      console.log(self.state.margaritas)
      })
    .catch(function (error) {
      console.log(error);
    });
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
      .then(function (response) {
      self.setState({mojitos: response.data.drinks})
      console.log(self.state.mojitos)
      })
    .catch(function (error) {
      console.log(error);
    });
     axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
      .then(function (response) {
      self.setState({martinis: response.data.drinks})
      console.log(self.state.martinis)
      })
    .catch(function (error) {
      console.log(error);
    });
  }



  render(){
    return(
      <div className="classicsInfoDiv">
        <div>classics info</div>
        <button onClick={this.props.onClick}>Back to Search</button>
      </div>
    )
  }
}