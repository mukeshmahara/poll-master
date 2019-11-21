import React from 'react';

function Question(props) { 
    return (
        <h6 className="question">
            {props.question}
        </h6>
    );
}

export default Question;