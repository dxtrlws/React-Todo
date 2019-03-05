import React from 'react'


function Todo(props) {
    console.log(props)
    return (
        <p>{props.item}</p>
    )
}

export default Todo