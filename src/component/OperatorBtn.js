import React from 'react';

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