import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js inside constructor', props);
    }

    componentWillMount() {

        console.log('Persons.js inside component will mount.');

    }

    componentDidMount() {
        console.log('Persons.js inside did mount.');
    }

    render(){
        console.log('Persons.js inside render');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                //can also use
                //click={() => this.deletePersonHandler(index)}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
            />
        });
    }

};

export default Persons;