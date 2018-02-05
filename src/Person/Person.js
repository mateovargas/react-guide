import React from 'react';
import './Person.css'; //imports in the css file for the component.
//import Radium from 'radium';

//use const because the value will not change.
//if props changes, it will then update DOM.
const person  = (props) => {

    
    /**const style = {
        "@media (min-width: 500px)": {
            width: '450px'
        },
        backgroundColor: 'lightblue',
        color: 'black'
    };**/

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    );
};

//export default Radium(person);
export default person;