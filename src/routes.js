import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './containers/App.js';
import About from './children/About/About.jsx';
import Portfolio from './children/Portfolio/Portfolio.jsx';
import Contact from './children/Contact/Contact.jsx';

const routes = (
	<Router>
		<App>
			<Route exact path='/about' component={ About }/>
			<Route exact path='/portfolio' component={ Portfolio }/>		
			<Route exact path='/contact' component={ Contact }/>			
		</App>
	</Router>
);

export default routes;
