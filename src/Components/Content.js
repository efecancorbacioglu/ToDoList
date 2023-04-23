import React from "react";
import TodoList from "./Todo-list";

function Content() {
  
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList />
    </section>
  );
}

export default Content;
