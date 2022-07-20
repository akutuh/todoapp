import Todo from './Todo'

const Todos = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo deleteTodo={deleteTodo} key={todo.id} todo={todo}></Todo>
      ))}
    </ul>
  )
}

export default Todos
