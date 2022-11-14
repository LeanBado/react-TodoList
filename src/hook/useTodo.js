import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../useReducer/todoReducer'

export const useTodo = () => {
  
    const initialState = []

    const init =()=>{
        return JSON.parse(localStorage.getItem("todos")) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))  
    }, [todos]);

    const handleTodo = (todo) =>{
        const action = {
            type: "[TODO] add todo",
            payload: todo,
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) =>{
       const action = {
        type: "[TODO] delete todo",
        payload: id,
       }
        dispatch(action)
    }

    const handleToggleTodo = (id) =>{
        console.log(id)
        const action = {
         type: "[TODO] toggle todo",
         payload: id,
        }
         dispatch(action)
     }
    


    return {
        todos, 
        todoCount: todos.length,
        todoPending: todos.filter(todo => !todo.done).length,
        handleTodo, 
        handleDeleteTodo, 
        handleToggleTodo
    }
}
