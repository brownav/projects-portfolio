import React, { Component } from 'react';
import './Sidebar.css';

const image = require.context('../../public/images', true);

class Sidebar extends Component {

  render() {
    let profile = (image('./profile.png'));
    let github = (image('./github-icon.png'));
    let linkedin = (image('./linkedin-icon.png'));
    let resume = (image('./resume.png'));

    return (
      <section>
        <h1>Alexandria Brown</h1>
        <h3>Full-stack Software Developer</h3>
        <img className="profile" width="130em" height="150em" src={profile} alt="profile"></img><br></br>
        <sub>Hello! This is an in-progress snapshot of several projects. Some are deployed, others link to GitHub repos.</sub>
        <div className="icons">
          <a href="https://drive.google.com/file/d/1M8yKOlPMie_QXDgiYF3vehEKFurqDPE4/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img width="50em" height="50em" src={resume} alt="resume"></img></a>
          <a href="https://www.linkedin.com/in/alexandria-brown-47bab5ab/" target="_blank" rel="noopener noreferrer"><img width="50em" height="50em" src={linkedin} alt="linkedin"></img></a>
          <a href="https://github.com/brownav" target="_blank" rel="noopener noreferrer"><img width="50em" height="50em" src={github} alt="github"></img></a>
        </div>
      </section>
    );
  }
}

export default Sidebar;