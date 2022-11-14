import React, { useEffect, useReducer } from 'react'
import { useTodo } from '../hook/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


export const TodoApp = () => {
    const {todos,todoCount, todoPending, handleTodo, handleDeleteTodo, handleToggleTodo} = useTodo()

   
  return (
    <>
        <h1>TodoApp: {todoCount}, <small>pendientes: {todoPending}</small></h1>
        <hr/>

        <div className='row'>

            <div className='col-7'>
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}></TodoList>
            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd onNewTodo={handleTodo} todos={todos}></TodoAdd>
            </div>
        </div>
    </>
  )
}
