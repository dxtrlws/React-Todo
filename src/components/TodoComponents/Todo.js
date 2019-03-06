import React from "react";
import "./Todo.css";

function Todo(props) {
    
  return (
      <div className="card">
      <div className="card-content">
      <input type="checkbox" checked={props.todo.completed ? "checked" : ""} onChange={() => props.taskComplete(props.todo.id)}/>
    <span
      onClick={() => props.taskComplete(props.todo.id)}
      className={props.todo.completed ? "task-complete" : "task-open"}
    >
      {props.todo.task}
      
    </span>
    </div>
    </div>
  );
}

export default Todo;
