import React from "react";

const Form = ({ todos, setTodos, inputText, setInput, setFilterStatus }) => {
  const inputTextHanlder = (event) => {
    // console.log(e.target.value);
    // console.log(`Props are ${props}`);
    setInput(event.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInput("");
  };

  const statusFilterHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextHanlder}
        type="text"
        value={inputText}
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={statusFilterHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
