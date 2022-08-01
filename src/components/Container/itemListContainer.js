import React from "react";
import ItemCount from "../Cantidad";


const estilo = {
    width: '300px',
    heigth: '300px',
    margin:'10px',
    padding: '20px',
    borderRadius: '10%',
    backgroundColor: '#90ee90',
    fontSize: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',

}

function itemListContainer(props) {
    return (
        <div style={estilo}> 
            {props.contenido}
            <br />
            <img src="../IMG/ropa.png" alt=""></img>
            <br />
            <>x descripcion prod</>
            <br />
            <>x Precio de prod</>
            <br />
            <ItemCount stock={'5'} initial={'1'} /> 
            <button type="button" >Agregar al carrito</button>
        </div>
    );
}

export default itemListContainer;