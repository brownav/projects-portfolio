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
        <div className="App">
          <p>{this.props.title}</p>
          <p>{this.props.summary}</p>
          <p>{this.props.picture}</p>
          <a href={this.props.link}>{this.props.link}</a>
          <p>{this.props.tags}</p>
        </div>
      );
  }

}

export default Project;