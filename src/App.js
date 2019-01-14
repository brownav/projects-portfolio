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
      <main className="App">
        <h1>Alexandria Brown</h1>
        <ProjectCollection></ProjectCollection>
      </main>
    );
  }
}

export default App;
