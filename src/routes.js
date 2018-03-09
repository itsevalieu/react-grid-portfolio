import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './containers/App.js';
import Home from './children/Home/Home.jsx';
import About from './children/About/About.jsx';
import Portfolio from './children/Portfolio/Portfolio.jsx';
import Contact from './children/Contact/Contact.jsx';
import Project from './children/Portfolio/Projects.jsx';

module.exports = {
	<Router>
		<Route path="/" component={ App }>
			<Route path="/about" component={ About }/>
			<Route path="/portfolio" component={ Portfolio }/>		
			<Route path="/contact" component={ Contact }/>	
		</Route>
	</Router>
}

