import React, { Component } from 'react';
import './App.css';
import hamburger from './hamburger.png';
import About from '../children/About/About.jsx';
import Portfolio from '../children/Portfolio/Portfolio.jsx';
import Contact from '../children/Contact/Contact.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.pushChildren = this.pushChildren.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    let render = null;


    return (
      <div className="App">
        <header>
          <h1>EL PORTFOLIO</h1>
          <button className="hamburger-icon"><img src={hamburger} alt="hamburger icon"/></button>
        </header>
        <aside>
          <button value="about" onClick={this.onClick}>ABOUT</button>
          <button value="portfolio" onClick={this.onClick}>PORTFOLIO</button>
          <button value="contact" onClick={this.onClick}>CONTACT</button>
        </aside>
        <main id="children">
          {render}
        </main>
        <footer><p>© 2018 EVA LIEU</p></footer>
      </div>
    );
  }
  onClick(e) {
    var childValue = e.target.value;
    console.log(childValue);
    var insertHere = document.getElementById("children");
    
    var something = this.pushChildren(childValue);
    insertHere.push('<About/>');
    console.log(something);
  }
  pushChildren(value) {
    if(value === "about") {
      return '<About/>';
    } else if (value === "portfolio") {
      return '<Portfolio/>';
    } else {
      return '<Contact/>';
    }
  }
}

export default App;
