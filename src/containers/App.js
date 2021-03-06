import React, { PureComponent } from 'react' ;
//classes is a javascript object that has access to css styles in app.css
import classes from './App.css';
//allows for psuedostyles. styleroot allows for media transformations
//import Radium, { StyleRoot } from 'radium';
//import Person from '../components/Persons/Person/Person'; //imports person component from the file. Needs an uppercase name.
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  //state is managed from inside component. only available in components that extend component
  //use state with care! using it too much makes it unpredictable as it scales.
  //If state changes, it will lead react to update the DOM.
  //THIS CLASS IS FOR MANAGING AND MANIPULATING STATE.
  //Send the information to components to actually display changes.
  constructor(props){
    super(props);
    console.log('App.js inside constructor', props);
    this.state = {
      persons: [
        { id: 0, name: 'Mat', age: '26' },
        { id: 1, name: 'Elvis', age: '25' },
        { id: 2, name: 'Alex', age: '27' }
      ],
      showPersons: false
    };
  }

  componentWillMount(){

    console.log('App.js inside component will mount.');

  }

  componentDidMount(){
    console.log('App.js inside did mount.');
  }

  componentWillReceiveProps(nextProps) {
    console.log("UPDATE app.JS ; INSIDE componentWillReceiveProps", nextProps);
  }

 // shouldComponentUpdate(nextProps, nextState) {
   // console.log('UPDATE app.JS ; INSIDE shouldComponentUpdate');
   // return nextProps.persons !== this.props.persons || 
     //     nextState.showPersons !== this.state.showPersons;
//
 // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE app.JS ; Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('app.JS ; Inside componentDidUpdate');
  }
  /** Setting state like this only works in modern projects.
  state = {
    persons: [
      { id: 0, name: 'Mat', age: '26' },
      { id: 1, name: 'Elvis', age: '25' },
      { id: 2, name: 'Alex', age: '27' }
    ],
    showPersons: false
  };**/

  //USE ARROW FUNCTIONS TO ENSURE this ALWAYS REFERS TO APP CLASS
  //On button Click funtion. You can use bind at function call
  //to pass new_name. Or, you can the syntax seen on the button in render.
  //Bind is preferred, but the second is acceptable. The second has problems
  //with scale.
  switchNameHandler = (new_name) => {

    //NO this.state.persons[0].name = 'Alexis Sanchez'
    //use setState() instead. only touches the property indicated and recombines with other properties in state.
    this.setState({persons:[
        {name: new_name, age: 27},
        {name: 'Alex', age: 24},
        {name: 'Patrick', age: 29}
    ]});

  };

  //searches for specific person that is changed and then reflects
  //change in the UI
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {

        return p.id === id;

    });
    
    //Uses spread to create a copy of the person with
    //all the information from the original
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({

      persons: persons

    });

  };

  deletePersonHandler = (person_index) => {
    //slice returns a copy of the array
    //can also use spread operator.
    //gets all the objects in the array without
    //touching the array itself
    //this allows you to update state immutably.
    const persons = [...this.state.persons]
    //const persons = this.state.persons.slice();
    persons.splice(person_index, 1);
    this.setState({persons: persons});

  };

  //toggles the person div. Gets merged with 
  //the untouched state.
  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  };

  

  render() {
    console.log('App.js inside render.');
    //DOES NOT ALLOW FOR PSEUDOSELECTORS
    //WITHOUT RADIUM PACKAGE. Wrap 
    //them in pseudoselectors to be able
    //to write pseudoclasses in javascript.
    //HOVER ONLY WITH RADIUM.
    /**const style = {

      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    };**/

    let persons = null;
    
    //javascript to take what is in person, check if
    //it is toggled, then display all the people
    //if you use more than one function in es6 arrow
    //wrap the args in parentheses. adjusts
    //style if persons is showing as well.
    //ErrorBoundary is a higher order component that
    //will display error if there is one.
    if(this.state.showPersons){

      persons = (
         <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
         />
      );

      
      //style.backgroundColor = 'red';
      //use square brackets because :hover is a string.
      //NEEDS RADIUM
      /**style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }**/

    }
    //array of strings that defines CSS classes.
    //which is then combined to one string to create a valid
    //css class list. GENERIC solution.
    //let classes = ['red', 'bold'].join(' ');

    //in this case, pushes styles depending on length of persons
    //then joins WHEN IN THE JSX function


    //outputs the list persons as a variable
    //wrapped in <StyleRoot> to allow for media query
    //transformation. RADIUM ONLY.
    return (
        <div className={classes.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
    //jsx is not html, but works just like it
    //creates a div wrapped around an h1 element with className 'App', which is the same as above.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a working React App!")); //at least three args, 
  }
}
//wraps app in radium, calling it a higher order component.
//can be used on class and fucntional components.
export default App;
