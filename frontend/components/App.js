import React from 'react'
import axios from 'axios'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [], 
  }
  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        debugger
      })
      .catch(err => {
        debugger
      })
  }
  componentDidMount() {
    // fetch all todos from server
  }
  render() {
    return (
      <div>
        <div id="error">Error: No error here</div>
        <div id="todos">
          <h2>todos</h2>
          <div>Walk the dog</div>
          <div>Learn React ✓</div>
      </div>
      <form id="todoForm">
        <input type="text" placeholder="Type todo"></input>
        <input type="submit"></input>
        <button>Clear Completed</button>
      </form>
      </div>
    )
  }
}
