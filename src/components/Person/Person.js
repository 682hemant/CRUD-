import React from 'react';

import './Person.css';

const person = (props) => (
    <div className="Person">
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <button onClick={props.handleEdit}>Edit</button>
        <button onClick={props.clicked}>Delete</button>
    </div>
);

export default person;