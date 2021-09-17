import React from 'react';
import './Numbers.css';
const Numbers = ({nbrCalc}) => {


    return (
        <div className="center"> 
          <div className="block1">
             <button id="9" className="numbers" onClick={nbrCalc}>9</button>  
            <button id="8" className="numbers" onClick={nbrCalc}>8</button>  
            <button id="7" className="numbers" onClick={nbrCalc}>7</button> 
          </div>
          <div className="block2">
            <button id="6" className="numbers" onClick={nbrCalc}>6</button> 
            <button id="5" className="numbers" onClick={nbrCalc}>5</button>  
            <button id="4" className="numbers" onClick={nbrCalc}>4</button>
            </div>
            <div>
            <button id="3" className="numbers" onClick={nbrCalc}>3</button>
            <button id="2" className="numbers" onClick={nbrCalc}>2</button>  
            <button id="1" className="numbers" onClick={nbrCalc}>1</button> 
          </div>
          <div>
            <button id="0" className="numbers" onClick={nbrCalc}>0</button>  
          </div>
          
        </div>
    );
};
export default Numbers