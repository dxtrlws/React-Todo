// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

function TodoList(props) {
  return (
    <div>
      {props.items.map(item => (
        <Todo key={item.id} todo={item} taskComplete={props.taskComplete} />
      ))}
    </div>
  );
}

export default TodoList;
