import React from 'react';
import './DeleteOperations.css'

const DeleteOperations = ({cancel}) => {
    // button for reset
    return (
        <div className="center">
            <button onClick={cancel} className="reset">C</button>
        </div>
    );
};

export default DeleteOperations;