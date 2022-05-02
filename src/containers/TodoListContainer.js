import React, { useContext } from "react";
import AddTodo from "../components/Users/AddTodo";
import TodoList from "../components/Users/TodoList";
import ThemeContext from "../Contexts/ThemeContext";

const TodoListContainer = () => {
  const [todos, setTodos] = React.useState([]);
  const ctx = useContext(ThemeContext);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };
  return (
    <div className="m-5">
      <h2>Todo with {ctx.theme.toUpperCase()}</h2>

      <button onClick={ctx.toggleTheme}>
        {ctx.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>

      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoListContainer;
