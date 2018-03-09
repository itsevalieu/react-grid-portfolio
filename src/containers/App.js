import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import hamburger from './hamburger.png';
import Project from '../children/Portfolio/Projects.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { path: '/',
          exact: true,
          name: 'HOME'
        },
        { path: '/about',
          exact: true,
          name: 'ABOUT'
        },
        { path: '/portfolio',
          name: 'PORTFOLIO'
        },
        { path: '/contact',
          name: 'CONTACT'
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
     
        <div className="App">
          <header>
            <h1>EVA L. LIEU</h1>
            <button className="hamburger-icon"><img src={hamburger} alt="hamburger icon"/></button>
          </header>
          <aside>
            {this.state.routes.map((route, index) =>(
              <Link key={index} to={route.path} className="aside-button">{route.name}</Link>
            ))}
          </aside>
          <main id="children">
            {/*{this.state.routes.map((route, index) => (
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
            ))}*/}
            {this.props.children}
          </main>
          <footer><p>© 2018 EVA LIEU</p></footer>
        </div>
    );
  }
}

export default App;

// Seriously need to fix the states and props. What is the top down components to render?
// App (Aside, Main)
  // Portfolio -> Projects

// From App, click on project link in sidebar, renders Route to specific Project
// From Portfolio, click on project link, sends info back to App, which renders Route to specific Project






