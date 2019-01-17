import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super()
  }

  static propTypes = {
    title: PropTypes.string, 
    summary: PropTypes.string,
    picture: PropTypes.string,
    link: PropTypes.string,
    tags: PropTypes.string
  } 

  render() {
    return (
      <article className="article">
        <h2>{this.props.title}</h2>
        <img width="350em" height="230em" src={this.props.picture} alt="project screenshot"/><br></br>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.status}</a>
        <p>{this.props.summary}</p>
        <p>{this.props.tags}</p>
      </article>
    );
  }

}

export default Project;