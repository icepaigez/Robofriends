import React from 'react';
import '../styles/card.css';

function Card({ id, name, username, email }) {
	return (
		<div className="card">
			<img src={`https://robohash.org/${id}.png?size=150x150`} alt=""/>
			<h2>{ username }</h2>
			<p>{ email }</p>
		</div>
	)
} 
export default Card; 