import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FullPortfolio from './FullPortfolio.jsx';
import Project from './Projects.jsx';

class Portfolio extends Component {
  render() {
    return(
      <Switch>    
        <Route exact path='/portfolio' component={ FullPortfolio }/>
        <Route exact path='/portfolio/:project' component={ Project }/>
      </Switch>
    );
  }
}

export default Portfolio;