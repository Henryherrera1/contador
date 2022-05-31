import React from "react";
import '../style-sheets/botton.css';


function botton({text, isBottonClic, manejarClic}){
    return (
        <button
        className={ isBottonClic ? 'botton-clic' : 'botton-reload'  }
        onClick={manejarClic}>
            {text}
        </button>
    );
}

export default botton;