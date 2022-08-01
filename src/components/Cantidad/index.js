import React from 'react';
import {useState, useEffect}  from 'react'; // useState en un HOOKS o atajos de react permite retener el valor

const estilo = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

function ItemCount (props){
    const [contador, setContador] = useState(1);
    
    function addItem (){
        contador < props.stock ? setContador (contador + 1) : alert('Solo se pueden cargar 5 Unidades')
    }
    function remItem (){
        contador > props.initial ? setContador (contador - 1) : alert('Minima cantidad alcanzada')
    }
    return(
        <div style={estilo}>
            <button onClick={remItem}>➖</button>
            {contador}
            <button onClick={addItem}>➕</button>
        </div>
    )
}

export default ItemCount;