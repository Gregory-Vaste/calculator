import React from 'react';
import './BeautifullScreen.js'
const BeautifullScreen = ({result}) => {
    return (
        // envoi les resultat et affiche it's over 9000 avec un scrore de 9000
        <div className="affiche">
          
            <b>
             {result > 9000 ? "it's over 9000!" : result}        
            </b>
            
        </div>
    );
};

export default BeautifullScreen;