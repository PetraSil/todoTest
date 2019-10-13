import React from 'react';
import TodoItems from './TodoItems';

const TodoList = (props) => {
    return (
      <form onSubmit={props.addTodo}>
        <input placeholder="Add new todo..." onChange={props.handleTodo}></input>
        <button>Submit</button>
        <TodoItems  todos={props.todos} deleteTodo={props.deleteTodo} readyTodo={props.readyTodo}/>
      </form>
    )
}

export default TodoList;
