import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((mappedTodo) => {
        if (mappedTodo.id === todo.id)
          return { ...mappedTodo, completed: !mappedTodo.completed };
        return mappedTodo;
      })
    );
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className={`todo-item`}>{text}</li>

      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
