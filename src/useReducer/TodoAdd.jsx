import React, { useState } from 'react'

export const TodoAdd = ({onNewTodo, todos}) => {

const [value, setValue] = useState({});


    const auxiliar = ({target})=>{
        setValue({            
            id: new Date().getTime(),
            description: target.value,
            done: false,
        })
    }

    const enviar = (event)=>{
        event.preventDefault()
        if(value.length <= 1){ 
            window.alert("agrega una tarea")
            return
        } else{
        onNewTodo(value)
        
        }
    }
  

  return (
    <>
        <form >
            <input type="text"
                placeholder='Que hay que hacer?'
                className='form-control'
                onChange={auxiliar}
                
            />
            <button type='submit'
                className='btn btn-outline-primary mt-1'
                onClick={enviar}
                >
                Agregar
            </button>
        </form>
    </>
  )
}
