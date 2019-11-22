import React from 'react';

const Question = (props) => { 
    return (
        <h6 className="question">
            {props.question}
        </h6>
    );
}

export default Question;