import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import TodoContext from "../../Contexts/TodoContext";

function Header() {
  const{setTodos} = useContext(TodoContext);

  const {handleSubmit, register, formState: {errors}} = useForm();
  const onSubmit = 
  (data, e) => {
    
    setTodos(prev => [...prev, {id: prev.length + 1, text: data.newTodo, completed: false}]);
    e.target.reset();

  }
  

  return (
    <header className="header">
      <h1>Todos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="new-todo"
          type="text"
          name="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          {...register("newTodo")}
        />
      </form>
    </header>
  );
}

export default Header;
