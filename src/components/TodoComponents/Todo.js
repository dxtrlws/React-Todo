import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <p
      onClick={() => props.taskComplete(props.id)}
      className={props.task ? "task-complete" : "task-open"}
    >
      {props.item}
    </p>
  );
}

export default Todo;
