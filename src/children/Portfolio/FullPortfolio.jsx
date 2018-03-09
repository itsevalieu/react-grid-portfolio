import React, { Component } from 'react';
import {
  Link,
  Switch
} from 'react-router-dom';
import './Portfolio.css';

import Project from './Projects.jsx';
import cptimg1 from '../../containers/pana-vasquez-441189.jpg';
import cptimg2 from '../../containers/farrel-nobel-103393.jpg';
import cptimg3 from '../../containers/patrick-tomasso-71909.jpg';
import cptimg4 from '../../containers/shanna-camilleri-190745.jpg';

class FullPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { path: '/portfolio/twitterbot',
          exact: true, 
          className: 'button-description',
          name: 'Twitter Bot',
          description: 'Twitter bot live streaming and sentiment analysis.',
          image: cptimg1,
          alt: '#',
          main: () => <Project/>
        },
        { path: '/portfolio/drinkgenerator',
          className: 'button-description',
          name: 'Random Drink Generator',
          description: 'Randomly picks a drink off a menu for you.',
          image: cptimg2,
          alt: '#',
          main: () => <Project/>
        },
        { path: '/portfolio/nytreact',
          className: 'button-description',
          name: 'NYT API',
          description: 'Search New York Times for articles.',
          image: cptimg3,
          alt: '#',
          main: () => <Project/>
        },
        { path: '/portfolio/teafographic',
          className: 'button-description',
          name: 'Teafographic',
          description: 'Website for tea fanatics.',
          image: cptimg4,
          alt: '#',
          main: () => <Project/>
        }
      ]
    };
  }
  render() {
    return(
      <Switch>
        <div className='portfolio'>
          <div className='page-heading'>
            <h1>My Portfolio</h1>
          </div>
          <div className='project-list'>
            {this.state.projects.map((project, index) => (
              <Link key={project.index} to={project.path}>
                <button>
                  <div className={project.className}>
                    <p>{project.name}</p>
                    <p>{project.description}</p>
                  </div>
                  <img src={project.image} alt={project.alt}/>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </Switch>
    );
  }
}

export default FullPortfolio;