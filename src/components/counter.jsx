import React from 'react';
import '../style-sheets/counter.css';

function Counter({  clicNum  }){
    return (
        <div className='counter'>
            {clicNum}
        </div>
    );
}

export default Counter;