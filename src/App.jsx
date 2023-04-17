import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"

const App = () => {  
  const [todos, setTodos] = useState([])  

  const addTodo = (title) => {
    setTodos(currentTodos => {
      return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false},
      ]
      })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return(
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>   
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />   
    </>
    
  )
}

export default App
