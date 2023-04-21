import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"

const App = () => {  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue==null) return []
    return JSON.parse(localValue)
  })  

  const [searchItem, setSearchItem] = useState('');    
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleSearh = (event) => {
    setSearchItem(event.target.value);
    const filteredArray = todos.filter(todo => todo.title.toUpperCase().includes(searchItem.toUpperCase()));
    setFilteredTodos(filteredArray);
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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

      <form className="search-form">
        <input 
            type="text" 
            placeholder="Enter item to search"
            value={searchItem}
            onChange={handleSearh}    
            id="search-item"
        />
      </form>

      
      <TodoList 
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />   
    </>
    
  )
}

export default App
