import React, { Component } from 'react';
import ProjectCollection from './components/ProjectCollection.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super();
  }

  render() {
    return (
      <main className="App">
        <h1>Alexandria Brown</h1>
        <sub>Hello! This is an in-progress snapshot of my projects. Some have been deployed, the rest link to GitHub repos. Feel free to browse more projects on my <a href="https://github.com/brownav" target="_blank" rel="noopener noreferrer">Github</a>.</sub>
        <ProjectCollection width="300em"></ProjectCollection>
      </main>
    );
  }
}

export default App;
