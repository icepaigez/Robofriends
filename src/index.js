import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import './styles/index.css';
import { robots } from './utils/robots.js';

function App() {
	return(
		<div className="comps">
			{
				robots.map(robot => <Card id={robot.id} name={robot.name} username={robot.username} email={robot.email}/>)
			}
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));


