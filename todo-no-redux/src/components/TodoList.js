import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterStatus }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          const todoComponent = (
            <Todo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
            />
          );
          if (filterStatus === "all") return todoComponent;
          if (filterStatus === "completed" && todo.completed)
            return todoComponent;
          if (filterStatus === "uncompleted" && !todo.completed)
            return todoComponent;
          return null;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
