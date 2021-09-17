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


     const [value, setValue] = useState(""); 
    
    const calc = (e) => {
         setValue(value + e.target.id);
        //console.log(value);
    }
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
    
    const annul = () => {
        setValue("")
    }

    return (
        <div className="container">
           <BeautifullScreen result={value}/>
           <Numbers greg={calc}/>
           <MagnificientEqual answer={equal} />
           <OperatorBtn tarte={calc}/>
           <DeleteOperations cancel={annul}/>
        </div>
    );
};

export default Calculator;