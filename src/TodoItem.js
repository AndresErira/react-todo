import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="item-todo">
            <span className="completed-icon"></span>
            <p>{props.text}</p>
            {console.log(props)}
            <span className="close-icon">X</span>
        </li>
        
    )
}
export {TodoItem};
//Se debe usar export {nombreComponente}
//en lugar de export default, para que al importar se fuerce a usar el mismo nombre de clase