import React from 'react'
import { useState } from 'react';

const usersData = [
  { id: 1, name: "Amit Sharma", city: "Delhi" },
  { id: 2, name: "Neha Verma", city: "Mumbai" },
  { id: 3, name: "Rahul Singh", city: "Chandigarh" },
  { id: 4, name: "Priya Mehta", city: "Pune" }
];

export default function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = usersData.filter(user => 
    user.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type='text' placeholder='Search user by name...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name} - {user.city}</li>
        ))}
      </ul>
    </div>
  )
}
