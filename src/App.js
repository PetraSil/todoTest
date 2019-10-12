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
    if(!todo) return;
    setTodos([...todos, {id: Date.now(), text: todo, done: false}]);
    setTodo("");
    e.target.reset();
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const readyTodo = (e) => {
   if(e.target.classList.contains("done")) {
      e.target.classList.remove('done');
    } else {
      e.target.classList.add('done');
    }
  }

  return (
    <div className="App">
    <h1>TODOS:</h1>
      <form onSubmit={addTodo}>
        <input placeholder="Add new todo..." onChange={handleTodo}></input>
        <button>Submit</button>
        <ol>
          {todos.map((item) => (
            <li key={item.id}>{item.text}
            <div className="spanContainer">
              <span onClick={() => deleteTodo(item.id)}>Delete</span>
              <span onClick={readyTodo}>Done</span>
            </div>
            </li>
          ))}
        </ol>
      </form>
    </div>
  );
}

export default App;