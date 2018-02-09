import React, { Component } from 'react';
import './App.css';
import hamburger from './hamburger.png';
import About from '../children/About/About.jsx';
import Portfolio from '../children/Portfolio/Portfolio.jsx';
import Contact from '../children/Contact/Contact.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>EL PORTFOLIO</h1>
          <button className="hamburger-icon"><img src={hamburger} alt="hamburger icon"/></button>
        </header>
        <aside>
          <button>ABOUT</button>
          <button>PORTFOLIO</button>
          <button>CONTACT</button>
        </aside>
        <main id="children">
          {render}
        </main>
        <footer><p>© 2018 EVA LIEU</p></footer>
      </div>
    );
  }
}

export default App;
