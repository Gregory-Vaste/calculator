import React from 'react'
import './OperatorBtn.css'
const OperatorBtn = ({operatorCalc}) => {
    // operator
    return (
        <div className="center">
            <button id="+" className="operator" onClick={operatorCalc}>+</button>  
            <button id="-" className="operator" onClick={operatorCalc}>-</button>  
            <button id="/" className="operator" onClick={operatorCalc}>/</button>  
            <button id="*" className="operator" onClick={operatorCalc}>*</button>  
        </div>
    );
};

export default OperatorBtn;