import React from "react";
import Item from "./Item/Item.js"


export default function ItemList (props){
        return (
            <div className="detalle">
                {props.map((Item)=>{
                    return(
                        <Item key={producto.id} 
                            nombre = {producto.nombre}
                            precio = {producto.precio}
                            stock = {producto.stock}
                            img = {producto.id}
                        />
                    )})       
            }
            </div>
        )
}
    

// function descargaFalsa(url){
//     return new Promise ((resolve, reject) => {
//         setTimeout ( () =>{
//             const descargarDetalles = '[datos]';  // tarea sincronica prometida
//             console.log('descarga de detalle lista',descargarDetalles );
//             resolve (detallesListos);
//             reject (console.log('Error en la descarga'))
//         }, 2000)
// });
// }

export function descargarDatosAysnc() {
        const detalles = 'url';
        const promesaDeDescarga = descargaFalsa(urlDescarga);

        promesaDeDescarga.then((datos) =>{   // en caso de tarea exitosa
            console.log('Llegaron los datos' + datos);
        }).catch(()=> {                      // en caso de tarea con error
            console.log('error al descargar');
        }).finally (()=> {console.log('termino la descarga'); // mensaje final 
    })

};
