import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

function App() {
	return(
		<div>
			<Hello />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));


