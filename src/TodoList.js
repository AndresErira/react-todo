import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <ul className="container-list">
            {props.children}
        </ul>
    )
}
export {TodoList};