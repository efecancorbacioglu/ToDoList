import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = (props) =>{
    const [filter, setFilter] = useState("all")

    const [todos, setTodos] = useState([{id:1, text:"Create a to do list", completed: true,},{id:2, text:"add new item to the list", completed:false}]);

    const checkboxChanged = (id) => {
        const clone_todos = [...todos];

        const selectedItem = clone_todos.find(todo => todo.id === id);
        selectedItem.completed = !selectedItem.completed;
        
        setTodos(clone_todos)
    }    

    const deleteItem = (id) => {
       const clone_todos = [...todos];

        const selectedIndex = clone_todos.findIndex(todo => todo.id === id);
        clone_todos.splice(selectedIndex,1);
        setTodos(clone_todos)      

    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => todo.completed === false))        
    }

    

    const values = {todos,setTodos,checkboxChanged, deleteItem, clearCompleted,filter,setFilter};

    
    
    return <TodoContext.Provider value={values}>
            {props.children}
            </TodoContext.Provider>
}

export default TodoContext;  