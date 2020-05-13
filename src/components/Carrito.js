import React from "react";
import './carrito.css';
import Producto from './Producto';


const Carrito = (props)=>
(
    <div className="carrito">
        <h2>Tu Carrito de compras</h2>
        {props.carrito.length>0?
        props.carrito.map( producto=>(
            <Producto 
                key={producto.id}
                producto={producto}
                carrito = {props.carrito}
                agregarProducto={props.agregarProducto}
            />
        ))
        :
        <p>No hay elementos en el carrito</p>
    }
    </div>       
);

export default Carrito;