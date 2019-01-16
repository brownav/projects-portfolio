import React, { Component } from 'react';
import './Sidebar.css';

const image = require.context('../../public/images', true);

class Sidebar extends Component {

  render() {
    let profile = (image('./profile.png'));
    return (
      <section>
        <h1>Alexandria Brown</h1>
        <h3>Full-stack software developer</h3>
        <img width="100em" height="100em" src={profile} alt="profile"></img><br></br>
        <sub>Hello! This is an in-progress snapshot of my projects. Some have been deployed, the rest link to GitHub repos. Feel free to browse more projects on my <a href="https://github.com/brownav" target="_blank" rel="noopener noreferrer">Github</a>.</sub>
      </section>
    );
  }


}

export default Sidebar;