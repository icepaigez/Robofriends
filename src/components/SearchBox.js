import React from 'react';
import '../styles/searchbox.css';

function SearchBox({ searchChange }) {
	return (
		<div className="search">
			<input className="box" onChange={searchChange} type="search"  placeholder="search friends.."/>
		</div>
	)
};

export default SearchBox;