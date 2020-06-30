import React from 'react';
import Card from './Card';
import '../styles/index.css';

function CardList({ robots }) {
	if (true) {
		throw new Error(' something wrong')
	}
	return (
		<div className="comps">
			{
				robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email}/>)
			}
		</div>
	)
};

export default CardList;