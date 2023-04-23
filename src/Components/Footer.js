import React, { useContext } from "react";
import TodoContext from "../Contexts/TodoContext";



function Footer() {

  const{todos,clearCompleted,filter,setFilter} = useContext(TodoContext);


  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length + " "}</strong>
         item{todos.length > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")} >
            All
          </a>
        </li>
        <li>
          <a href="#/" className={filter === "active" ? "selected" : ""} onClick={() => setFilter("active")} >Active</a>
        </li>
        <li>
          <a href="#/" className={filter === "completed" ? "selected" : ""} onClick= {() => setFilter("completed")}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => clearCompleted() } >Clear completed</button>
    </footer>
  );
}

export default Footer;
