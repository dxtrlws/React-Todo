import React from "react";
import todosData from "./todosData";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todosData,
      todo: ""
    };
  }

  taskCompleteHandler = id => {
    this.setState(prevState => {
      const updateTodo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return updateTodo;
    });
  };

  inputChangeHandler = event => {
    this.setState({ todo: event.target.value });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    let newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    };
    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo],
        todo: ""
      };
    });
  };

  filterHandler = () => {
    let completedTodos = this.state.todos.filter(todo => !todo.completed );
    console.log(this.state)
    
      this.setState({todos: completedTodos})
    
    
  };

  render() {
    return (
      <div className="container">
      <h1>React Todo's</h1>
        <TodoList items = {this.state.todos} taskComplete={this.taskCompleteHandler} />
        <TodoForm
          inputValue={this.state.todo}
          addTodo={this.formSubmitHandler}
          textHandler={this.inputChangeHandler}
          filterHandler={this.filterHandler}
          completed={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
