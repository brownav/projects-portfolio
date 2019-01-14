import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super()
  }

  static propTypes = {
    title: PropTypes.string, 
    summary: PropTypes.string,
    picture: PropTypes.string,
    link: PropTypes.string,
    tags: PropTypes.array
  } 

  render() {
      return (
        <article className="App">
          <h2>{this.props.title}</h2>
          <p>{this.props.summary}</p>
          <img width="500em" height="300em" src={this.props.picture} alt="project screenshot"/><br></br>
          <a href={this.props.link}>{this.props.link}</a>
          <p>{this.props.tags}</p>
        </article>
      );
  }

}

export default Project;