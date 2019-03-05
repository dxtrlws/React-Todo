import React from 'react';
import todosData from './todosData'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: todosData,
      todo: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({todo: event.target.value})
  }

  formSubmitHandler = (e) => {
    e.preventDefault()
    console.log('button clicked')
    console.log(this.state.todo)
    let newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now

    }
    this.setState(prevState => {
      return { todos: [...todosData, newTodo ]}
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoList item = {item} key={item.id} />)
    return (
      <div>
        {todoItems}
        <TodoForm inputValue = {this.state.value}  addTodo = {this.formSubmitHandler} textHandler = {this.inputChangeHandler}/>
      </div>
    );
  }
}

export default App;
