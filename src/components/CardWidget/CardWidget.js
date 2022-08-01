import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './style.css'

function CarWidget (){
    return ( 
        <div className="iconocart">
            <div className="enCarrito">0</div>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    )
}

export default CarWidget;