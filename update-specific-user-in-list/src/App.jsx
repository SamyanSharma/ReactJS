import React, { useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "A" },
    { id: 2, name: "B" }
  ]);

  const updateUser = () => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === 2 ? { ...user, name: "updated" } : user
      )
    );
  };

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} (ID: {user.id})</li>
        ))}
      </ul>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}