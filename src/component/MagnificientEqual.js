import React from 'react';
import './MagnificientEqual.css';
const MagnificientEqual = ({answer}) => {
    // btn equal
    return (
        <div className="center">
            <button onClick={answer} className="equal">=</button>
        </div>
    );
};

export default MagnificientEqual;