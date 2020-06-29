import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import '../styles/index.css';

function App() {
	return(
		<div className="parent-app">
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList />
		</div>
	)
};

export default App;