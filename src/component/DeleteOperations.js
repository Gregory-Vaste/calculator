import React from 'react';

const DeleteOperations = ({cancel}) => {

    return (
        <div>
            <button onClick={cancel} className="operator"></button>
        </div>
    );
};

export default DeleteOperations;