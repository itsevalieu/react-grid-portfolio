import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
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