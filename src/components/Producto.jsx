import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
    //Agrega un producto al carrito
    const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    /*El state no se debe modificar directamente, se deben hacer uso de las funciones
        Al valor inicial del state ser un arreglo []  se debe agregar sintaxis de arreglo
        a la función.
        */
    agregarProducto([...carrito, producto]);
  };
  //Elimina un producto del carrito
  const eliminarProducto = (id) =>{ 

    //Se obtiene el array de todos los productos que estan en 
    //el carrito, menos el que se va a eliminar
    const productos = carrito.filter((producto)=>{
       return producto.id!==id;
    });
    console.log(productos);
    
    agregarProducto(productos);
  };

  const { id, nombre, precio } = producto;
  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={()=>eliminarProducto(id)}>Eliminar</button>
      )}
    </div>
  );
};

export default Producto;
