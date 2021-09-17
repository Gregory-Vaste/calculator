import React, {useState} from 'react';
import './BeautifullScreen.css'
import BeautifullScreen from './BeautifullScreen';
import './MagnificientEqual.css';
import MagnificientEqual from './MagnificientEqual';
import OperatorBtn from './OperatorBtn';
import './Numbers.css';
import Numbers from './Numbers';
import DeleteOperations from './DeleteOperations';
import './Calculator.css';





const Calculator = () => {

    // state value as first value calculator
     const [value, setValue] = useState(""); 
    
    //  calc for result question
    const calc = (e) => {
         setValue(value + e.target.id);
        //console.log(value);
    }
    // equal for value and error for value
    const equal = () => {
        try{
            setValue(eval(value))
        }catch(e){
            if(e instanceof SyntaxError){
                alert('Fausse manip' );
                setValue("");
            }
        }
    }
    //  delete
    const annul = () => {
        setValue("")
    }
    //all component && nommage des props
    return (
        <div className="container">
           <BeautifullScreen result={value}/>
           <Numbers nbrCalc={calc}/>
           <MagnificientEqual answer={equal} />
           <OperatorBtn operatorCalc={calc}/>
           <DeleteOperations cancel={annul}/>
        </div>
    );
};

export default Calculator;