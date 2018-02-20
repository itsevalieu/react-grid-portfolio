import React, { Component } from "react";
import "./Portfolio.css";
// import Project from "./Projects.jsx";
import cptimg1 from "../../containers/pana-vasquez-441189.jpg";
import cptimg2 from "../../containers/farrel-nobel-103393.jpg";
import cptimg3 from "../../containers/patrick-tomasso-71909.jpg";
import cptimg4 from "../../containers/shanna-camilleri-190745.jpg";


class Portfolio extends Component {
  constructor(props) {
    super();
    // this.onClick = this.onClick.bind(this);
  }
  render() {
    return(
      <div className="portfolio">
        <div className="page-heading">
          <h1>My Portfolio</h1>
        </div>
        <div className="project-list">
          <button>
            <div className="button-description">
              <p>Twitter Sentiment Analysis Bot</p>
              <p>Twitter bot live streaming and sentiment analysis.</p>
            </div>
            <img src={cptimg1} alt="#"/>
          </button>
          <button>
            <div className="button-description">
              <p>Drink Generator</p>
              <p>Randomly picks a drink off a menu for you.</p>
            </div>
            <img src={cptimg2} alt="#"/>
          </button>
          <button>
            <div className="button-description">
              <p>NYT API</p>
              <p>Search New York Times for articles.</p>
            </div>
            <img src={cptimg3} alt="#"/>
          </button>
          <button>
            <div className="button-description">
              <p>Teafographic</p>
              <p>Website for tea fanatics.</p>
            </div>
            <img src={cptimg4} alt="#"/>
          </button>
        </div>
      </div>
    );
  }
}

export default Portfolio;
// App -> Porfolio Gallery -> Individual Project Page
// Projects Array in App, parsed to Portfolio
// Clicking on Portfolio Gallery will render individual Project Pages
// parent is app