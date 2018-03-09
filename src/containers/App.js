import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import hamburger from './hamburger.png';

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
      ]
    };
  }
  render() {
    return (
      <div className='App'>
        <header>
          <h1>EVA L. LIEU</h1>
          <button className='hamburger-icon'><img src={hamburger} alt='hamburger icon'/></button>
        </header>
        <aside>
          {this.state.routes.map((route, index) =>(
            <Link key={index} to={route.path} className='aside-button'>{route.name}</Link>
          ))}
        </aside>
        <main id='children'>
          {this.props.children}
        </main>
        <footer><p>© 2018 EVA LIEU</p></footer>
      </div>
    );
  }
}

export default App;

/*
{this.state.projects.map((project, index) =>(
    <Route
      key={index}
      path={project.path}
      exact={project.exact}
      component={project.main}
    />
))}
*/





