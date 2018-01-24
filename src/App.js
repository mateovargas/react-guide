import React, { Component } from 'react' ; 
import './App.css';
import Person from './Person/Person.js'; //imports person component from the file. Needs an uppercase name.

class App extends Component {
  //state is managed from inside component. only available in components that extend component
  //use state with care! using it too much makes it unpredictable as it scales.
  //If state changes, it will lead react to update the DOM.
  state = {
      persons: [
        {name: 'Mat', age: '26'}, 
        {name: 'Elvis', age: '25'}, 
        {name: 'Alex', age: '27'}
      ]
  };

  //On button Click funtion
  switchNameHandler = () => {

    //NO this.state.persons[0].name = 'Alexis Sanchez'
    //use setState() instead. only touches the property indicated and recombines with other properties in state.
    this.setState({persons:[
        {name: 'Mateo', age: '27'},
        {name: 'Sokoli', age: '24'},
        {name: 'Brown', age: '29'}
    ]});

  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is gaming.</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is reading.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobby is football.</Person>
      </div>
    );
    //jsx is not html, but works just like it
    //creates a div wrapped around an h1 element with className 'App', which is the same as above.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a working React App!")); //at least three args, 
  }
}

export default App;
