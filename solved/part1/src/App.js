import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './FakeNewsList';
import FakeNewsList from "./FakeNewsList";

class App extends Component {
  render() {
      return (
          <div className="App">
              <FakeNewsList/>
          </div>
      );
  }
}

export default App;
