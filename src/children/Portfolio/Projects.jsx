import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return(
      <div className="project">
        <div><p>Project Title</p></div>
        <div><p>Description</p>
          What
          Why
          How
          So What?
        </div>
        <div><p>Languages and Stack</p></div>
        <div><iframe src="#" alt="#"/></div>
      </div>
    );
  }
}

export default Project;