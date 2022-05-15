import React from "react";
import './CreateNewTask.css';

function CreateNewTask(){

    
    return(
        <>
        <h2 className="title">Create New Task</h2>
        <input 
            className="input-new-task" 
            type="text" 
            placeholder="create new Task"
        />
        <button className="btn-new-task">Create Task</button>
        </>
    )
}
export {CreateNewTask};