import React from "react";
import './TodoSearch.css';

function TodoSearch(){
/**
 * Para manejar el estado en react se llama a
 * React.useState();----->agrega el estado a los
 * componentes cuando se crean como funciones
 * el useState es un hook de react
 * los hooks se reconocen porque anteceden la palabra use
 * ejemplos:    useEfect, useState
 
    const [state, setState] = React.useState('Andres');
    el primer valor es el estado y el segundo es la funcion
    que lo modifica
    */
   const [searchValue, setSearchValue]=React.useState('');
   /**
    * por convencion el segundo parametro se le antepone set pero
    * podria llevar cualquier nombre
    * se puede convinar con un evento para que este desde una 
    * funcion modifique el estado
    */
    const onSearchValueChange = (e)=>{
        
        setSearchValue(e.target.value);
    }
    return[
        <input
            key={1}
            className="input-search"
            placeholder="Busca un Todo"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
        <p
        key={2}>{searchValue}</p>
    ]
}
export {TodoSearch};
/**
 * En el evento onChange se puede usar directamente la funcion en 
 * el input ya que este solo se dispara al registrar eventos de
 * teclado
 */