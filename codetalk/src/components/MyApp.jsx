import React from "react";
function MyButton (props) {
	return (
		<button>
			{props.title}
		</button>
	)
}

function MyApp() {
	return ( 
		<div>
			<h1>Welcome to my app</h1>
      		<MyButton title="Add to cart" />
			<MyButton title="Find out more" />

		</div>
	 );
}

export default MyApp;