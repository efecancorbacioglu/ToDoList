import React, { useContext } from 'react'
import TodoContext, { TodoContextProvider } from '../../Contexts/TodoContext'

function TodoItem() {
    
    const {todos, checkboxChanged,deleteItem,filter} = useContext(TodoContext);
    
     let filtered = todos;

    if(filter !== "all"){
      {filter === "active" ? filtered = todos.filter(todo => todo.completed === false) : filtered = todos.filter(todo => todo.completed === true )}
    }
    return (
    <div>
         {filtered.map(todo => (
         <li key={todo.id} className = {todo.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" checked = {todo.completed}  onChange={() => checkboxChanged(todo.id)} />
            <label>{todo.text}</label>
            <button className="destroy" onClick={() => deleteItem(todo.id)} ></button>
          </div>
        </li>
        ))}
    </div>
  )
}

export default TodoItem