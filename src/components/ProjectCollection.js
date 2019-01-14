import React, { Component } from 'react';
import Project from './Project.js';
import data from '../data/projects.txt';

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
			.then( resp =>
				this.setState({projects: JSON.parse(resp)}) 
				)
			.catch( err => console.log(err))
	}
   	
	makeMovies = () => {
		let projects = this.state.projects.map((elem, index) => {
			let tags = elem.tags.split(",");
			return (
				<Project
					key={index}
					title={elem.title}
					summary={elem.summary}
					picture={elem.picture}
					link={elem.link}
					tags={tags}
				/>
			)
		});
		return projects;
	}


	render() {
		return (
				<div>
					{this.makeMovies()}
				</div>
			);
	}
}

export default ProjectCollection;