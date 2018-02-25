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

// const gallery = () => (
//   <div>
//     {projects.map(i => (
//       <Link
//         key={i.id}
//         to={{
//           pathname: `/project/${i.id}`
//         }}
//       >
//       </Link>
//     ))}
//   </div>
// );
// const listItems = this.state.projects.map((project) =>
//     <Link 
//       to={this.state.project.path}>{this.state.project.name}
//     </Link>
// );

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
          name: 'Twitter Bot',
          main: () => <Project/>
        },
        { path: '/hypertext',
          name: 'Hypertext',
          main: () => <Project/>
        },
        { path: '/outfitted',
          name: 'Outfitted',
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





