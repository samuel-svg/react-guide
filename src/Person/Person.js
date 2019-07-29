import React from 'react';

let person = (props) => {
	return (
		<div>
            <h2 onClick={props.click}>Soy {props.name} y tengo {props.age} de edad</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
		</div>
	);
}

export default person;