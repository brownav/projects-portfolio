import React, { Component } from 'react';
import Project from './Project.js';
import data from '../data/projects.txt';
import './ProjectCollection.css';

const images = require.context('../../public/images', true);

class ProjectCollection extends Component {
	constructor(props) {
		super(props)

		this.state = {
			projects: []
		}
	}
	
	componentDidMount = () => {
			fetch(data)
			.then( resp => resp.text())
			.then( resp => this.setState({projects: JSON.parse(resp)}))
			.catch( err => console.log(err))
	}
   	
	renderProjects = () => {
		let projects = this.state.projects.map((elem, index) => {
			let screenshot = (images(elem.picture));
			return (
				<Project
					key={index}
					title={elem.title}
					summary={elem.summary}
					picture={screenshot}
					link={elem.link}
					tags={elem.tags}
				/>
			)
		});
		return projects;
	}

	render() {
		return (
				<div className="container">
					{this.renderProjects()}
				</div>
			);
	}
}

export default ProjectCollection;
