import React from 'react';

const TodoItems = ({ todos, deleteTodo, readyTodo }) => {
    return (
      <>
        {todos.map((item) => (
          <div key={item.id} className="todosContainer">
            <div style={{ textDecoration: item.done ? "line-through" : "" }}>{item.text}</div>
            <div className="todosButtonContainer">
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => readyTodo(item.id)}>Done</button>
            </div>
          </div>
        ))}
      </>
    )
}

export default TodoItems;