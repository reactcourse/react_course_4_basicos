import React, { Fragment,useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Crear lista de productos con hooks
  const  [productos, guardarProductos] = useState ([
    {id:1,nombre:"Camisa React", precio:50},
    {id:2,nombre:"Camisa Vuejs", precio:40},
    {id:4,nombre:"Camisa Node.js", precio:20},
    {id:3,nombre:"Camisa Angularjs", precio:30},
  ]);

  /*State para carrito de compras
    al useState([]) donde [] es el valor inicial de lo que se va a agregar
    en este caso es el carrito y empieza vacio
    carrito hace referencia al [] enviado en useState
  */
  const [carrito, agregarProducto] = useState ([]);


  const currentYear = new Date().getFullYear();
    
  return (

    /**Para evitar crear div extra, se pueden utilizar fragments , que es otro export de react
     * {Fragment}
     */
    <Fragment>
      <Header title="Virtual Shop" greetings = "Hi"/>

      <h1>Lista de productos</h1>
      {productos.map(producto=>(
        <Producto key={producto.id} 
            producto={producto}
            productos = {productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
        
        />
      ))}
      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}/>

      <Footer currentYear={currentYear}/>
    </Fragment>
  );
}

export default App;
