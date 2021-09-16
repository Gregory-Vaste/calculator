import React from 'react';
import './Numbers.css';
const Numbers = ({greg}) => {


    return (
        <div>
          <button id="1" className="numbers" onClick={greg}>1</button>  
          <button id="2" className="numbers" onClick={greg}>2</button>  
          <button id="3" className="numbers" onClick={greg}>3</button>  
          <button id="4" className="numbers" onClick={greg}>4</button>  
          <button id="5" className="numbers" onClick={greg}>5</button>  
          <button id="6" className="numbers" onClick={greg}>6</button>  
          <button id="7" className="numbers" onClick={greg}>7</button>  
          <button id="8" className="numbers" onClick={greg}>8</button>  
          <button id="9" className="numbers" onClick={greg}>9</button>  
          <button id="0" className="numbers" onClick={greg}>0</button>  
        </div>
    );
};
export default Numbers