import React, { useState } from 'react';
import './App.css';

const TodoList = (props) => {
  return (
    <form onSubmit={props.addTodo}>
      <input placeholder="Add new todo..." onChange={props.handleTodo}></input>
      <button>Submit</button>
      {props.todos.map((item) => (
      <div key={Math.random()} className="todosContainer">
        <div style={{ textDecoration: item.done ? "line-through" : "" }} key={item.id}>{item.text}
        </div>
        <div className="todosButtonContainer">
          <span onClick={() => props.deleteTodo(item.id)}>Delete</span>
          <span onClick={() => props.readyTodo(item.id)}>Done</span>
        </div>
      </div>
      ))}
    </form>
  )
}

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

    /*if(e.target.classList.contains("done")) {
      e.target.classList.remove('done');
    } else {
      e.target.classList.add('done');
    }*/
  }

  return (
    <div className="App">
    <h1>TODOS:</h1>
    <TodoList addTodo={addTodo} handleTodo={handleTodo} todos={todos} deleteTodo={deleteTodo} readyTodo={readyTodo} />
    </div>
  );
}

export default App;