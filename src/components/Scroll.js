import React from "react";
import '../styles/scroll.css'

const Scroll = ({ children }) => { //props is an object, and one of the items is props.children
	return(
		<div className="scroll">
			{ children }
		</div>
	)
};
export default Scroll;