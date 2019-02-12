import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import data from './dummy_data';
import Shelf from './components/Shelf.js';

/* Quick test of a react function to make sure the data is importing properly */
const ListTest = data.shelf1.map((row) =>
<li>{row.row}</li>
);

const Shelf1 = data.shelf1;
const Shelf2 = data.shelf2;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="title">
            <code >The Return of Sneakatory</code>
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

      <body className="App-body">
          {/* Use of the above test function <ul>TEST: {ListTest}</ul>     */}
          
          {/* Passing to the first component */}
          <Shelf shelf1 = {Shelf1} />

      </body>
      </div>
    );
  }
}

export default App;
