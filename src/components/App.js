import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from '../utils/robots.js';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ""
		}
	};

	onSearchChange = (e) => {
		this.setState({searchfield: e.target.value})
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => robot.username.toLowerCase().includes(searchfield.toLowerCase()));
		return(
			<div className="parent-app">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
		)
	}
};

export default App;