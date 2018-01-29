import React from 'react';
import {Switch, Route} from "react-router-dom";
import Dashboard from '../dashboard/dashboard';
import Help from '../help/help';
import Classics from '../classics/classics';
export default class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/help" component={Help} />
          <Route path="/classics" component={Classics} />
        </Switch>
      </main>
    )
  }
}