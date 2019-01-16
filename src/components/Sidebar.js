import React, { Component } from 'react';
import './Sidebar.css';

const image = require.context('../../public/images', true);

class Sidebar extends Component {

  render() {
    let profile = (image('./profile.png'));
    return (
      <section>
        <h1>Alexandria Brown</h1>
        <h3>Full-stack Software Developer</h3>
        <img className="profile" width="130em" height="150em" src={profile} alt="profile"></img><br></br>
        <sub>Hello! This is an in-progress snapshot of my projects. Some are deployed, others link to GitHub repos. Feel free to browse more projects on my <a href="https://github.com/brownav" target="_blank" rel="noopener noreferrer">Github</a>.</sub>
      </section>
    );
  }
}

export default Sidebar;