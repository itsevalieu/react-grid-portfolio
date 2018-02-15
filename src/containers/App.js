import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './App.css';
import hamburger from './hamburger.png';
import About from '../children/About/About.jsx';
import Portfolio from '../children/Portfolio/Portfolio.jsx';
import Contact from '../children/Contact/Contact.jsx';

const routes = [
  { path: '/',
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
// const listItems = projects.map((project) =>
//   <button>
//     <Link 
//       to='/'>{project}
//     </Link>
//   </button>
// );

class App extends Component {
  constructor(props) {
    super();
    this.state = {
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
  }
  Project(props) {
    return <button>{props.projects[0]}</button>
  },
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>EL PORTFOLIO</h1>
            <button className="hamburger-icon"><img src={hamburger} alt="hamburger icon"/></button>
          </header>
          <aside>
              <button><Link to='/'>ABOUT</Link></button>
              <button><Link to='/portfolio'>PORTFOLIO</Link></button>
              {/*<ul>{listItems}</ul>*/}
              <button><Link to='/contact'>CONTACT</Link></button>
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
            <Project {state.projects}/>
          </main>
          <footer><p>© 2018 EVA LIEU</p></footer>
        </div>
      </Router>
    );
  }
}

export default App;
