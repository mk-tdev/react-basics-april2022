import React, { useEffect } from "react";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../UI/ErrorModal";

function AddUser({ addUserHandler }) {
  const [userName, setUserName] = React.useState("");
  const [userMobile, setUserMobile] = React.useState("");
  const [showError, setShowError] = React.useState(false);
  const emailInputRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    if (userName.trim() === "" || userMobile.trim() === "") {
      setShowError(true);
      return;
    }

    addUserHandler({
      id: uuidv4(),
      name: userName,
      mobile: userMobile,
      email: emailInputRef.current.value,
    });
    setUserName("");
    setUserMobile("");
    emailInputRef.current.value = "";
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    setUserMobile(event.target.value);
  };

  useEffect(() => {
    console.log(emailInputRef);
  }, []);

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
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} />

          <label htmlFor="mobile">Number</label>
          <input
            type="number"
            id="mobile"
            value={userMobile}
            onChange={mobileChangeHandler}
          />

          <button type="submit">Add User</button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
