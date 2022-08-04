import React from "react";
import ItemCount from "../Cantidad";
import ItemList from "./ItemList/ItemList";
import { useState, useEffect } from "react";


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

export const ItemListContainer = (props) =>{
    const [data,setData] = useState([])
    const [cargando,setCargando] = useState(true)
    useEffect ( ()=>{
    getFetch
        .then ((res) =>setData(res))
        .catch ((error) => console.log('Error'))
        .finally (() =>setCargando(false))
    },[])

    return (
        <div style={estilo}> 
            {props.contenido}
            <img src="../IMG/ropa.png" alt=""></img>
            <button type="button" >Ver detalle del artículo</button>
            <ItemList />
            <br />
            <ItemCount stock={'5'} initial={'1'} /> 
            <button type="button" >Agregar al carrito</button>
        </div>
    );
}

export default ItemListContainer;
