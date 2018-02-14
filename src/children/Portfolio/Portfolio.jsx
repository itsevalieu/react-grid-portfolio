import React, { Component } from "react";
import "./Portfolio.css";
import Project from "./Projects.jsx";

class Portfolio extends Component {
  constructor(props) {
    super();
    // this.onClick = this.onClick.bind(this);
  }
  render() {
    return(
      <div className="portfolio">
        <button>
          <div>Title</div>
          <div>Description</div>
          <div><img src="#" alt="#"/></div>
        </button>
        <p>Portfolio</p>
        <ul>
          <li>Twitter Sentiment Bot</li>
          <li>Drink Generator</li>
          <li>NYT API</li>
          <li>teafographic</li>
        </ul>
      </div>
    );
  }
}

export default Portfolio;
// App -> Porfolio Gallery -> Individual Project Page
// Projects Array in App, parsed to Portfolio
// Clicking on Portfolio Gallery will render individual Project Pages
// parent is app