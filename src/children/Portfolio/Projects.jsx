import React, { Component } from "react";
import "./Projects.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return(
      <Route>
      <div className="project">
        <div className="page-description">
          <h1>Project Title</h1>
          <p>Description</p>
        </div>
        <div className="project-description">
          <h2>What</h2>
          <h2>Why</h2>
          <h2>How</h2>
          <h2>So What?</h2>
        </div>
        <div><p>Languages and Stack</p></div>
        <a href="/demo">Demo</a>
      </div>
      </Route>
    );
  }
}

export default Project;