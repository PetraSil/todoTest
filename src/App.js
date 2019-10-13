import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

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

  const readyTodo = (id) => {
    const newTodos = [...todos];
    let index =(todos.findIndex(item => item.id === id))
    if(newTodos[index].done === true) {
      newTodos[index].done = false
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  }

  return (
    <div className="App">
    <h1>TODOS:</h1>
    <TodoList addTodo={addTodo} handleTodo={handleTodo} todos={todos} deleteTodo={deleteTodo} readyTodo={readyTodo} />
    </div>
  );
}

export default App;