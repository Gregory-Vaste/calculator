import React from 'react';
import './MagnificientEqual.css';
const MagnificientEqual = ({answer}) => {
    return (
        <div>
            <button onClick={answer} className="equal">=</button>
        </div>
    );
};

export default MagnificientEqual;