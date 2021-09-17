import React from 'react';
import './OperatorBtn.css'
const OperatorBtn = ({tarte}) => {
    return (
        <div>
            <button id="+" className="operator" onClick={tarte}>+</button>  
            <button id="-" className="operator" onClick={tarte}>-</button>  
            <button id="/" className="operator" onClick={tarte}>/</button>  
            <button id="*" className="operator" onClick={tarte}>*</button>  
        </div>
    );
};

export default OperatorBtn;