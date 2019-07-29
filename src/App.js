import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [personState, setPersonState] = useState(
        {
            persons: [
                { name: "Samuel ", age: 18 },
                { name: "Jorge  ", age: 19 },
                { name: "Eduardo", age: 19 }
            ],
            
        });

    const [otherState, setOtherState] = useState("Some Value");

    console.log(personState, otherState);

    nameChangeHandler = (event) => {
        setPersonState(
            {
                persons: [
                    { name: "Samuel ", age: 18 },
                    { name: event.target.value , age: 19 },
                    { name: "Eduardo  Vite ", age: 21 }
                ]
            });

    }

    const switchNameHandler = (newName) => {
        //console.log("Was clicked");
        setPersonState(
            {
                persons: [
                    { name: newName, age: 18 },
                    { name: "Jorge Eduardo ", age: 19 },
                    { name: "Eduardo  Vite ", age: 19 }
            ]
            });
	}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hola :)</h1>
			</header>
            <button onClick={switchNameHandler.bind(this, "Samuel Garcia")} >Switch a name</button>

            <Person
                name={personState.persons[0].name}
                age={personState.persons[0].age}> 	Hobbies: Correr 
            </Person>
            <Person
                name={personState.persons[1].name}
                click={switchNameHandler.bind(this, "Samito")}
                age={personState.persons[1].age}
                changed={this.nameChangeHandler}/>
            <Person
                name={personState.persons[2].name}
                age={personState.persons[2].age} />
      </div>
    );

	  //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Creo que ya funciona'));
}

export default app;
