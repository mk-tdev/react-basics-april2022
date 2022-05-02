import React from "react";
import Card from "../UI/Card";

function TodoList({ todos }) {
  return (
    <Card>
      <h2 className="text-xl text-blue-500">
        {todos.length > 0 ? "Todos List" : "No Todos so far! Try adding one"}
      </h2>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item my-2 capitalize" key={todo.id}>
            {todo.todo} - {todo.remindOn}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default TodoList;
