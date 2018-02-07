import React, { Component } from 'react';
import classes from './Person.css'; //imports in the css file for the component.
//import Radium from 'radium';

//use const because the value will not change.
//if props changes, it will then update DOM.
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js inside constructor', props);
    }

    componentWillMount() {

        console.log('Person.js inside component will mount.');

    }

    componentDidMount() {
        console.log('Person.js inside did mount.');
    }

    render(){
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.change} value={this.props.name} />
            </div>
        );
    };
};
/**
 * 
const person  = (props) => {

    
    /**const style = {
        "@media (min-width: 500px)": {
            width: '450px'
        },
        backgroundColor: 'lightblue',
        color: 'black'
    };

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    );
};**/

//export default Radium(person);
export default Person;