import React from 'react'
import AddUser from '../components/Users/AddUser';
import UserList from '../components/Users/UserList';

function UserListContainer() {
  const [users, setUsers] = React.useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div className="m-5">
      <AddUser addUserHandler={addUserHandler} />

      <UserList users={users} />
    </div>
  );
}

export default UserListContainer;