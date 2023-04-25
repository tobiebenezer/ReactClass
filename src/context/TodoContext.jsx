import { createContext, useEffect, useReducer, useState } from "react";
import TodoReducer from "../reducer/TodoReducer";

const TodoContext = createContext();

export function TodoProvider({children}){
    let initTodo = [] ;
    const [todo,dispatch] = useReducer(TodoReducer,initTodo);

    useEffect(()=>{
        getTodos();
    },[]);
    
    //get todo
    const getTodos = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await resp.json();
        const payload = {
            type:"GET_TODO",
            todo: data.slice(0,10),
        }

        dispatch(payload);
    };

    const updateTodo = function(id){
        const payload = {
            type:"UPDATE_TODO",
            id: id,
            title: "Todo was updated",
        };
        dispatch(payload);
    }

    console.log(todo);

    return (
        <TodoContext.Provider value={{ 
            todo,
            updateTodo,
         }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;