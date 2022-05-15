import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    const onSearchValueChange = (e)=>{
        console.log(e.target.value);
    }
    return(
        <input
            className="input-search"
            placeholder="Busca un Todo"
            onChange={onSearchValueChange}
        />
    )
}
export {TodoSearch};
/**
 * En el evento onChange se puede usar directamente la funcion en 
 * el input ya que este solo se dispara al registrar eventos de
 * teclado
 */