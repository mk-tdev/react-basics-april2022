import React, { useEffect } from "react";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../UI/ErrorModal";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "TASK_NAME":
      return { ...state, taskName: action.payload };
    case "REMIND_ON":
      return { ...state, remindOn: action.payload };
    case "CLEAR":
      return { ...state, taskName: "", remindOn: "" };
    default:
      return state;
  }
};

function AddTodo({ addTodoHandler }) {
  const [showError, setShowError] = React.useState(false);
  const [todoState, dispatchTodoState] = React.useReducer(todoReducer, {
    taskName: "",
    remindOn: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (todoState.taskName.trim() === "" || todoState.remindOn.trim() === "") {
      setShowError(true);
      return;
    }

    addTodoHandler({
      id: uuidv4(),
      todo: todoState.taskName,
      remindOn: todoState.remindOn,
    });
    dispatchTodoState({ type: "CLEAR", payload: "" });
  };

  const taskNameChangeHandler = (event) => {
    dispatchTodoState({ type: "TASK_NAME", payload: event.target.value });
  };
  const remindOnChangeHandler = (event) => {
    dispatchTodoState({ type: "REMIND_ON", payload: event.target.value });
  };

  return (
    <>
      {showError && (
        <ErrorModal
          message={"Invalid data or Empty!"}
          closeModal={() => setShowError(false)}
        />
      )}

      <Card>
        <form onSubmit={onSubmit}>
          <div className="flex justify-between gap-3">
            <input
              placeholder="Task Name"
              type="text"
              value={todoState.taskName}
              onChange={taskNameChangeHandler}
            />

            <input
              placeholder="Remind On"
              type="text"
              value={todoState.remindOn}
              onChange={remindOnChangeHandler}
            />
          </div>
          <button type="submit">Add Todo</button>
        </form>
      </Card>
    </>
  );
}

export default AddTodo;
