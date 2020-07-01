import React, { Component } from 'react';
import { connect } from "react-redux"; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';
//import { robots } from '../utils/robots.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	};

	componentDidMount() {
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
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			)
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);