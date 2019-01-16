import React, { Component } from 'react';
import ProjectCollection from './components/ProjectCollection.js';
import Sidebar from './components/Sidebar.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super();
  }

  render() {
    return (
      <main className="App">
        <Sidebar></Sidebar>
        <ProjectCollection width="300em"></ProjectCollection>
      </main>
    );
  }
}

export default App;
