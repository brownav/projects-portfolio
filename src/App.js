import React, { Component } from 'react';
import ProjectCollection from './components/ProjectCollection.js';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <ProjectCollection></ProjectCollection>
      </div>
    );
  }
}

export default App;
