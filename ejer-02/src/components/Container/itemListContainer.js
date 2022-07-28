import React from "react";

const estilo = {
    width: '500px',
    backgroundColor: 'orange',
    fontSize: '4rem',

}

function itemListContainer (greeting){
    return(
        <div style={estilo}>
            {greeting.contenido}
        </div>
    );
}

export default itemListContainer;