import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    loadLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () =>
    localStorage.setItem("todos", JSON.stringify(todos));

  const loadLocalTodos = () => {
    if (localStorage.getItem("todos") !== null)
      setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  console.log(`Input text is ${inputText}`);
  return (
    <div className="App">
      <header>
        <h1>React - Mikes Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInput={setInputText}
        setFilterStatus={setFilterStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterStatus={filterStatus} />
    </div>
  );
}

export default App;
