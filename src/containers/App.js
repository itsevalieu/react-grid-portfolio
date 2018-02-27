import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import hamburger from './hamburger.png';
import Home from '../children/Home/Home.jsx';
import About from '../children/About/About.jsx';
import Portfolio from '../children/Portfolio/Portfolio.jsx';
import Contact from '../children/Contact/Contact.jsx';
import Project from '../children/Portfolio/Projects.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { path: '/',
          exact: true,
          name: 'HOME',
          className: 'aside-button',
          main: () => <Home/>
        },
        { path: '/about',
          exact: true,
          name: 'ABOUT',
          className: 'aside-button',
          main: () => <About/>
        },
        { path: '/portfolio',
          name: 'PORTFOLIO',
          className: 'aside-button',
          main: () => <Portfolio/>
        },
        { path: '/contact',
          name: 'CONTACT',
          className: 'aside-button',
          main: () => <Contact/>
        }
      ],
      projects: [
        { path: '/twitterbot',
          exact: true, 
          className: 'button-description',
          name: 'Twitter Bot',
          description: "Twitter bot live streaming and sentiment analysis.",
          main: () => <Project/>
        },
        { path: '/drinkgenerator',
          className: 'button-description',
          name: 'Random Drink Generator',
          description: "Randomly picks a drink off a menu for you.",
          main: () => <Project/>
        },
        { path: '/nytreact',
          className: 'button-description',
          name: 'NYT API',
          description: "Search New York Times for articles.",
          main: () => <Project/>
        },
        { path: '/teafographic',
          className: 'button-description',
          name: 'Teafographic',
          description: "Website for tea fanatics.",
          main: () => <Project/>
        }
      ],
      buttonClicks: false,
    };
    this.portfolioClick = this.portfolioClick.bind(this);
    this.listProjects = this.listProjects.bind(this);
  }
  listProjects() {
    console.log("portfolio clicked");
    this.setState({
      buttonClicks: true
    });
  }
  portfolioClick(event) {
    event.preventDefault();
    console.log(event);
    // if(this.buttonClicks === true) {
    //   console.log(this.buttonClicks);
    //   return (listItems);
    // } else {
    //   console.log("no");
    //   console.log(this.buttonClicks);
    // }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>EVA L. LIEU</h1>
            <button className="hamburger-icon"><img src={hamburger} alt="hamburger icon"/></button>
          </header>
          <aside>
            {this.state.routes.map((route, index) =>(
              <Link key={index} to={route.path} className={route.className}>{route.name}</Link>
            ))}
          </aside>
          <main id="children">
            {this.state.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            {this.state.projects.map((project, index) =>(
                <Route
                  key={index}
                  path={project.path}
                  exact={project.exact}
                  component={project.main}
                />
            ))}
          </main>
          <footer><p>© 2018 EVA LIEU</p></footer>
        </div>
      </Router>
    );
  }
}

export default App;

// Seriously need to fix the states and props. What is the top down components to render?
// App (Aside, Main)
  // Portfolio -> Projects

// From App, click on project link in sidebar, renders Route to specific Project
// From Portfolio, click on project link, sends info back to App, which renders Route to specific Project






