import React from "react";
import "./Todo.css";

function TodoForm(props) {
  
  let disabled = false
  let completedTasks = props.completed.filter(item => item.completed === true)
    
    if (completedTasks.length === 0) {
        disabled = true
    }
  return (
    <form onSubmit={props.addTodo}>
      <input
        onChange={props.textHandler}
        type="text"
        placeholder="...Todo"
        name="todo"
        value={props.inputValue}
      />
      <button type="submit" className="btn" disabled={!props.inputValue}>
        Add Todo
      </button>
      <button
        className="btn completed"
        disabled={disabled}
        onClick={props.filterHandler}
      >
        Clear Completed
      </button>
    </form>
  );
}

export default TodoForm;
