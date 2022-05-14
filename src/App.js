//import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearh";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { CreateNewTask } from "./CreateNewTask";
import './App.css';


const todos = [
  {text: 'cortar cebolla', completed: false},
  {text: 'hacer aseo', completed: false},
  {text: 'aprender webpack', completed: false},
]

function App(props) {
  return (
    <>
    <CreateNewTask/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo=>(
          <TodoItem text={todo.text} key={todo.text}/>
        ))}
        <TodoItem/>
        </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
