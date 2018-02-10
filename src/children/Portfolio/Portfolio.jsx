import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio">
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