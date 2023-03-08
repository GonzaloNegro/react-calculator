import React from 'react';

function Clear(props){
    return(
        <button className='boton-clear' onClick={props.manejarClear}>
            {props.children}
        </button>
    )
};

export default Clear;