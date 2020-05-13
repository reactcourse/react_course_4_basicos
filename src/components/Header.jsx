import React from "react";

//props es como se pasan datos, se recomienda hacer destructuring a los datos {title} = {props.title}
function Header({title}){

    //Lugar seguro para poner código js
    let msg = "Welcome back";
   
    /*
    jsx es como un js mejorado
    Gracias a jsx puedo mezclar código javascript y código html, incluso css (común en react)
    todo lo que esté en el return es lo que se va a ver del componente
    */ 
    return (
        <h1 className="header" id="header">
           {title}, {msg}
        </h1>

    )
}

export default Header;