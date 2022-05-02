import React from "react";
import TodoListContainer from "./containers/TodoListContainer";
import { ThemeContextProvider } from "./Contexts/ThemeContext";
// import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        {/* <UserListContainer /> */}
        <TodoListContainer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
