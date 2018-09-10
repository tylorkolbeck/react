import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Tylor', age: 38},
      { name: 'Reuger', age: 6},
      { name: 'Kaila', age: 27},
    ]
  }

  render() {
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p> Adjacent Element</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: React</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
      // Can not put adjacent script here.  It must go inside the parent div.
    )
    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work.'))
  }
}

export default App;


