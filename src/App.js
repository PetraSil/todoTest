import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    setTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    if(todo === "") return;
    setTodos([...todos, {id: Date.now(), text: todo}]);
    e.target.reset();
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
    <h1>TODOS:</h1>
      <form onSubmit={addTodo}>
        <input placeholder="Add new todo..." onChange={handleTodo}></input>
        <button>Submit</button>
        <ol>
          {todos.map((item) => (
            <li key={item.id}>{item.text}<span onClick={() => deleteTodo(item.id)}>X</span></li>
          ))}
        </ol>
      </form>
    </div>
  );
}

export default App;