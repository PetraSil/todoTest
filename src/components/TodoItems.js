import React from 'react';

const TodoItems = ({ todos, deleteTodo, readyTodo }) => {
    return (
      <>
        {todos.map((item) => (
          <div key={Math.random()} className="todosContainer">
            <div style={{ textDecoration: item.done ? "line-through" : "" }} key={item.id}>{item.text}</div>
            <div className="todosButtonContainer">
              <span onClick={() => deleteTodo(item.id)}>Delete</span>
              <span onClick={() => readyTodo(item.id)}>Done</span>
            </div>
          </div>
        ))}
      </>
    )
}

export default TodoItems;