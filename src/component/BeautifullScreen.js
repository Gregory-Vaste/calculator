import React from 'react';
import './BeautifullScreen.js'
const BeautifullScreen = ({result}) => {
    return (
        <div className="affiche">
          
            <b>
             {result > 9000 ? "it's over 9000!" : result}        
            </b>
            
        </div>
    );
};

export default BeautifullScreen;