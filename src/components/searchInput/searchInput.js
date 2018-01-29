import React from 'react';
import './searchInput.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SearchInput extends React.Component{
  constructor(props){
    super(props)
    this.state={
      inputVisible: false
    }
  }

  toggleInputVisible(inputVisible){
    this.setState({inputVisible: !this.state.inputVisible});       
  }

  onClick(targetValue){
    this.props.onClick(targetValue);
    this.toggleInputVisible(this.state.inputVisible);   
  }

  render(){
    let myInput;
    let myButton;
    if(this.state.inputVisible){
      myInput = <input className="inputIngredient" value={this.props.value.searchInput} onChange={event => this.props.onChange(event.target.value)} type="text" placeholder="Drink or Ingredient"/>
      myButton = <button className="inputIngredientBtn" value={this.props.value.searchInput} onClick={event => this.onClick(event.target.value)} >Submit</button>
    }
    return(
      <div className="inputDiv">
        <i className="fa fa-search fa-3x searchIcon" aria-hidden="true" value={this.state.inputVisible} onClick={value => this.toggleInputVisible(value)}></i>
        <ReactCSSTransitionGroup transitionName="switch" 
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {myInput}
          {myButton}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}