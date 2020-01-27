import React from 'react';

const validationComponent = props => {
    let message = props.textLength < 5 ? "Text too short" : "Text long enough";
    
    return (
        <p>{message}</p>
    );
};

export default validationComponent;