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

const routes = [
  { path: '/',
    exact: true,
    main: () => <Home/>
  },
  { path: '/about',
    exact: true,
    main: () => <About/>
  },
  { path: '/portfolio',
    main: () => <Portfolio/>
  },
  { path: '/contact',
    main: () => <Contact/>
  }
];

const projects = [
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
];
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
const listItems = projects.map((project) =>
    <Link 
      to={project.path}>{project.name}
    </Link>
);

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      buttonClicks: false,
      projects: [
        { id: 1, 
          name: "Twitter Bot",
          description: "Twitterbot tweets"
        },
        { id: 2, 
          name: "Drink Generator",
          description: "Twitterbot tweets"
        },
        { id: 3, 
          name: "NYT API",
          description: "Twitterbot tweets"
        },
        { id: 4, 
          name: "Teafographic",
          description: "Twitterbot tweets"
        }
      ]
    }
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
    if(this.buttonClicks === true) {
      console.log(this.buttonClicks);
      return (listItems);
    } else {
      console.log("no");
      console.log(this.buttonClicks);
    }
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
              <Link to='/' className="aside-button">HOME</Link> 
              <Link to='/about' className="aside-button">ABOUT ME</Link>
              <Link to='/portfolio' onClick={this.listProjects} className="aside-button">PORTFOLIO</Link>
              {this.portfolioClick}
              <Link to='/contact' className="aside-button">CONTACT</Link>
          </aside>
          <main id="children">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            {projects.map((project, index) =>(
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





