import { useState, useEffect } from 'react'

import todoService from './services/todos'

import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService.getAll().then((todos) => setTodos(todos))
  }, [])

  const addTodo = async (todoObject) => {
    try {
      const response = await todoService.create(todoObject)
      setTodos(todos.concat(response))
    } catch (exception) {}
  }

  const deleteTodo = async (todoObject) => {
    try {
      if (window.confirm(`Remove todo ${todoObject.content}?`)) {
        await todoService.remove(todoObject)
        setTodos(todos.filter((t) => t.id !== todoObject.id))
      }
    } catch (exception) {
      console.log(exception.message)
    }
  }

  return (
    <div>
      <h2>Today's todo's</h2>
      <TodoForm createTodo={addTodo} />
      <Todos deleteTodo={deleteTodo} todos={todos} />
    </div>
  )
}

export default App
