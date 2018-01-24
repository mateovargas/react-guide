import React from 'react';

//use const because the value will not change.
//if props changes, it will then update DOM.
const person  = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;