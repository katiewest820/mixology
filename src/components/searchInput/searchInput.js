import React from 'react';
import './searchInput.css';

export default class SearchInput extends React.Component{
 


  render(){
    console.log(this.props)
    return(
      <div>
        <input value={this.props.value.searchInput} onChange={event => this.props.onChange(event.target.value)} type="text" placeholder="Ingrendient"/>
        <button value={this.props.value.searchInput} onClick={event => this.props.onClick(event.target.value)}>Submit</button>
      </div>
      )
  }
}