import React, { Component } from "react";
import "./Projects.css";

class Project extends Component {
  render() {
    return(
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
    );
  }
}

export default Project;