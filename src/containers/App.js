import React, { Component } from 'react';
import './App.css';
import hamburger from './hamburger.png'
class App extends Component {
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
        <main>
          MAIN
        </main>
        <footer><p>© 2018 EVA LIEU</p></footer>
      </div>
    );
  }
}

export default App;
