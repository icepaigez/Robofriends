import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from '../utils/robots.js';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	};

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users => this.setState({ robots:users }))
	};

	onSearchChange = (e) => {
		this.setState({searchfield: e.target.value})
	}

	render() {
		const { robots, searchfield } = this.state;
		if (robots.length === 0) {
			return <h1>INCOMING ...</h1>
		} else {
			const filteredRobots = robots.filter(robot => robot.username.toLowerCase().includes(searchfield.toLowerCase()));
			return(
				<div className="parent-app">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
			)
		}
	}
};

export default App;