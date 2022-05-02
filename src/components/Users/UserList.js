import React from "react";
import Card from "../UI/Card";

function UserList({ users }) {
  return (
    <Card>
      <h2 className="text-xl text-blue-500">
        {users.length > 0 ? "Users List" : "No Users so far! Try adding one"}
      </h2>

      <ul className="list-group">
        {users.map((user, index) => (
          <li className="list-group-item my-2 capitalize" key={user.id}>
            {index + 1}: {user.name} has {user.mobile} with email{" "}
            {user.email || "No Email"}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
