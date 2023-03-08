import React from 'react';

function Boton(props){

    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
        onClick={ () => props.manejarClick(props.children)}>
            {props.children}{/* Todo lo que este dentro de Boton, se considera children */}
        </div>
    )
};

export default Boton;