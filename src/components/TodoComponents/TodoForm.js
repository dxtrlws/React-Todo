import React from 'react'

function TodoForm(props) {
    return (
        <form onSubmit= {props.addTodo}>
            <input onChange={props.textHandler} type="text" placeholder="...Todo" name = "todo" value={props.inputValue}/>
            <button type="submit" className="btn">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm