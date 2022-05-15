import React from "react";
import './CreateTodoButton.css';

const nuevaTarea = ()=>{
    alert("Hola una nueva tarea");
}

function CreateTodoButton(){
    return(
        <button className="button-todo"
        onClick={()=>nuevaTarea()
        }
        >+</button>
    )
}
export {CreateTodoButton};
/**
 * Podemos crear una funcion dentro de onClick={}
 * tambien podemos crear una funcion aparte para reutilizarla
 * pero al asignarsela al evento onClick debemos ponerla dentro 
 * de una funcion, si no lo hacemos asi
 * la funcion se ejecutara sola al cargar el componente
 */